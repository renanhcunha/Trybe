import React, { useContext } from 'react';
import { Context } from './RedditContext';

const Posts = () => {
  const {posts} = useContext(Context)
  return (
  <div>
    <ul>
      {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  </div>
)};

export default Posts;