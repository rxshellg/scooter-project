const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')

const scooterApp = new ScooterApp()
describe('ScooterApp class', () => {
  test('ScooterApp class should create ScooterApp instance', () => {
    expect(scooterApp).toBeInstanceOf(ScooterApp)
  })  
})

// register user
describe('registerUser method', () => {
  beforeEach(() => {

  })
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })

  test('Should return error if already registered', () => {
    scooterApp.registerUser('rxshell', 'pass123', 21);
    expect(scooterApp.registerUser('rxshell', 'pass123', 21)).toBe('already registered')
  })

  test('Should return error if younger than 18', () => {
    expect(scooterApp.registerUser('rxshellg', 'pass123', 17)).toBe('too young to register')
  })
})

describe('loginUser method', () => {
  beforeEach(() => {
    scooterApp.registerUser('testing', 'again', 21)
  })
  test('Should return error if username or password is incorrect', () => {
    expect(scooterApp.loginUser('random', 'pass123')).toBe('Username or password is incorrect')
  })

  test('Successful login if username and password are correct', () => {
    expect(scooterApp.loginUser('testing', 'again')).toBe('user has been logged in')
  })
})

describe('logoutUser method', () => {
  beforeEach(() => {
    scooterApp.registerUser('rxshellg', 'pass123', 21)
    scooterApp.loginUser('rxshellg', 'pass123')
  })
  test('Should return error if user is not logged in', () => {
    scooterApp.logoutUser('rxshellg')
    expect(scooterApp.logoutUser('rxshellg')).toBe('no such user is logged in')
  })

  test('Successful logout if username is correct', () => {
    expect(scooterApp.logoutUser('rxshellg')).toBe('user is logged out')
  })
})

describe('CreateScooter method', () => {
  test('Should return error if station is not found', () => {
    expect(scooterApp.createScooter("station x")).toBe('no such station')
  })
  test('Should return Scooter instance if successfuly created', () => {
    scooterApp.createScooter("station 1")
    expect(scooterApp.createScooter("station 1")).toBeInstanceOf(Scooter)
  })  
})

describe('dockScooter method', () => {
  beforeEach(() => {
    scooty = new Scooter('station 1');
  })
  test('Should return error if station is not found', () => {
    expect(scooterApp.dockScooter(scooty, "station x")).toBe('no such station')
  })

  test('Should return error if scooter has not been rented', () => {
    expect(scooterApp.dockScooter(scooty, 'station 1')).toBe('scooter already at station')
  })
})

describe('rentScooter method', () => {
  test('Should return error if scooter is alredy rented', () => {
    const testScooter = scooterApp.createScooter("station 1")
    expect(scooterApp.rentScooter(testScooter, 'rxshellg')).toBe('scooter already rented')
  })
})