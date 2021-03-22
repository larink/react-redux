import React from 'react';
import Post from './Post';

export default function Posts({ posts }) {
  if (!posts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return (
    <div>
      <h1>POSTS</h1>
      {posts.map((post) => (
        <Post post={post} key={post}></Post>
      ))}
    </div>
  );
}
