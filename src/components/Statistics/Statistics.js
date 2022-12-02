import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <h2 className="head__stat">Statistics</h2>
      <ul className="stat__list">
        <li className="stat__item">Good:{good}</li>
        <li className="stat__item">Neutral:{neutral}</li>
        <li className="stat__item">Bad:{bad}</li>
        <li className="stat__item">Total:{total}</li>
        <li className="stat__item">Positive feedback:{positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
