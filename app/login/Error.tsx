import React from "react";

interface Props {
  error: string;
}

function Error({ error }: Props) {
  return (
    <div>
      <li className="error">{error}</li>
    </div>
  );
}

export default Error;
