/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
  let newMenu = {
    fetchMenu: () => menu,
  };
  return newMenu;
};

module.exports = createMenu;
