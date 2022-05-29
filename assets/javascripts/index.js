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
);
dom.watch();

$(() => {
  $("#navbarSupportedContent")
    .on("show.bs.collapse", () => $(".navbar").addClass("expanded"))
    .on("hide.bs.collapse", () => $(".navbar").removeClass("expanded"));
});
