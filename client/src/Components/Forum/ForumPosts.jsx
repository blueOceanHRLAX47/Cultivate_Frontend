import React, { useState, useEffect, useContext } from 'react';
import Forum from './Forum.jsx';
import PostDetails from './PostDetails.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const ForumPosts = (props) => {


  const handleClick = () => {
    props.setDetailInfo(props.item);
    props.setShowDetails(true);
  }
  const handleClickLike = () => {
    // console.log(props.item)
  }
  const handleClickDislike = () => {
    // console.log(props.item)
  }

  //make boxes around each post and make the whole box handleclick

  return (
    <>
      <div className="eachPost">
        <div className="postLikes">
          <button className="arrowUp" onClick={handleClickLike}></button>
          <div className="likePostCount">
            {props.item.likes}
          </div>
          <button className="arrowDown" onClick={handleClickDislike}></button>
        </div>
        <div className="bodyPost" onClick={handleClick}>
          <div className="innerPost">
            <div className="titlePost">
              {props.item.title}
            </div>
            {/* <button className="commentPost" onClick={handleClick}>Comment</button> */}
            <div className="socialIcons">
              <a href="https://www.youtube.com/"
                className="youtube">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="https://www.facebook.com/"
                className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.twitter.com/"
                className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.instagram.com/"
                className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForumPosts;