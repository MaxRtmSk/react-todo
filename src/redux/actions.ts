import { todoType } from "./states";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

type addTodoActionType = {
  payload: todoType;
  type: typeof ADD_TODO;
};

export const addTodo = (todo: todoType): addTodoActionType => {
  return {
    payload: todo,
    type: "ADD_TODO",
  };
};

type updateTodoType = {
  payload: string;
  type: typeof UPDATE_TODO;
};

export const deleteTodo = (todoId: number): deleteTodoType => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};


type deleteTodoType = {
  payload: number;
  type: typeof DELETE_TODO;
};

export const updateTodo = (todoName: string): updateTodoType => {
  return {
    type: "UPDATE_TODO",
    payload: todoName,
  };
};

export type ActionTypes = updateTodoType | deleteTodoType | addTodoActionType;
