import { createReducer } from "@reduxjs/toolkit";
import {
  getCommentsAction,
  createCommentAction,
  updateCommentAction,
  deleteAllCommentsAction,
  deleteCommentAction,
} from "./usersAction";

const initialState = {
  comments: [],
};

export default createReducer(initialState, {
  [getCommentsAction]: (state, action) => {
    state.comments = action.payload;
  },
  [createCommentAction]: (state, action) => {
    state.comments.push(action.payload);
  },
  [updateCommentAction]: (state, action) => {
    const updatedComment = action.payload;
    const commentIndex = state.comments.findIndex(
      (comment) => comment.id === updatedComment.id
    );
    if (commentIndex !== -1) {
      state.comments[commentIndex] = updatedComment;
    }
  },
  [deleteAllCommentsAction]: (state, action) => {
    const commentIdToDelete = action.payload.id;
    state.comments = state.comments.filter(
      (comment) => comment.id !== commentIdToDelete
    );
  },
  [deleteCommentAction]: (state, action) => {
    state.comments = [];
  },
});
