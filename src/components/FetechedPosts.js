import React from 'react';

export default function FetechedPosts({ posts }) {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>;
  }
  return (
    <div>
      <h1>FetchedPosts</h1>
    </div>
  );
}
