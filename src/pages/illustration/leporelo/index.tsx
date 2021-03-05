import { FunctionComponent } from 'react';
import Link from 'next/link';
import './leporelo.scss';

const LeporeloPage: FunctionComponent = () => {
  const leporeloArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="page leporelo-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="project-description">
        <div className="project-info">
          <h3 className="title">LEPORELO</h3>
          <div className="info">
            <p>
              Año: <span className="number">2018</span>
            </p>
            <p>
              Empresa: <span>Proyecto personal</span>
            </p>
            <p>
              Rol: <span>Ilustradora</span>
            </p>
          </div>
        </div>
        <div className="description">
          <p>
            Reinterpretación de La serpiente Arcoíris, una leyenda australiana de la creación. A
            través de una experiencia editorial diferente, hice estas ilustraciones contando la
            historia del origen del mundo y logrando plasmar a través de un leporelo dibujos
            surreales y llenos de magia.
          </p>

          <a href="https://www.behance.net/manuelanavarro1">
            behance.net/manuelanavarro<span className="number">1</span>
          </a>
        </div>
      </section>
      <section className="leporelo-images">
        <div className="leporelo-segmented">
          {leporeloArr.map((leporeloId) => (
            <img
              key={leporeloId}
              src={`/static/images/leporelo/leporelo${leporeloId}.png`}
              alt={`leporelo${leporeloId}`}
            />
          ))}
        </div>
        <div className="leporelo-line">
          {leporeloArr.map((leporeloId) => (
            <img
              key={leporeloId}
              src={`/static/images/leporelo/leporelo${leporeloId}.png`}
              alt={`leporelo${leporeloId}`}
            />
          ))}
        </div>
      </section>
      <div className="right-aligned mt-20">
        <Link href={'/'}>
          <button className="back-button">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default LeporeloPage;
