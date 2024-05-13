class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  toString() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(user.toString());
    this.displayUser();  }

  displayUser() {
    const userList = document.getElementById('user');
    userList.innerHTML = '';
    this.users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.toString();
      userList.appendChild(li);
    });
  }
}

const userManager = new UserManager();

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const user = new User(name, email);
  userManager.addUser(user);
});
