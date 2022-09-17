import { useState } from 'react'

const Heading = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
};

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>
    );
  }
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistic = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  const totalSum = good + neutral + bad;
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good}/>
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral}/>
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad}/>
        </tr>
        <tr>
          <StatisticLine text="all" value={totalSum}/>
        </tr>
        <tr>
          <StatisticLine text="average" value={(good - bad) / totalSum}/>
        </tr>
        <tr>
          <StatisticLine text="positive" value={((good / totalSum) * 100)}/>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Heading name="give feedback"/>
      <Button text="good" onClick={handleGoodFeedback}/>
      <Button text="neutral" onClick={handleNeutralFeedback}/>
      <Button text="bad" onClick={handleBadFeedback}/>
      <Heading name="statistics"/>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;