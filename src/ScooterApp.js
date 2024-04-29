const Scooter = require('./Scooter');
const User = require('./User')

class ScooterApp {
  constructor() {
    this.stations = {
      'station 1': [],
      'station 2': [],
      'station 3': []
    }
    this.registeredUsers = {}
  }

  registerUser(username, password, age) {
    if (username in this.registeredUsers) {
      return 'already registered';
    } else if (age < 18) {
      return 'too young to register'
    } else {
      let newUser = new User(username, password, age)
      this.registeredUsers[username] = newUser;
      console.log('user has been registered');
      return newUser;
    }
  }

  loginUser(username, password) {
    if (Object.keys(this.registeredUsers).includes(username)) {
      this.registeredUsers[username].login(password)
      return 'user has been logged in'
    } else {
      return 'Username or password is incorrect'
    }
  }

  logoutUser(username) {
    if (Object.keys(this.registeredUsers).includes(username) && this.registeredUsers[username].loggedIn == true) {
      this.registeredUsers[username].logout();
      return 'user is logged out'
    } else {
      return 'no such user is logged in'
    }
  }

  createScooter(station) {
    if (station in this.stations) {
      const newScooter = new Scooter(station)
      this.stations[station].push(newScooter);
      console.log('created new scooter');
      return newScooter;
    } else {
      return 'no such station'
    }
  }

  dockScooter(scooter, station) {
    if (station in this.stations) {
      for (let item in this.stations) {
        if (this.stations[item].nextSerial == scooter.nextSerial) {
          return 'scooter already at station'
        } else {
          scooter.dock(station);
          this.stations[station].push(scooter);
          return 'scooter is docked'
        }
      }
    } else {
      return 'no such station'
    }
  }

  rentScooter(scooter, user) {
    for (let key in this.stations) {
      if (this.stations[key] == scooter) {
        scooter.rent(user)
        return 'scooter is rented'
      }
    }
    return 'scooter already rented'
  }

  print() {
    console.log(`Registered users: ${Object.keys(this.registeredUsers)} \n`);
    console.log(`Scooters available:`)
    for (let key in this.stations) {
      console.log(`${key}: ${Object.keys(this.stations[key]).length}`)
    }
  }
}

module.exports = ScooterApp
