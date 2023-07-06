const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu().fetchMenu).not.toBeUndefined();
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toBe(['food', 'drinks']);
    expect(createMenu()).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu());
  });
});
