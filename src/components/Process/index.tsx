import { FunctionComponent } from 'react';
import './process.scss';

export interface ProcessStep {
  content: JSX.Element;
  id: string | number;
}

interface ProcessProps {
  steps: ProcessStep[];
}

const Process: FunctionComponent<ProcessProps> = ({ steps }) => {
  return (
    <div className="process">
      {steps.map(({ content, id }: ProcessStep) => (
        <div key={id} className="process-item">
          <div className="process-item-content">{content}</div>
        </div>
      ))}
    </div>
  );
};

export default Process;
