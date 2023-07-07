/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
  let newMenu = {
    fetchMenu: () => menu,
    consumption: [],
    order: (item) => {
      let items = Object.values(newMenu.fetchMenu()).join(' ');
        if (items.includes(`${item}`)) {
          newMenu.consumption.push(item);
        } else {
          throw new Error('Item indisponível');
        }
    },
  };
  return newMenu;
};

console.log(createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}).order(['coxinha']));

module.exports = createMenu;
