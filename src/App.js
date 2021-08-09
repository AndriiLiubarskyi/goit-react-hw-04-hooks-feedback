import { useState } from 'react';
import SectionTitle from './components/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/VoitingStatistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = e => {
    const feedback = e.target.textContent;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: return;
    }
  };

  const countTotalFeedback = () => {
    const total = [good, neutral, bad];
    return total.reduce((sum, el) => (sum += el), 0);
  };

  const countPositiveFeedbackPercentage = () => {
     return Math.round(good / countTotalFeedback() * 100);
  };

    return (
      <SectionTitle>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          allFeedback={allFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </SectionTitle>
    );
  };

export default App;


