class VedeoManager {
  constructor() {}

  dowanloaded(namevedeo) {
    console.log(`start downloaded vedeo ${namevedeo}`);
    setTimeout(() => {
      console.log(`vedeo ${namevedeo} has been downloaded`);
    });
  }
  uploaded(namevedeo) {
    console.log(`start uploaded vedeo ${namevedeo}`);
    setTimeout(() => {
      console.log(`vedeo ${namevedeo} has been uploaded`);
    });
  }
}
