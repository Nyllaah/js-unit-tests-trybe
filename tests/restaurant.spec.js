const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu).toBeDefined();
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
  });
});
