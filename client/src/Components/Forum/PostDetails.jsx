import React, { useState, useEffect, useContext } from 'react';
import Forum from './Forum.jsx';
import ForumPosts from './ForumPosts.jsx';


const PostDetails = (props) => {

  return (
    <>
      <div>
        Hello Detail Post here
        {props.detailInfo.title}
        {props.detailInfo.content}
      </div>
      <button className="return" onClick={() => props.setShowDetails(false)}>Return</button>
    </>
  )
}

export default PostDetails;