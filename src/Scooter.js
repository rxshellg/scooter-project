const User = require("./User")

class Scooter {
  static nextSerial;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && this.isBroken == false) {
      this.station = null;
      this.user = user.username;
    } else {
      return `Scooter needs to charge or scooter needs repair`
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
}

module.exports = Scooter
