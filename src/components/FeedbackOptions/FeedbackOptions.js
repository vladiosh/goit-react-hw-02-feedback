import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList } from './FeedbackOptions.styled';
import firstLetterToUpperCase from '../../utils/LetterToUpperCase';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {firstLetterToUpperCase(option)}
            </button>
          </li>
        );
      })}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
