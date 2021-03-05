import { FunctionComponent } from 'react';
import './index.scss';
import HomeDashboard from '../components/HomeDashboard';
import NavBar from '../components/NavBar';

const Home: FunctionComponent = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="banner-container">
        <div className="banner">
          <img alt="title" />
        </div>
      </div>
      <HomeDashboard />
      <section id="contact" className="contact-info">
        <h4 className="title">CONTACTO</h4>
        <div className="info-container">
          <div className="info mail">
            <div className="color-dot green" />
            <span className="label">Correo</span>
            <a className="value" href="mailto:mnf9419@gmail.com">
              mnf9419@gmail.com
            </a>
          </div>
          <div className="info linkedin">
            <div className="color-dot red" />
            <span className="label">Linkedin</span>
            <a
              className="value"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manuela-navarro/"
            >
              manuela-navarro
            </a>
          </div>
          <div className="info cellphone">
            <div className="color-dot orange" />
            <span className="label">Celular</span>
            <a className="value" href="tel:+573115091448">
              +57 3115091448
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
