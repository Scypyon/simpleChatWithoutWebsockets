import {
  fetchComments,
  addComment,
  deleteComment,
  editComment
} from "api/repository";

export const IS_FETCHING = "comments:IS_FETCHING";
export const FETCHING_COMMENTS = "comments:FETCHING_COMMENTS";
export const FETCHING_FAILED = "comments:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };

const fetchingComments = data => ({
  type: FETCHING_COMMENTS,
  data
});
const fetchingFailed = error => ({
  type: FETCHING_FAILED,
  error
});

export const fetchingCommentsAction = async dispatch => {
  try {
    dispatch(isFetching);
    const { data } = await fetchComments();
    dispatch(fetchingComments(data));
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};

export const addCommentsAction = newComment => async dispatch => {
  try {
    dispatch(isFetching);
    await addComment({
      name: localStorage.getItem("name"),
      text: newComment
    });
    dispatch(fetchingCommentsAction);
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};

export const editCommentAction = (newComment, id) => async dispatch => {
  try {
    dispatch(isFetching);
    await editComment(
      {
        name: localStorage.getItem("name"),
        text: newComment
      },
      id
    );
    dispatch(fetchingCommentsAction);
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};

export const deleteCommentAction = id => async dispatch => {
  try {
    dispatch(isFetching);
    await deleteComment(id);
    dispatch(fetchingCommentsAction);
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};
