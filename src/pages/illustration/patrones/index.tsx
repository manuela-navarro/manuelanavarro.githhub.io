import { FunctionComponent } from 'react';
import Link from 'next/link';
import './patrones.scss';

const PatronesPage: FunctionComponent = () => {
  const patronesArr = [1, 2, 3, 4];
  return (
    <div className="page patrones-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="project-description">
        <div className="project-info">
          <h3 className="title">PATRONES</h3>
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
            Estos son diseños de patrones infantiles para cualquier superficie Son mundos ilustrados
            para fomentar la imaginación y la diversión. Estos patrones fueron hechos tanto análoga
            como digitalmente como un ejercicio de creatividad, como hobby y como forma de
            meditación para organizar la cabeza y transformar las ideas.
          </p>

          <a href="https://www.instagram.com/manunavarroilust/">instagram.com/manunavarroilust</a>
        </div>
      </section>
      <section className="patrones-images">
        {patronesArr.map((patronIndex) => (
          <img
            key={patronIndex}
            src={`/static/images/patrones/patrones${patronIndex}.png`}
            alt={`dolls${patronIndex}`}
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

export default PatronesPage;
