const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  let newMenu = createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}});
  it('Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    expect(createMenu().fetchMenu).toBeDefined();
  })
  it('Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () => {
    expect(typeof createMenu().fetchMenu).toBe('function');
  })
  it('Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.', () => {
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);
  })
  it('verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
  })
  it('Verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.', () => {
    expect(createMenu().consumption).toEqual([]);
  })
  it('Verifica se, caso o valor passado por parâmetro para order não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks), o retorno da chave order deve exibir a mensagem "Item indisponível" e não alterar a chave consumption.', () => {
    expect(createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}).order('hamburguer')).toBe('Item indisponível');
    newMenu.order('coxinha');
    expect(newMenu.consumption).toEqual(['coxinha']);
  })
  it('Verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.', () => {
    newMenu.order('agua');
    newMenu.order('cerveja');
    expect(newMenu.consumption).toEqual(['coxinha', 'agua', 'cerveja']);
  })
});
