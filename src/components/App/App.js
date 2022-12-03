import React from 'react';
import { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentageGoodFeedback = Math.round(
      (good / (good + neutral + bad)) * 100
    );
    return percentageGoodFeedback ? percentageGoodFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const feedback = Object.keys(this.state);
    return (
      <Container>
        <h1 className="head__feedback">Please leave feedback</h1>
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={this.handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Container>
    );
  }
}

export default App;
