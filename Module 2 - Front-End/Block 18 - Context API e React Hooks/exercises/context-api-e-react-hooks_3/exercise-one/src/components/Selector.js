import React, { useContext } from 'react';
import { Context } from './RedditContext';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => {
  const {selectedSubreddit, availableSubreddits, selectSubreddit} = useContext(Context);

  return (
  <div>
    <span>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select
        onChange={(e) => selectSubreddit(e.target.value)}
        value={selectedSubreddit}
      >
        {renderOptions(availableSubreddits)}
      </select>
    </span>
  </div>
)};

export default Selector;