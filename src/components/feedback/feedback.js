import React from 'react';
import { Component } from 'react';

import { FeedbackForm, ButtonList } from 'components/feedback/feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutral = () => {};

  handleBad = () => {};

  render() {
    return (
      <FeedbackForm>
        <h1 className="head__feedback">Please leave feedback</h1>
        <div className="button">
          <ButtonList>
            <li className="button__item">
              <button type="button" onClick={this.handleGood}>
                Good
              </button>
            </li>
            <li className="button__item">
              <button type="button" onClick={this.handleNeutral}>
                Neutral
              </button>
            </li>
            <li className="button__item">
              <button type="button" onClick={this.handleBad}>
                Bad
              </button>
            </li>
          </ButtonList>
        </div>
        <div className="statistics">
          <h2 className="head__stat">Statistics</h2>
          <ul className="stat__list">
            <li className="stat__item">good:{this.state.good}</li>
            <li className="stat__item">neutral:{this.state.neutral}</li>
            <li className="stat__item">bad:{this.state.bad}</li>
          </ul>
        </div>
      </FeedbackForm>
    );
  }
}

export default Feedback;
