import React from "react";

function Comment() {
  return (
    <>
      <div className="container_comment">
        <h2>Comment</h2>
        <div className="comment_box">
          <div className="typename">
            <input type="text" placeholder="Type name..." />
          </div>
          <div className="typecomment">
            <textarea placeholder="Type something...."></textarea>
          </div>
          <div className="button">
            <button type="button">Post now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
