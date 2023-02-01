import {Ihm} from "./classes/Ihm.js";

const ihm = new Ihm (document.querySelector("#validate-btn"), document.querySelector("#title"), document.querySelector("#content"), document.querySelector("#search"), document.querySelector("#search-btn"), document.querySelector("#table-content"))
ihm.addNewActivity();
ihm.selectActivity();
ihm.deleteActivity();