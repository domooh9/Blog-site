import React from "react";

interface CommentProps {
  check: {
    comment: string;
  };
}

function Comment({ check }: CommentProps) {
  const { comment } = check;

  return (
    <div>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
