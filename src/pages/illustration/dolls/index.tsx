import { FunctionComponent } from 'react';
import Link from 'next/link';
import './dolls.scss';

const DollsPage: FunctionComponent = () => {
  const dollsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="page dolls-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="project-description">
        <div className="project-info">
          <h3 className="title">MUÑECAS</h3>
          <div className="info">
            <p>
              Año: <span className="number">2020</span>
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
            Estas son algunas mujeres que ilustré según el mood que tenía. Cada una representa
            reflexiones, sentimientos o expectativas de momentos. Gracias a este trabajo logré hacer
            una catarsis de momentos difíciles y reflexivos que tuve al principio de la pandemia. Me
            reconozco en cada uno de estos dibujos.
          </p>

          <p>Son yo y yo soy ellos.</p>

          <a href="https://www.instagram.com/manunavarroilust/">instagram.com/manunavarroilust</a>
        </div>
      </section>
      <section className="dolls-images">
        {dollsArr.map((dollIndex) => (
          <img
            key={dollIndex}
            src={`/static/images/dolls/dolls${dollIndex}.png`}
            alt={`dolls${dollIndex}`}
          />
        ))}
      </section>

      <div className="right-aligned mt-20">
        <Link href={'/'}>
          <button className="back-button">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default DollsPage;
