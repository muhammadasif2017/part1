import { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const Anecdote = ({
  anecdote,
  vote,
  handleVote,
  handleAnecdote
}) => {
  return (
    <div>
      <Heading text="Anecdote of the day"/>
      {anecdote}
      <div>{`has ${vote} votes`}</div>
      <div>
        <Button text="vote" onClick={handleVote} />
        <Button text="next anecdote" onClick={handleAnecdote} />
      </div>
    </div>
  );
};

const MaxVotedAnecdote = ({ maxVoted }) => {
  return (
    <>
      <Heading text="Anecdote with most votes"/>
      {maxVoted.name}
      <div>{`has ${maxVoted.votes} votes`}</div>
    </>
  )
};  

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    const randomNo = getRandomInt(0, anecdotes.length);
    setSelected(randomNo);
  }

  const handleVote = () => {
    const copyVote = [ ...vote ];
    copyVote[selected] += 1;
    setVote(copyVote);
  };

  const findAnecdoteWithMostVote = () => {
    let max = 0;
    let maxValueIndex = 0;
    vote.forEach((value, index) => {
      if (value > max) {
        max = value;
        maxValueIndex = index;
      }
    });
    return { name: anecdotes[maxValueIndex], votes: max};
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} vote={vote[selected]} handleAnecdote={handleNextAnecdote} handleVote={handleVote}/>
      <MaxVotedAnecdote maxVoted={findAnecdoteWithMostVote()}/>
    </div>
  )
}

export default App