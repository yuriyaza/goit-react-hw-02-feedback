import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackButtonClick = event => {
    const buttonId = event.target.id;
    this.setState(currentState => {
      return {
        [buttonId]: currentState[buttonId] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentPositiveFeedback = Math.round((good * 100) / total);
    return percentPositiveFeedback ? percentPositiveFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 0, 'bad']}
            onLeaveFeedback={this.onFeedbackButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
  }
}
