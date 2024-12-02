import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="custom-progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {/* The circle element positioned at the end of the progress bar */}
        <div
          className="progress-circle"
          style={{
            left: `${progress}%`, // Position circle at the end of progress
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
