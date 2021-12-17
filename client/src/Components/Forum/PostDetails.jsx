import React, { useState, useEffect, useContext } from 'react';
import Forum from './Forum.jsx';
import ForumPosts from './ForumPosts.jsx';
import axios from 'axios';


const PostDetails = (props) => {
  const [commentContent, setCommentContent] = useState("")
  const [listComments, setListComments] = useState([])


  const handleCommentChange = (e) => {
    setCommentContent(e.target.value)
  }


  useEffect(() => {
    setListComments(props.detailInfo.comments)
  }, [])

  const handleCommentSubmit = () => {
    axios.post(`http://cultiveight.net/api/forum/comment/${props.detailInfo.id}`, { 'content': commentContent })
      .then(results => {
        axios.get(`http://cultiveight.net/api/forum/comment/${props.detailInfo.id}`)
          .then(results => {
            setListComments(results.data)
          })
      })
  }


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
          <input type="text" title="detailBody" style={{ width: "100%", height: "100px", textAlign: "left" }} placeholder="What are your thoughts?..." onChange={handleCommentChange} />
        </label>
      </form>
      <button className="detailSubmit" onClick={handleCommentSubmit}>Comment</button>
      <div className="detailCommentSection">
        {listComments.map((item, key) => {
          return <div className="eachComment" key={key}>
            <img className="commentUserPhoto" src={item.user.profile_photo_url} width="35px">
            </img>
            <div className="commentUsername">
              Posted by: {item.user.name}
            </div>
            <div className="commentContent">
              {item.content}
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default PostDetails;
