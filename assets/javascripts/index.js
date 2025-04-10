import * as $ from "jquery";
import "popper.js";
import "bootstrap";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons/faCloudDownloadAlt";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faChrome } from "@fortawesome/free-brands-svg-icons/faChrome";
import { faFirefox } from "@fortawesome/free-brands-svg-icons/faFirefox";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons/faFileVideo";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons/faGlobeAmericas";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons/faWindowRestore";
import { faColumns } from "@fortawesome/free-solid-svg-icons/faColumns";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons/faFileAlt";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";
import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons/faBroadcastTower";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faTerminal } from "@fortawesome/free-solid-svg-icons/faTerminal";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";
import { faSitemap } from "@fortawesome/free-solid-svg-icons/faSitemap";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

library.add(
  faCloudDownloadAlt,
  faGithub,
  faAngleRight,
  faBars,
  faChrome,
  faFirefox,
  faYoutube,
  faEnvelope,
  faFileVideo,
  faGlobeAmericas,
  faGlobe,
  faWindowRestore,
  faColumns,
  faFileAlt,
  faPlayCircle,
  faCube,
  faBroadcastTower,
  faList,
  faCommentDots,
  faLayerGroup,
  faCog,
  faTerminal,
  faTools,
  faSitemap,
  faTimes,
  faCheck,
);
dom.watch();

$(() => {
  $("#navbarSupportedContent")
    .on("show.bs.collapse", () => $(".navbar").addClass("expanded"))
    .on("hide.bs.collapse", () => $(".navbar").removeClass("expanded"));

  if (document.getElementById("nightly-builds")) {
    load_nightly();
  }

  if (document.body.classList.contains("download")) {
    // if url contains #beta-downloads, show the section and scroll to it
    if (location.hash.includes("#beta-downloads")) {
      $("#beta-downloads").collapse("show");
      const element = document.getElementById("beta-downloads");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
});

// Nightly table

function formatDate(str) {
  return new Date(str).toDateString();
}

async function load_nightly() {
  const data = await fetch_artifacts();
  const commits = await fetch_commits();
  const tableBody = document.getElementById("table-body");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  let commit_dict = {};
  commits.forEach((commit) => {
    commit_dict[commit.sha] = {
      author: commit.commit.author.name,
      message: commit.commit.message,
    };
  });

  try {
    tableBody.append(
      ...(await Promise.all(
        data.artifacts
          .filter((item) => item.workflow_run.head_sha in commit_dict)
          .map(async (item) => {
            const tr = document.createElement("tr");
            const sha = item.workflow_run.head_sha;
            const url = `https://github.com/iina/iina/actions/runs/${item.workflow_run.id}/artifacts/${item.id}`;
            const commit = commit_dict[sha];

            tr.innerHTML = `
          <td>${formatDate(item.created_at)}</td>
          <td align="center"><i class="fa-solid fa-${
            item.expired ? "times" : "check"
          }"></i></td>
          <td>${commit.message.split("\n")[0]}</td>
          <td>${commit.author}</td>
          <td><a href="https://github.com/iina/iina/commit/${sha}">${sha.substring(
              0,
              8,
            )}</a></td>
          <td><a href="${url}">Download on GitHub</a></td>
        `;
            return tr;
          }),
      )),
    );
  } catch {
    tableBody.innerHTML = `<div class="text-danger">Error occurred when fetching data from GitHub. Please visit GitHub Actions directly.</div>`;
  }
}

async function fetch_artifacts() {
  const res = await fetch(
    "https://api.github.com/repos/iina/iina/actions/artifacts?per_page=100",
  );
  return await res.json();
}

async function fetch_commits(sha) {
  const res = await fetch(
    `https://api.github.com/repos/iina/iina/commits?per_page=100`,
  );
  return await res.json();
}

window.fetch_artifacts = fetch_artifacts;
