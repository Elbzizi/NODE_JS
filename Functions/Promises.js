function downloadVedio(name) {
  return new Promise((resolve, reject) => {
    var isDownloaded = true;

    setTimeout(() => {
      if (isDownloaded) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

console.log("serche for védio");
console.log("select védio ");
let nameVedeo = "védio1.mp4";
downloadVedio(nameVedeo)
  .then(() => {
    console.log(`vedeo ${nameVedeo} has been downloaded`);
  })
  .catch((error) => {
    console.log(`Error vedeo ${nameVedeo} ${error}`);
  });
console.log("contune browser védio");
