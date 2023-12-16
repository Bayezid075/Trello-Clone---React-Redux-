import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { boardCreateAction } from "../actions/board";

export default function Form() {
  const dispatch = useDispatch();
  const [boardTitle, setBoardTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(boardCreateAction(boardTitle));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setBoardTitle(e.target.value)} />
        <button type="submit"> Create Board</button>
      </form>
    </div>
  );
}
