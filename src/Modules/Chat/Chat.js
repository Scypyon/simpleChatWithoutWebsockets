import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchingCommentsAction,
  addCommentsAction
} from "Modules/Chat/ChatServicesActions";

import { Wrapper, InputButtonWrapper } from "shared/StyledAppPanel";
import { ButtonAddMessage, InputAddMessage, Messages } from "shared/StyledChat";
import Comment from "Modules/Comment/Comment";

export default function Chat() {
  const [newComment, setNewComment] = useState();

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCommentsAction);
  }, []);

  const addMessage = () => {
    dispatch(addCommentsAction(newComment));
    setNewComment("");
  };
  return (
    <Wrapper>
      <Messages>
        {!comments.isFetching ? (
          comments.results.map(comment => (
            <Comment key={comment.id} comment={comment}></Comment>
          ))
        ) : (
          <p>Fetching...</p>
        )}
      </Messages>
      <InputButtonWrapper>
        <InputAddMessage
          type="text"
          onChange={e => setNewComment(e.target.value)}
        ></InputAddMessage>
        <ButtonAddMessage onClick={() => addMessage()}>Add</ButtonAddMessage>
      </InputButtonWrapper>
    </Wrapper>
  );
}
