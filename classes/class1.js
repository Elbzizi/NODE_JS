class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    // console.log(this);
  }
  login() {
    console.log(`logged in with user ${this.email}`);
  }
  logout() {
    console.log(`logged out with user ${this.email}`);
  }
}

class Admin extends User {
  DeleteUser(user) {
    users = users.filter((use) => {
      return use.email != user.email;
    });
  }
}
user1 = new User("omar", "omar@gmail.com");
user2 = new User("khalid", "khalid@gmail.com");
user3 = new User("ali", "ali@gmail.com");
user4 = new User("ismail", "ismail@gmail.com");
user5 = new User("mohammed", "mohammed@gmail.com");
user6 = new User("yassine", "yassine@gmail.com");
users = [user1, user2, user3, user4, user5, user6];
console.log(users);
admin = new Admin("elbzizi", "elbzizi@gmail.com");
// user1.login();
// user1.logout();
admin.DeleteUser(user3);
console.log(users);
