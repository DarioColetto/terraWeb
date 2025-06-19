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
      'Generacion de frio o calor segun se requiera'
    ],
    icon: 'hoja',
  },
  {
    title: 'Eficiencia Energetica',
    items: [
      'Disponibilidad 24/7',
      '1 unidad eléctrica equivale a 4 unidades térmicas',
      'Combinable con paneles solares'
    ],
    icon: 'efficiency',
  },
  {
    title: 'Economía',
    items: ['Ahorro de hasta el 70% en boletas',
      'Altos rendimientos a bajo consumo',
      'Mantenimiento cada 2 a 5 años'

    ],
    icon: 'saving',
  },
  {
    title: 'Estética',
    items: [
      `Losa radiante bajo suelo o piscina`,
      `Fan coils escondidos en techos o paredes`,
      'Bomba de calor en sala de maquinas'
    ],
    icon: 'home',
  },
];

