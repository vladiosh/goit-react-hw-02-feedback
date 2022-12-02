// import Feedback from 'components/Feedback/Feedback';
import React from 'react';
import { Component } from 'react';
import Controls from '../Controls/Controls';
import Statistics from '../Statistics/Statistics';
import { Container } from './App.styled';
import { FeedbackForm } from 'components/App/App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
    return (
      <Container>
        <FeedbackForm>
          <h1 className="head__feedback">Please leave feedback</h1>
          <Controls
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </FeedbackForm>
      </Container>
    );
  }
}

export default App;
