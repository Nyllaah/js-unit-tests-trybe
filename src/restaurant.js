/* eslint-disable max-len */
// Siga as orientações do README!

// const createMenu = (menu) => {
//   let newMenu = {
//     fetchMenu: () => menu,
//     consumption: [],
//     order: (item) => {
//       let items = Object.values(newMenu.fetchMenu()).join(' ');
//         if (items.includes(`${item}`)) {
//           newMenu.consumption.push(item);
//         } else {
//           console.log('Item indisponível');
//         }
//     },
//   };
//   return newMenu;
// };

const createMenu = (menu) => {
  let inConsumption = [];
  return {
    fetchMenu: () => menu,
    order: (item) => {
      let items = [...Object.keys(menu.food), ...Object.keys(menu.drinks)];
      if (items.includes(item)) {
        inConsumption.push(item);
        console.log(inConsumption);
      } else {
        return 'Item indisponível';
      }
    },
    consumption: inConsumption,
  };
};

createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).order('file');
console.log(createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).order('file'));

module.exports = createMenu;
