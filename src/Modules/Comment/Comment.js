import React, { useState } from "react";

import { CommentCnt, DateCnt, CommentWrapper } from "shared/StyledComments";

import { useDispatch } from "react-redux";

import {
  editCommentAction,
  deleteCommentAction
} from "Modules/Chat/ChatServicesActions";

export default function Comment({ comment }) {
  const [isEdited, setIsEdited] = useState(false);
  const [newComment, setNewComment] = useState();

  const dispatch = useDispatch();

  const editComment = () => {
    setIsEdited(!isEdited);
    isEdited && dispatch(editCommentAction(newComment, comment.id));
  };
  const dateAdded = new Date(comment.dateAdded);
  const dateEdited = new Date(comment.dateEdited);
  return (
    <CommentWrapper>
      <h4>{comment.name} written:</h4>
      <DateCnt>
        <h5>
          Added:{" "}
          {dateAdded.getHours() +
            ":" +
            dateAdded.getMinutes() +
            ":" +
            dateAdded.getSeconds() +
            " | " +
            dateAdded.getDay() +
            "/" +
            dateAdded.getMonth() +
            "/" +
            dateAdded.getFullYear()}
        </h5>
        <h5>
          Edited:{" "}
          {dateEdited.getHours() +
            ":" +
            dateEdited.getMinutes() +
            ":" +
            dateEdited.getSeconds() +
            " | " +
            dateEdited.getDay() +
            "/" +
            dateEdited.getMonth() +
            "/" +
            dateEdited.getFullYear()}
        </h5>
      </DateCnt>
      <CommentCnt>
        <p>
          {isEdited ? (
            <input
              type="text"
              onChange={e => setNewComment(e.target.value)}
            ></input>
          ) : (
            comment.text
          )}
        </p>
        <div onClick={() => editComment()}>
          <b>{isEdited ? "save" : "edit"}</b>
        </div>
        <div onClick={() => dispatch(deleteCommentAction(comment.id))}>
          <b>X</b>
        </div>
      </CommentCnt>
    </CommentWrapper>
  );
}
