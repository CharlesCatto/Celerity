const fluxSortantsMenus = {
  // ==========================================
  // FLUX SORTANTS
  // ==========================================

  'flux-sortants': {
    title: null,

    items: [
      {
        key: '1',
        label: 'Préparation',
        next: 'preparation',
      },
      {
        key: '2',
        label: 'Modifs ctn',
        next: 'modifs-ctn',
      },
      {
        key: '3',
        label: 'Contrôle ctn.',
        next: 'controle-ctn',
      },
      {
        key: '4',
        label: 'Largage',
        next: 'largage',
      },
      {
        key: '5',
        label: 'Expédition',
        next: 'expedition',
      },
    ],
  },

  // ==========================================
  // MODIFS CTN
  // ==========================================

  'modifs-ctn': {
    title: null,

    items: [
      {
        key: '1',
        label: 'Interro ctn',
        next: 'interro-ctn',
      },
      {
        key: '2',
        label: 'Trf Partiel Cnt',
        next: 'trf-partiel-ctn',
      },
      {
        key: '3',
        label: 'Trf Total Cnt',
        next: 'trf-total-ctn',
      },
      {
        key: '4',
        label: 'Impression CTN',
        next: 'impression-ctn',
      },
      {
        key: '5',
        label: 'Déplacer Ctn',
        next: 'deplacer-ctn',
      },
      {
        key: '6',
        label: 'Regroup Ctn',
        next: 'regroup-ctn',
      },
    ],
  },

  // ==========================================
  // ÉCRAN DE TEST ACTUEL
  // ==========================================

  'trf-partiel-ctn': {
    type: 'screen',
    title: 'Trf Partiel Cnt',
  },

  // ==========================================
  // PLACEHOLDERS
  // ==========================================

  preparation: {
    type: 'screen',
    title: 'Préparation',
  },

  'controle-ctn': {
    type: 'screen',
    title: 'Contrôle ctn.',
  },

  largage: {
    type: 'screen',
    title: 'Largage',
  },

  expedition: {
    type: 'screen',
    title: 'Expédition',
  },

  'interro-ctn': {
    type: 'screen',
    title: 'Interro ctn',
  },

  'trf-total-ctn': {
    type: 'screen',
    title: 'Trf Total Cnt',
  },

  'impression-ctn': {
    type: 'screen',
    title: 'Impression CTN',
  },

  'deplacer-ctn': {
    type: 'screen',
    title: 'Déplacer Ctn',
  },

  'regroup-ctn': {
    type: 'screen',
    title: 'Regroup Ctn',
  },
};

export default fluxSortantsMenus;