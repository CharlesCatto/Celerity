import mainMenu from './mainMenu';
import fluxEntrantsMenus from './fluxEntrants';
import fluxSortantsMenus from './fluxSortants';
import inventoryMenus from './inventory';
import superviseurMenus from './superviseur';
import ledMenus from './led';
import chariotNordMenus from './chariotNord';

const menus = {
  ...mainMenu,
  ...fluxEntrantsMenus,
  ...fluxSortantsMenus,
  ...inventoryMenus,
  ...superviseurMenus,
  ...ledMenus,
  ...chariotNordMenus,
};

export default menus;