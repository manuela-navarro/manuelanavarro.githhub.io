import { FunctionComponent } from 'react';
import Link from 'next/link';
import './twins.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { processStep, twinsProcessSteps } from './data.tsx';

const TwinsPage: FunctionComponent = () => {
  const graphicsArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="page twins-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">TWINS</h3>
          <p>
            Twins es un emprendimiento de pastelería saludable enfocado en mejorar la salud de las
            personas. Este negocio busca concientizar a las personas sobre el consumo de azúcar sin
            privarlos de postres ni antojos.
          </p>
          <a href="https://www.instagram.com/twinstortasycupcakes/">
            instagram.com/twinstortasycupcakes
          </a>
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
          <img src={`/static/images/twins/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="process-container">
        <h4 className="title">Proceso</h4>
        <div className="process">
          {twinsProcessSteps.map(({ content, id }: processStep) => (
            <div key={id} className="process-item">
              <div className="process-item-content">{content}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="evidence row mb-30">
        <div className="col-xs-24 col-lg-7 logo">
          <h4 className="title">LOGO PRINCIPAL</h4>
          <img src="/static/images/twins/logoPrincipal.png" alt="logo" className="principal-logo" />
        </div>
        <div className="col-xs-24 col-lg-17 logo-variations">
          <h4 className="title">VARIACIONES DE LOGO</h4>
          <div className="logos">
            <div className="logo-with-title">
              <img
                src="/static/images/twins/logoRedondo.png"
                alt="logo"
                className="principal-logo"
              />
              <p>Redondo</p>
            </div>
            <div className="logo-with-title">
              <img
                src="/static/images/twins/logoSimbolico.png"
                alt="logo"
                className="principal-logo"
              />
              <p>Simbólico</p>
            </div>
            <div className="logo-with-title">
              <img
                src="/static/images/twins/logoSencillo.png"
                alt="logo"
                className="principal-logo"
              />
              <p>Sencillo</p>
            </div>
          </div>
        </div>
      </section>
      <section className="graphics-container">
        <h4 className="title">APERTURA GRÁFICA</h4>
        <div className="graphics">
          {graphicsArr.map((graphicIndex) => (
            <img
              src={`/static/images/twins/graphics${graphicIndex}.png`}
              alt={`graphic${graphicIndex}`}
            />
          ))}
        </div>
      </section>
      <section className="pattern">
        <h4 className="title">PATRÓN</h4>
        <img src={`/static/images/twins/pattern.png`} alt={`pattern`} />
      </section>
    </div>
  );
};

export default TwinsPage;
