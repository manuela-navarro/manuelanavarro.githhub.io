import { FunctionComponent } from 'react';
import Link from 'next/link';
import './blooming.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { bloomingProcessSteps } from './data.tsx';
import Process from '../../../components/Process';

const BloomingPage: FunctionComponent = () => {
  const graphicsArr = [1, 2, 3];
  return (
    <div className="page blooming-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">BLOOMING</h3>
          <p>
            Esta marca busca sembrar y hacer florecer desde adentro del armario a una mujer llena de
            conciencia y amor por ella y por el mundo. Esta marca busca reconciliar el estilo con la
            sostenibilidad logrando crear una forma de vida donde verse bien significa estar bien
            con uno mismo y con el medio ambiente.
          </p>
          <p> La mujer que lleva esta marca sabe que : DO GOOD, LOOK GOOD.</p>
          <div className="info">
            <p>
              Año: <span className="number">2020</span>
            </p>
            <p>
              Empresa: <span>rem agencia creativa</span>
            </p>
            <p>
              Rol: <span>CEO</span>
            </p>
          </div>
        </div>
        <div className="col-12 moodboard">
          <img src={`/static/images/blooming/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="process-container">
        <h4 className="title">Proceso</h4>
        <Process steps={bloomingProcessSteps} />
      </section>
      <section className="evidence row mb-30">
        <div className="col-xs-24 col-lg-7 logo">
          <h4 className="title">LOGO PRINCIPAL</h4>
          <img
            src="/static/images/blooming/logoPrincipal.png"
            alt="logo"
            className="principal-logo"
          />
        </div>
        <div className="col-xs-24 col-lg-17 logo-variations">
          <h4 className="title">VARIACIONES DE LOGO</h4>
          <div className="logos">
            <div className="logo-with-title">
              <img
                src="/static/images/blooming/logoRedondo.png"
                alt="logo"
                className="principal-logo"
              />
              <p>Redondo</p>
            </div>
            <div className="logo-with-title">
              <img
                src="/static/images/blooming/logoSimbolico.png"
                alt="logo"
                className="principal-logo"
              />
              <p>Simbólico</p>
            </div>
          </div>
        </div>
      </section>
      <section className="graphics-container">
        <h4 className="title">APERTURA GRÁFICA</h4>
        <div className="graphics">
          {graphicsArr.map((graphicIndex) => (
            <img
              key={graphicIndex}
              src={`/static/images/blooming/graphics${graphicIndex}.png`}
              alt={`graphic${graphicIndex}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BloomingPage;
