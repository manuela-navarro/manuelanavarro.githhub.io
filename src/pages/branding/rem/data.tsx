import { ProcessStep } from '../../../components/Process';
import { FunctionComponent } from 'react';

export const remProcessSteps: ProcessStep[] = [
  {
    id: 1,
    content: (
      <>
        <h4>Modelo de negocio</h4>
        Usando el Canvas de modelo de negocio Se decidió que sería rem, que ofrecería, a que mercado
        le apuntaríamos y por qué medios llegaríamos. También se estructuraron Los servicios y los
        precios para poder construir según las necesidades de cada usuario, su plan de estrategia y
        diseño.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <h4>Benchmark</h4>
        Se hizo un benchmark de emprendimientos que estuvieran haciendo cosas parecidas y también se
        estructuraron la visión y misión de la marca. Además de definir cual sería nuestro valor
        agregado.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <h4>Logo</h4>
        Se diseñó una propuesta de logo minimalista, que pudiera se usada con cualquiera de las
        marcas que creamos para así poder poner nuestro logo en los manuales de marca creados.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <h4>Apertura gráfica</h4>
        Se diseñaron diferentes variaciones de logo y un símbolo que nos representara. Además le
        dimos una voz a la marca Usando los sueños como inspiración.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <h4>Estrategia de mercado</h4>
        Empezamos a hacer campañas de mercadeo a través del voz a voz logrando conseguir varios
        clientes que necesitaban una transformación o una creación de marca y páginas web.
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <h4>Organización</h4>
        Desde ese momento hasta ahora hemos estado organizando, construyendo y mejorando nuestros
        servicios, atención al usuario, precios, diseño etc.
      </>
    ),
  },
];

const defaultComponent: FunctionComponent = () => <></>;
export default defaultComponent;
