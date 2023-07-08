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
        total += Object.values(inConsumption[i])[0];
        console.log(Object.values(inConsumption[i]));
        console.log(total);
      }
    },
  };
};

createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).order('coxinha');
createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).order('agua');
createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } }).order('agua');



module.exports = createMenu;
