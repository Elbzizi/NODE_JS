const event = require("events");

class VedeoManager extends event {
  constructor() {
    super();
  }

  dowanloaded(namevedeo) {
    console.log(`start downloaded vedeo ${namevedeo}`);
    setTimeout(() => {
      console.log(`vedeo ${namevedeo} has been downloaded`);
      const vedeo = { name: namevedeo };
      this.emit("DowanloadedComplet", vedeo);
    }, 3000);
  }
  uploaded(namevedeo) {
    console.log(`start uploaded vedeo ${namevedeo}`);
    setTimeout(() => {
      console.log(`vedeo ${namevedeo} has been uploaded`);
      this.emit("UploadedComplet");
    }, 3000);
  }
}

var v1 = new VedeoManager();
v1.dowanloaded("vedeo1.mp4");
v1.on("DowanloadedComplet", (args) => {
  console.log(`signal dowanloaded vedeo ${args.name} complet`);
});
v1.uploaded("vedeo2.mp4");
v1.on("UploadedComplet", () => {
  console.log("signal Uploaded vedeo complet");
});
