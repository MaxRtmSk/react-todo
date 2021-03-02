import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";

export default function TodoInput() {
  const [name, setName] = useState("");

  let dispatch = useDispatch();

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div className="row m-2">
        <input
          onChange={(e) => changeName(e)}
          value={name}
          type="text"
          className="col form-control"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name,
              })
            );
            setName("");
          }}
          className="btn btn-primary mx-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
