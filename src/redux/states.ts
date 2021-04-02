export type todoType = {
  id: string,
  name: string
}

export type todosType = typeof todos;

export let todos = [
  {
    id: "1",
    name: "One",
  } as todoType,
  {
    id: "2",
    name: "Two",
  } as todoType,
  {
    id: "3",
    name: "Three",
  } as todoType
]
