import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

function Wrapper() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodUpdate = () => {
    setGood(prev => prev + 1);
  };

  const handleBadUpdate = () => {
    setBad(prev => prev + 1);
  };

  const handleNeutralUpdate = () => {
    setNeutral(prev => prev + 1);
  };

  const state = { good, neutral, bad };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  const onLeaveFeedbackHandler = option => {
    console.log(option);

    switch (option) {
      case 'good':
        handleGoodUpdate();
        break;

      case 'neutral':
        handleBadUpdate();
        break;

      case 'bad':
        handleNeutralUpdate();
        break;
      default:
        console.warn('not supported');
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedbackHandler}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default Wrapper;
