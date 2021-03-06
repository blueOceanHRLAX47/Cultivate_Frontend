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
import moment from 'moment';

const ForumPosts = (props) => {

  const handleClick = () => {
    props.setDetailInfo(props.item);
    props.setShowDetails(true);
  }

  // const handleClickLike = () => {
  //   axios.put(`http://localhost:3001/like/${props.item.id}`)
  //     .then(results => {
  //       axios.get(`http://localhost:3001/`)
  //         .then(results => {
  //           props.setForumAPI(results.data)
  //         })
  //     })
  // }

  const handleClickLike = () => {
    axios.put(`http://cultiveight.net/api/forum/like/${props.item.id}`)
      .then(results => {
        axios.get(`http://cultiveight.net/api/forum`)
          .then(results => {
            props.setForumAPI(results.data)
          })
      })
  }

  // const handleClickDislike = () => {
  //   axios.put(`http://localhost:3001/dislike/${props.item.id}`)
  //     .then(results => {
  //       axios.get(`http://localhost:3001/`)
  //         .then(results => {
  //           props.setForumAPI(results.data)
  //         })
  //     })
  // }

  const handleClickDislike = () => {
    axios.put(`http://cultiveight.net/api/forum/dislike/${props.item.id}`)
      .then(results => {
        axios.get(`http://cultiveight.net/api/forum`)
          .then(results => {
            props.setForumAPI(results.data)
          })
      })
  }

  const timeConverter = () => {
    if (props.item.time_posted === null) {
      return 'by unknown date'
    } else {
      return moment(`${props.item.time_posted}`).fromNow();
    }
  }


  return (
    <>
      <div className="eachPost">
        <div className="postLikes">
          <button className="arrowUp" onClick={handleClickLike} aria-label="like post button"></button>
          <div className="likePostCount">
            {props.item.likes}
          </div>
          <button className="arrowDown" onClick={handleClickDislike} aria-label="dislike post button"></button>
        </div>
        <div className="bodyPost" onClick={handleClick}>
          <div className="innerPost">
            <img className="profile_photo" src={props.item.user.profile_photo_url} style={{ height: '60px', width: "60px" }} aria-label="user profile photo">
            </img>
          <div className="titlePost">
            {props.item.title}
          </div>
          <div className="commentPostButton">
            <img className="commentIcon" src="http://www.clker.com/cliparts/2/9/1/2/11949869891903109988rnd_rectg_l.svg.med.png"></img>
            <button className="commentPost" onClick={handleClick} aria-label="comment button">Comments</button>
          </div>
          <div className="postUser">
            Posted by: {props.item.user.name} {timeConverter()}
          </div>
          <div className="socialIcons">
            <a href="https://www.youtube.com/"
              className="youtube" aria-label="youtube">
              <FontAwesomeIcon icon={faYoutube} size="lg" title="Youtube" />
            </a>
            <a href="https://www.facebook.com/"
              className="facebook" aria-label="facebook">
              <FontAwesomeIcon icon={faFacebook} size="lg" title="Facebook" />
            </a>
            <a href="https://www.twitter.com/"
              className="twitter" aria-label="twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" title="Twitter" />
            </a>
            <a href="https://www.instagram.com/"
              className="instagram" aria-label="instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" title="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForumPosts;