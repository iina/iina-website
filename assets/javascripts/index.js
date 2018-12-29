import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';

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
);
dom.watch();

$(() => {
    $("#navbarSupportedContent")
        .on("show.bs.collapse", () => $(".navbar").addClass("expanded"))
        .on("hide.bs.collapse", () => $(".navbar").removeClass("expanded"));
});
