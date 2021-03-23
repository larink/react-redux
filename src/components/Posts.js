import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts({ syncPosts }) {
  if (!syncPosts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return (
    <div>
      <h1>POSTS</h1>
      {syncPosts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
