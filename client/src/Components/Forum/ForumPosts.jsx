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
import axios from 'axios';

const ForumPosts = (props) => {


  const handleClick = () => {
    props.setDetailInfo(props.item);
    props.setShowDetails(true);
  }

  const handleClickLike = () => {
    axios.put(`http://localhost:3000/like/${props.item.id}`)
      .then(results => {
        axios.get(`http://localhost:3000/`)
          .then(results => {
            props.setForumAPI(results.data)
          })
      })
  }


  const handleClickDislike = () => {
    axios.put(`http://localhost:3000/dislike/${props.item.id}`)
      .then(results => {
        axios.get(`http://localhost:3000/`)
          .then(results => {
            props.setForumAPI(results.data)
          })
      })

  }


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