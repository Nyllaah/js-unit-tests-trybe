const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu().fetchMenu).toBeDefined();
    expect(typeof createMenu().fetchMenu).toBe('function');
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
    expect(createMenu().consumption).toEqual([]);
    expect(() => { createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}).order('hamburguer') }).toThrow('Item indisponível');
    // let newMenu = createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}).order(['coxinha', 'agua','cerveja']);
    // expect(newMenu.consumption).toEqual(['coxinha', 'agua','cerveja']);

  });
});