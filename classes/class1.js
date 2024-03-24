class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(this);
  }
  login() {
    console.log(`logged in with user ${this.email}`);
  }
  logout() {
    console.log(`logged out with user ${this.email}`);
  }
}

user1 = new User("omar", "omar@gmail.com");
user1.login();
user1.logout();
