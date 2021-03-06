import PropTypes from 'prop-types'
import React from 'react'
import FaEdit from'react-icons/lib/fa/edit'
import { Button, Col, Input, Row } from 'reactstrap'

import { sortPostsBy } from '../../utils/helpers'


/**
 * Presentational Component which represent Posts List Controller
 * composed of a post order selector, a button
 */
const PostsListController = ({ postsOrder, sortPosts, toggleModal }) => (

  <Row className="my-5">

    <Col lg={{ size: 4, offset: 4 }} xl={{ size: 3, offset: 6 }}>
      <Input type="select" value={postsOrder} onChange={e => sortPosts(e.target.value)}>
        { Object.keys(sortPostsBy).map(key =>
          <option key={key} value={key}>{sortPostsBy[key].text}</option>
        )}
      </Input>
    </Col>

    <Col lg={4} xl={3}>
      <Button color="danger" className="float-right" onClick={toggleModal}><FaEdit size={20}/> &nbsp;Add New Post</Button>
    </Col>

  </Row>
)

PostsListController.propTypes = {
  /**
   * PostsList sorting options. RECENT_POST/MOST_VOTED/TITLE
   */
  postsOrder: PropTypes.string.isRequired,
  /**
   * Sort posts list
   */
  sortPosts: PropTypes.func.isRequired,
  /**
   * Open form modal (ADD_POST)
   */
  toggleModal: PropTypes.func.isRequired
}

export default PostsListController
