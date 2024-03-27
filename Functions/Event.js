class VedeoManager {
  constructor() {}

  uploaded(namevedeo) {
    console.log(`start downloaded vedeo ${namevedeo}`);
    setTimeout(() => {
      console.log(`vedeo ${namevedeo} has been downloaded`);
    });
  }
}
