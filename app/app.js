import { loadContent } from "../model/model.js";

$(document).ready(function () {
  loadContent("home");
  initListeners();
});

function initListeners() {
  $("nav a").on("click", (e) => {
    let pageName = e.currentTarget.id;
    loadContent(pageName);
  });
}
