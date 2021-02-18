import { FunctionComponent } from 'react'
import './index.scss'

const Home: FunctionComponent = () => {
  return (
    <div className="home-page">
      <div className="banner-container">
        <div className="banner">
          <h2 className="banner-title">
            <span className="text-white">ma</span>nuela navarr<span className="text-white">o</span>
          </h2>
          <h4 className="banner-subtitle">
            <span className="text-white">PO</span>RTAFOLIO
          </h4>
        </div>
      </div>
      <section id="projects" className="projects-dashboard">
        <h4 className="title">PROYECTOS</h4>
        <div className="categories-container">
          <div className="category">UX/UI</div>
          <div className="category">BRANDING</div>
          <div className="category">ILUSTRACIÓN</div>
          <div className="category">ESPACIOS</div>
        </div>
      </section>
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
              https://www.linkedin.com/in/manuela-navarro/
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
  )
}

export default Home
