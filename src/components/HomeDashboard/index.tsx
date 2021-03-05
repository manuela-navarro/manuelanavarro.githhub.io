import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import './home-dashoard.scss'
import { ProjectCollectionItem, projectsCollection } from '../../pages/projects'

const HomeDashboard: React.FunctionComponent = () => {
  const [modal, setModal] = useState<ProjectCollectionItem | null>(null)

  return (
    <section id="projects" className="projects-dashboard">
      <h4 className="title">PROYECTOS</h4>
      <div className="categories-container">
        {projectsCollection.map((modalItem) => (
          <button
            key={modalItem.title}
            onClick={() => setModal(modalItem)}
            className={`category bg-${modalItem.color}`}
          >
            {modalItem.title}
          </button>
        ))}
      </div>
      {!!modal && <ProjectModal close={() => setModal(null)} modal={modal} />}
    </section>
  )
}

export default HomeDashboard
