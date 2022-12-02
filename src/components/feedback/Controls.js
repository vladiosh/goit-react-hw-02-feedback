import React from 'react';
import { ButtonList } from 'components/Feedback/Feedback.styled';

const Controls = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className="button">
      <ButtonList>
        <li className="button__item">
          <button type="button" onClick={onGood}>
            Good
          </button>
        </li>
        <li className="button__item">
          <button type="button" onClick={onNeutral}>
            Neutral
          </button>
        </li>
        <li className="button__item">
          <button type="button" onClick={onBad}>
            Bad
          </button>
        </li>
      </ButtonList>
    </div>
  );
};

export default Controls;
