import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';
import ForumPosts from './ForumPosts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const Forum = (props) => {
  const { forumData } = useContext(AllRecipesAndWorkouts)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  console.log(forumData)

  return (
    <>
      <h1>Forum</h1>
      <Button variant="primary" onClick={handleShow}>Create Post
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Title:
              <input type="text" title="title" />
            </label>
            <label>
              Body:
              <input type="text" title="body" />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Add Post</Button>
        </Modal.Footer>
      </Modal>
      <div className="mainPost">
        {forumData.results.map((item, key) => {
          return <ForumPosts item={item} key={key}/>
        })}
      </div>
    </>
  )
}

export default Forum;