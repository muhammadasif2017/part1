import { useState } from 'react'

const Heading = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
};

const Button = ({ text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const ShowStats = ({ type, total}) => <p>{type} {total}</p>;

const CalculatedStats = ({ type, total, subTotal }) => {
  const average = total > 0 ? (subTotal / total) : 0;

  if (type === "positive") {
    const percentage = average * 100;
    return (
      <p>{type} {percentage} %</p>
    );
  }

  return (
    <p>{type} {average}</p>
  )
}

const Statistic = ({ good, neutral, bad}) => {
  const total = good + neutral + bad;

  return (
    <>
      <Heading name="statistics"/>
      <ShowStats type="good" total={good}/>
      <ShowStats type="neutral" total={neutral}/>
      <ShowStats type="bad" total={bad}/>
      <ShowStats type="all" total={total}/>
      <CalculatedStats type="average" total={total} subTotal={good - bad}/>
      <CalculatedStats type="positive" total={total} subTotal={good}/>
    </>
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
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;