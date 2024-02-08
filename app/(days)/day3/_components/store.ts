import { create } from 'zustand'
import { data } from './dummy_data'
import { Todo } from '..'
// import { v4 as uuidv4 } from 'uuid';

type Todos = {
todos:Todo[],
toggleComplete:(i:number)=>void,
addTodo:(newTodo:Todo)=>void,
}
export const useStore = create<Todos>((set) => ({
  todos: data,
  toggleComplete:(i: number|string)  => set((state) => ({ todos: state.todos.map((t:Todo)=>{  
   return t.id != i ? t : {...t,isComplete : !t.isComplete}
  }
  ) })),

  addTodo:(newTodo:Todo)=>set((state => ({todos:[...state.todos,newTodo]})
  ))
}))
