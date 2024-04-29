const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

describe('User property tests', () => {
  test('Properties have the correct data type', () => {
    expect(typeof user.username).toBe('string');
    expect(typeof user.password).toBe('string');
    expect(typeof user.age).toBe('number');
    expect(typeof user.loggedIn).toBe('boolean');
  })

  test('Properties are initialized correctyl', () => {
    expect(user.username).toBe('Joe Bloggs');
    expect(user.password).toBe('test123');
    expect(user.age).toBe(21);
    expect(user.loggedIn).toBe(false);
  })
  
  test('User class should create User instance', () => {
    expect(user).toBeInstanceOf(User);
  })
})

describe('Login method', () => {
  test('Successful login if password is correct', () => {
    user.login('test123');
    expect(user.loggedIn).toBe(true);
  })

  test('Returns error if password is incorrect', () => {
    expect(user.login('test')).toBe('incorrect password');
  })
})

describe('Logout method', () => {
  test('Successful logout', () => {
    user.logout()
    expect(user.loggedIn).toBe(false)
  })
})
