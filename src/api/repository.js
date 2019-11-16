import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3001/"
});

export const fetchComments = () => {
  return instance.get("/comments");
};

export const addComment = newComment => {
  return instance.post("/comments", newComment);
};

export const deleteComment = id => {
  return instance.delete(`/comment/${id}`);
};

export const editComment = (editedComment, id) => {
  return instance.put(`/comment/${id}`, editedComment);
};
