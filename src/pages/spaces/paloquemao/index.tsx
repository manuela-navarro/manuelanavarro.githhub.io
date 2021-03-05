import { FunctionComponent } from 'react';
import Link from 'next/link';
import './paloquemao.scss';

const PaloquemaoPage: FunctionComponent = () => {
  return (
    <div className="page trackway-page">
      <Link href={'/'}>
        <button className="back-button">Volver</button>
      </Link>
      <section className="row project-description">
        <div className="project-info">
          <h3 className="title">PALOQUEMAO</h3>
          <p>
            A la orden, qué se le ofrece... es un proyecto hecho para poner en el mapa a quienes en
            Colombia hacen una labor increíble vendiendo y cultivando diferentes productos para
            poder poner en la mesa de los hogares colombianos la comida del día a día. A través de
            diferentes estrategias logramos construir toda una experiencia que reconociera las
            labores de los trabajadores de Paloquemao y también a través de sus productos
            construimos un desfile hecho en el antiguo Bronx bogotano, un lugar que paso de ser un
            espacio donde Los habitantes de calle se reunían a vender, comprar y consumir drogas a
            ser un espacio artístico en el cual todos los ciudadanos pueden recorrer y experimentar
            arte. Todo este proyecto fue posible gracias a ser la ganadora de la beca creativa Bronx
            distrito Creativo, la cual me dio los recursos económicos para construir esta
            experiencia que a mí me cambió la vida y la visión de Bogotá.
          </p>
          <div className="info">
            <p>
              Año: <span className="number">2018</span>
            </p>
            <p>
              Beca: <span>El desfiladero, Bronx distrito creativo</span>
            </p>
            <p>
              Rol: <span>Creadora de proyecto</span>
            </p>
          </div>
        </div>
        <div className="description"></div>
      </section>
    </div>
  );
};

export default PaloquemaoPage;
