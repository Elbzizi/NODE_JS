  async function notifyOnDownload(vedio) {
    try {
      await downloadVedio(vedio);
      console.log(`vedio ${vedio} has been dowanloaded`);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("serche for védio");
  console.log("select védio ");
  let nameVedeo = "védio1.mp4";
  notifyOnDownload(nameVedeo);
  console.log("contune browser védio");
  