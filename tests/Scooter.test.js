const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object
describe('Scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })

  test('Properties are initialized correctly', () => {
    const scooter = new Scooter("station 1")
    expect(scooter.station).toBe("station 1")
    expect(scooter.user).toBe(null)
    expect(scooter.serial).toBe(undefined)
    expect(scooter.charge).toBe(100)
    expect(scooter.isBroken).toBe(false)
  })
})

// Method tests
describe('Rent method', () => {
  beforeEach(() => {
    scootie = new Scooter("station 1")
    Rashell = new User("rxshellg", "password123", 21)
  })
  test('Accepts a user instance of the User class as an argument', () => {
    scootie.rent(Rashell)
    expect(scootie.user).toBe(Rashell.username)
  })

  test('Successful checkout if scooter is charged above 20% and not broken', () => {
    scootie.rent(Rashell)
    expect(scootie.station).toBe(null)
    expect(scootie.user).toBe("rxshellg")
  })

  test('Error if scooters battery is dead', () => {
    scootie.charge = 19;
    expect(scootie.rent(Rashell)).toBe("Scooter needs to charge or scooter needs repair")
  })

  test('Error if scooter is broken', () => {
    scootie.isBroken = true;
    expect(scootie.rent(Rashell)).toBe("Scooter needs to charge or scooter needs repair")
  })
  // dock method
  describe('Dock method', () => {
    test('Can return the scooter to the station and clear out the user', () => {
      scootie.dock("station 1")
      expect(scootie.station).toBe("station 1")
      expect(scootie.user).toBe(null)
    })
  })
  // requestRepair method

  // charge method

})
