export function loadContent(pageName) {
  $.get(`pages/${pageName}.html`, (data) => {
    // console.log(data);
    $("#app").html(data);
  }).fail((error) => {
    // console.log("error ", error);
    alert("page is " + error.statusText);
  });
}
