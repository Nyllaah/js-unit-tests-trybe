/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
  let inConsumption = [];
  return {
    fetchMenu: () => menu,
    order: (item) => {
      let food = [...Object.entries(menu.food).map(([key, value]) => ({ [key]: value }))];
      let drinks = [...Object.entries(menu.drinks).map(([key, value]) => ({ [key]: value }))];
      let allItems = [...food, ...drinks];
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
        total += price;
      }
      let tip = total * 0.1;
      return (total + tip).toFixed(2);
    },
  };
};

module.exports = createMenu;
