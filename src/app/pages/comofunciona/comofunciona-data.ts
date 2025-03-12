export type CardInfo = {
  title: string;
  content: string;
  img: string;
}[];

export const cardInfo: CardInfo = [
  {
    title: 'Sistema de Recolección',
    content: `La geotermia para climatización utiliza perforaciones en el terreno
          para instalar tuberías a cierta profundidad. Estas tuberías, llamadas
          sondas geotérmicas, circulan un fluido que recoge el calor del suelo
          en invierno y lo transfiere al edificio. En verano, el proceso se
          invierte: el calor del edificio es expulsado al subsuelo. Las
          perforaciones suelen tener entre 50 y 200 metros de profundidad,
          dependiendo del sistema y las características del terreno.`,
    img: '/garden-400.jpg',
  },
  {
    title: 'Sistema de Distribución',
    content: `El calor recogido se distribuye en el edificio mediante sistemas de
          suelo radiante o fan coils. El suelo radiante proporciona tanto
          calefacción como refrigeración, distribuyendo el calor o el frío de
          manera uniforme y confortable desde el piso. Los fan coils, por su
          parte, distribuyen el aire caliente o frío de manera eficiente por
          todo el espacio. Ambos sistemas garantizan una climatización eficiente
          y sostenible.`,
    img: '/garden-400.jpg',
  },
  {
    title: 'Bomba de Calor',
    content: `Las bombas de calor geotérmicas son el corazón del sistema. Estas
          bombas intercambian calor con el subsuelo, aprovechando la temperatura
          constante del terreno durante todo el año. En invierno, extraen el
          calor del suelo para calentar el edificio. En verano, expulsan el
          calor del edificio hacia el subsuelo para enfriar.`,
    img: '/garden-400.jpg',
  },
];
