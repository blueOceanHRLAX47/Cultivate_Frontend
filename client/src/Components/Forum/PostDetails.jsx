import React, { useState, useEffect, useContext } from 'react';
import Forum from './Forum.jsx';
import ForumPosts from './ForumPosts.jsx';


const PostDetails = (props) => {

  return (
    <>
      <button className="return" onClick={() => props.setShowDetails(false)}>Return</button>
      <div className="detailTitle">
        {props.detailInfo.title}
      </div>
      <div className="detailContent">
        {props.detailInfo.content}
      </div>
      <form>
        <label>
          <input type="text" title="detailBody" style={{ width: "350px", height: "100px", textAlign: "left" }} placeholder="What are your thoughts?..." />
        </label>
      </form>
      <button className="detailSubmit">Comment</button>
    </>
  )
}

export default PostDetails;

