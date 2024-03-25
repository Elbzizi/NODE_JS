function downloadVedio(name, callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

console.log("serche for védio");
console.log("select védio ");
downloadVedio("védio1.mp4", () => {
  console.log("download védio successfuly");
});
console.log("contune browser védio");
