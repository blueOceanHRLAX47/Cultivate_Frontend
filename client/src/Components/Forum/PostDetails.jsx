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
        <label className="inputComment">
          <input type="text" title="detailBody" style={{ width: "750px", height: "100px", textAlign: "left" }} placeholder="What are your thoughts?..." />
        </label>
      </form>
      <button className="detailSubmit">Comment</button>
      <div className="detailCommentSection">
        {props.detailInfo.comments.map((item, key) => {
          return <div className="eachComment" key={key}>
            {item.content}
          </div>
        })}
      </div>
    </>
  )
}

export default PostDetails;

