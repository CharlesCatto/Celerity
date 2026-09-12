const mainMenu = {
  main: {
    title: null,

    items: [
      {
        key: '1',
        label: 'Flux entrants',
        next: 'flux-entrants',
      },
      {
        key: '2',
        label: 'Flux sortants',
        next: 'flux-sortants',
      },
      {
        key: '3',
        label: 'Inv / Gest stk',
        next: 'inventory',
      },
      {
        key: '4',
        label: 'Superviseur',
        next: 'superviseur',
      },
      {
        key: '5',
        label: 'LED',
        next: 'led',
      },
      {
        key: '6',
        label: 'Chariot Nord',
        next: 'chariot-nord',
      },
    ],
  },
};

export default mainMenu;