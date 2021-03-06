import React, { FunctionComponent } from 'react';
import { ProcessStep } from '../../../components/Process';

export const bloomingProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Workshop de propuesta de valor</h4>
        Se hizo un taller en el cual a través del Canvas de propuesta de valor, la pirámide de
        valores y ejercicios como los cinco por qué se definieron los valores de la marca, cómo
        quería ser vista por sus clientes y cómo quería sentirse, ademaás de elegir el nombre
        correcto.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Benchmark</h4>
        Se hizo un benchmark de emprendimientos que estuvieran haciendo cosas parecidas y también se
        estructuraron la visión y misión de la marca.
        <h4>Mood board</h4>
        Se hizo un mood board para entender como se quería sentir la marca.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Logo</h4>
        Se diseñaron tres propuestas de logo que cumplieran con los valores y objetivos de la marca
        para que el cliente escogiera con cual de los diseños se identificaba, hacerle
        modificaciones y sacar el logo principal.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>Apertura gráfica</h4>
        Se diseñaron diferentes variaciones de logo y también se creó un universo gráfico que
        acompañara la imagen de la pastelería.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Aplicaciones de marca</h4>
        Al ser un emprendimiento digital, se crearon plantillas para instagram de forma que pudieran
        ser usadas varias veces y siguieran un lineamiento de marca.
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <h4>Manual de marca</h4>
        Se creó un manual de marca explicando las aplicaciones del logo, las aplicaciones de la
        apertura gráfica , la paleta de color y por supuesto los valores de marca.
      </>
    ),
  },
];

const defaultComponent: FunctionComponent = () => <></>;
export default defaultComponent;
