import React, { useState } from 'react';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>nkjdbvchjdc</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
      sjcdovjfdvjkfvjkfvfjkdvkcckmdfbksnckjchcl;ahjfg</div>}
    </div>
  );
};

export default Accordion;