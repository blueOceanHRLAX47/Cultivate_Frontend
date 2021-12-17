import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';
import ForumPosts from './ForumPosts.jsx';
import PostDetails from './PostDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Footer from '../Footer.jsx';


const Forum = (props) => {
  const [forumAPI, setForumAPI] = useState([]);

  const [show, setShow] = useState(false);
  const [detailInfo, setDetailInfo] = useState({})
  const [showDetails, setShowDetails] = useState(false)
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [userId, setUserId] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/`)
  //     .then(results => {
  //       // console.log(results.data)
  //       setForumAPI(results.data);
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //     })
  // }, [])

  useEffect(() => {
    axios.get(`http://cultiveight.net/api/forum`)
      .then(results => {
        // console.log(results.data)
        setForumAPI(results.data);
      })
  }, [])


  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
    // console.log(postTitle)
  }

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value)
    // console.log(postContent)
  }


  const handleSubmit = () => {
    if (postTitle.length === 0) {
      console.alert("Please input a title")
    } else {
      axios.post(`http://cultiveight.net/api/forum`, { 'title': postTitle, 'content': postContent })
        .then(results => {
          axios.get(`http://cultiveight.net/api/forum`)
            .then(results => {
              setForumAPI(results.data)
            })
        })
    }
  }

  // const handleSubmit = () => {
  //   if (postTitle.length === 0) {
  //     console.alert("Please input a title")
  //   } else {
  //     axios.post(`http://localhost:3001/api/forum`, { 'title': postTitle, 'content': postContent })
  //       .then(results => {
  //         axios.get(`http://localhost:3001/api/forum`)
  //           .then(results => {
  //             setForumAPI(results.data)
  //           })
  //       })
  //   }
  // }

  return (
    <>
      <div className="mainForum">
        {showDetails === false && <div>
          <h1 className="forumTop">Forum</h1>
          <Button className="createPostButton" variant="primary" onClick={handleShow}>Create Post
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create a new Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label className="createTitle">
                  <input type="text" title="title" style={{ width: "100%" }} placeholder="Title" onChange={handlePostTitleChange} />
                </label>
                <br />
                <br />
                <label className="createBody">
                  <input type="text" title="body" style={{ width: "100%", height: "200px", textAlign: "left" }} placeholder="Write a new post..." onChange={handlePostContentChange} />
                </label>
                <br />
                <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={() => { handleClose(); handleSubmit() }}>Add Post</Button>
            </Modal.Footer>
          </Modal>
          <div className="mainPost">
            {forumAPI.map((item, key) => {
              return <ForumPosts item={item} key={key} setDetailInfo={setDetailInfo} setShowDetails={setShowDetails} setForumAPI={setForumAPI} />
            })}
          </div>
        </div>}
        {showDetails === true && <div>
          <PostDetails detailInfo={detailInfo} setShowDetails={setShowDetails} setForumAPI={setForumAPI} />
        </div>}
      </div>
      <Footer />
    </>
  )
}

export default Forum;