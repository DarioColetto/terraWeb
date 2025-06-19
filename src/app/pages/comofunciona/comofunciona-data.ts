export type CardInfo = {
  title: string;
  content: string;
  img: string;
}[];

export const cardInfo: CardInfo = [
  {
    title: 'Sistema de captación',
    content: `La geotermia para climatización utiliza sondas que viajan por el subsuelo a cierta profundidad. 
    Estas sondas, capturan el calor del suelo en invierno y lo transfieren al edificio, mientras que en verano, el proceso se invierte para lograr el refrescamiento. 
    Hay varias formas de captar la temperatura deseada por medio de las sondas, siendo nuestro geólogo el encargado de estudiar la zona para determinar el adecuado.
`,
    img: '/garden-400.jpg',
  },
  {
    title: 'Bomba de Calor',
    content: `Las bombas de calor geotérmicas son el corazón del sistema. 
    Estas bombas intercambian calor con el subsuelo, aprovechando la temperatura de 15°C promedio del terreno durante todo el año. 
    En invierno, extrae el calor del suelo para calentar el edificio. En verano, expulsa el calor del edificio hacia el subsuelo para enfriar.`,
    img: '/garden-400.jpg',
  },
  {
    title: 'Sistema de Distribución',
    content: `El frío/calor recogido se distribuye en el edificio mediante sistemas de suelo radiante y/o fan coils. 
    El suelo radiante proporciona tanto calefacción como refrigeración, distribuyendo el calor o el frío de manera uniforme y confortable desde el piso. 
    Los fan coils, por su parte, distribuyen el aire caliente o frío de manera eficiente por todo el espacio.
     Ambos sistemas garantizan una climatización eficiente y sostenible.
`,
    img: '/garden-400.jpg',
  },
];
