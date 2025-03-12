export type Info = {
  title: string;
  items: string[];
  icon: string;
}[];

export const data: Info = [
  {
    title: 'Fuente inagaotable',
    items: [
      'Utiliza el calor natural de la Tierra',
      'Fuente de energía renovable y sostenible',
    ],
    icon: 'charge',
  },
  {
    title: 'Eficiencia Energetica',
    items: [
      'Capacidad de generación constante y predecible',
      'altos rendimientos a bajo consumo eléctrico',
      'bajos costos de mantenimiento',
    ],
    icon: 'eco',
  },
  {
    title: 'Menor Impacto Visua',
    items: ['Suelo radiante o fan coils se colocan bajo suelo, pared o techo'],
    icon: 'eye',
  },
  {
    title: 'Disponibilidad 24/7',
    items: [
      'Temperatura del subsuelo constante',
      'no depende de condiciones climáticas',
      'climas extremos, mejor rendimiento',
    ],
    icon: 'clock',
  },
  {
    title: 'Larga vida util',
    items: [
      `Las sondas geotérmicas, hechas de materiales como polietileno de
        alta densidad, están enterradas y protegidas de los elementos, lo
        que reduce el desgaste`,
      `Las bombas de calor geotérmicas están diseñadas para funcionar
        eficientemente con poco mantenimiento al menos por 20 años.`,
    ],
    icon: 'heart',
  },
];

