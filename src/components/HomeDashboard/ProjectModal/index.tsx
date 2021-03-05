import React from 'react';
import ReactModal from 'react-modal';
import { ProjectCollectionItem } from '../../../pages/projects';
import Link from 'next/link';

interface ProjectModalProps {
  modal: ProjectCollectionItem;
  close: () => void;
}

const ProjectModal: React.FunctionComponent<ProjectModalProps> = ({ modal, close }) => {
  return (
    <ReactModal
      parentSelector={(): HTMLElement =>
        document.querySelector('.projects-dashboard') as HTMLElement
      }
      appElement={document.getElementById('__next') as HTMLElement}
      isOpen={!!modal}
      className={`modal-container bg-${modal.color}`}
    >
      <button className="close-button" onClick={close}>
        X
      </button>
      <div className="modal-body">
        <div>
          <h3>{modal.title}</h3>
          <ol>
            {modal.items.map((modalItem) => (
              <li key={modalItem.title} className={modal.color}>
                <Link href={modalItem.route}>
                  <div className="project-item">
                    <p className="title">{modalItem.title}</p>
                    <p className="subtitle">{modalItem.subtitle}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </ReactModal>
  );
};

export default ProjectModal;
