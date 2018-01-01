import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NO_POST_IN_CATEGORY, NOT_FOUND, POST_DELETED } from '../constants/NoteTypes'
import { Card, CardText, CardTitle } from 'reactstrap'

const TITLE_TEXT = {
  [NO_POST_IN_CATEGORY]: "No Post in this Category",
  [NOT_FOUND]: "Not Found",
  [POST_DELETED]: "This post is deleted"
}

const Notification = ({ noteType, path }) =>  (
  <Card body className="mt-2">

    <CardTitle className="title">{ TITLE_TEXT[noteType] }</CardTitle>

    {noteType === NO_POST_IN_CATEGORY && (<CardText>Add a New Post, and be the First Author.</CardText>)}
    {noteType === NOT_FOUND && (<CardText>No Such a Post nor a Category <Link to="/">{">>> Go Back"}</Link></CardText>)}
    {noteType === POST_DELETED && (<CardText><Link to={`/${path}`}>{">>> Go Back to Category"}</Link></CardText>)}

  </Card>
)

Notification.propTypes = {
  noteType: PropTypes.string.isRequired,
  path: PropTypes.string
}

export default Notification