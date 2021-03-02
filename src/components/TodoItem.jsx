import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

export default function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);

  const inputRef = useRef(null);

  let dispatch = useDispatch();

  const Edit = () => {
      dispatch(updateTodo({
        ...todo,
        name: name
      }));
      if(editable) {
          setName(todo.name)
      }
      const editablePromise = new Promise((resolve, reject) => {
        resolve(setEditable(!editable));
      }).then(() => {
        // return inputRef.current.focus();
      })
      
  };

  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col m-0">
          {editable ? (
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="col m-0"
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            Edit();
          }}
          className={editable ? "btn btn-success m-2" : "btn btn-primary m-2"}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className={"btn btn-danger m-2"}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
