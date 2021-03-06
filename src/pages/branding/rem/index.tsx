import { FunctionComponent } from 'react';
import Link from 'next/link';
import './rem.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { remProcessSteps } from './data';
import Process from '../../../components/Process';

const RemPage: FunctionComponent = () => {
  const servicesArr = [1, 2, 3];
  return (
    <div className="page rem-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="row project-description mb-50">
        <div className="project-info col-xs-24 col-md-10">
          <h3 className="title">REM</h3>
          <p>
            Rem agencia creativa es un emprendimiento propio creado con el fin de mezclar mis
            conocimientos en pro de ayudar a diferentes emprendimientos a transformarse. Apoyamos
            desde la estrategia hasta la imagen visual para que las marcas puedan dar un mensaje
            claro directo y eficiente a la hora de vender sus productos o servicios.
          </p>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/remagenciacreativa">
            instagram.com/remagenciacreativa
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
          <img src={`/static/images/rem/moodboard.png`} alt={`moodboard`} />
        </div>
      </section>
      <section className="tools"></section>
      <section className="process-container">
        <h4 className="title">Proceso</h4>
        <Process steps={remProcessSteps} />
      </section>
      <section className="evidence-container">
        <h4 className="title">Nuestros servicios</h4>
        <div className="evidence row mb-30 justify-space-between">
          {servicesArr.map((serviceIndex) => (
            <div key={serviceIndex} className="col-xs-24 xol-lg-8 evidence-item">
              <img
                src={`/static/images/rem/services${serviceIndex}.png`}
                alt={`services${serviceIndex}`}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="logos-container row">
        <div className="logo-container col-xs-24 col-lg-12">
          <img src="/static/images/rem/rem1.png" alt="rem1" />
        </div>
        <div className="logo-container col-xs-24 col-lg-12">
          <img src="/static/images/rem/rem2.png" alt="rem2" />
        </div>
      </div>
    </div>
  );
};

export default RemPage;
