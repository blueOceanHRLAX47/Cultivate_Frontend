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


const Forum = (props) => {
  const [forumAPI, setForumAPI] = useState([]);

  // const { forumData } = useContext(AllRecipesAndWorkouts)

  const [show, setShow] = useState(false);
  const [detailInfo, setDetailInfo] = useState({})
  const [showDetails, setShowDetails] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/`)
      .then(results => {
        console.log(results.data)
        setForumAPI(results.data);
      })
  }, [])


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
                <label>
                  <input type="text" title="title" style={{ width: "450px" }} placeholder="Title" />
                </label>
                <br />
                <br />
                <label>
                  <input type="text" title="body" style={{ width: "450px", height: "200px", textAlign: "left" }} placeholder="Write a new post..." />
                </label>
                <br />
                <br />
                {/* <input type="text" title="addPhotos" style={{ width: "450px" }} placeholder="Add Photo URL" />
                <br />
                <input type="text" title="addVideos" style={{ width: "450px" }} placeholder="Add Video URL" /> */}
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleClose}>Add Post</Button>
            </Modal.Footer>
          </Modal>
          <div className="mainPost">
            {forumAPI.map((item, key) => {
              return <ForumPosts item={item} key={key} setDetailInfo={setDetailInfo} setShowDetails={setShowDetails} setForumAPI={setForumAPI}/>
            })}
          </div>
        </div>}
        {showDetails === true && <div>
          <PostDetails detailInfo={detailInfo} setShowDetails={setShowDetails} />
        </div>}
      </div>
    </>
  )
}

export default Forum;