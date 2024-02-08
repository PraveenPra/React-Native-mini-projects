import { create } from 'zustand'
import { data } from './dummy_data'
import { Todo } from '..'
// import { v4 as uuidv4 } from 'uuid';

type Todos = {
todos:Todo[],
toggleComplete:(i:number)=>void,
addTodo:(newTodo:Todo)=>void,
filteredTodos:(tab:string,searchQuery:string)=>void,
}
export const useStore = create<Todos>((set,get) => ({
  todos: data,
  toggleComplete:(i: number|string)  => set((state) => ({ todos: state.todos.map((t:Todo)=>{  
   return t.id != i ? t : {...t,isComplete : !t.isComplete}
  }
  ) })),

  addTodo:(newTodo:Todo)=>set((state => ({todos:[...state.todos,newTodo]})
  )),

  filteredTodos: (tab:string,searchQuery:string)=>{
   const todos = get((state)=>state.todos).todos

   
  const f = todos.filter(t => {

    if(tab === 'InProgress' && t.isComplete)
    return false;

    if(tab === 'Completed' && !t.isComplete)
    return false;

    if(!searchQuery){
        return todos
    }

    return t.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  
})
return f;
}
}))
