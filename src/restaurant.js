/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
  let inConsumption = [];
  return {
    fetchMenu: () => menu,
    order: (item) => {
      let allItems = [...Object.entries(menu.food).map(([key, value]) => ({ [key]: value })), ...Object.entries(menu.drinks).map(([key, value]) => ({ [key]: value }))];
      let available = false;
      for (let i = 0; i < allItems.length; i += 1) {
        if (Object.keys(allItems[i])[0] === item) {
          inConsumption.push(allItems[i]);
          available = true;
        }
      }
      if (available === false) {
        return 'Item indisponível';
      }
    },
    consumption: inConsumption,
    pay: () => {
      let total = 0;
      for (let i = 0; i < inConsumption.length; i += 1) {
        let price = Object.values(inConsumption[i])[0];
        console.log(price);
        total += price;
      }
      let tip = total * 0.1;
      return (total + tip).toFixed(2);
    },
  };
};

let newMenu = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } });
newMenu.order('agua');
newMenu.order('cerveja');
newMenu.order('coxinha');
newMenu.order('cerveja');
newMenu.order('cerveja');

console.log(newMenu.consumption);
console.log(newMenu.pay());

module.exports = createMenu;
