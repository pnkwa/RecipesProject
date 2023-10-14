import { createAction } from "@reduxjs/toolkit";

//actions
export const getCommentsAction = createAction("GET_COMMENTS");
export const createCommentAction = createAction("CREATE_COMMENT");
export const updateCommentAction = createAction("UPDATE_COMMENT");
export const deleteAllCommentsAction = createAction("DELETE_ALL_COMMENTS");
export const deleteCommentAction = createAction("DELETE_COMMENT");
