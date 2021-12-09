import React, { useState, useEffect, useContext } from 'react';
import Forum from './Forum.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const ForumPosts = (props) => {

  return (
    <>
      <div className="eachPost">
        {props.item.title}
      </div>
      <div className="likePost">
        {props.item.likes}
      </div>
      <button className="likePostButton">Like</button>
      <button className="commentPost">Comment</button>
      <div className="socialIcons">
        <a href="https://www.youtube.com/"
          className="youtube">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/"
          className="facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/"
          className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/"
          className="instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </>
  )
}

export default ForumPosts;