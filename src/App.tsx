import "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
   faCircleCheck,
   faCircleXmark,
   faLayerGroup,
   faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function App() {
   const [todo, setTodo] = useState<string>("");
   const [todoList, setTodoList] = useState<string[]>([]);

   function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      setTodo(e.target.value);
   }

   function addTodo() {
      if (todo !== "" && todo.trim()) {
         setTodoList([...todoList, todo]);
         setTodo("");
      }
   }

   function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter") {
         addTodo();
      }
   }

   return (
      <div className="flex h-screen w-screen select-none justify-center p-4">
         <section className="flex w-full flex-col gap-5 md:w-[768px]">
            <h1 className="mb-2 text-center text-2xl uppercase tracking-wider">Todo App</h1>
            <div className="group flex w-full flex-col gap-2">
               <div className="relative flex w-full items-center">
                  <input
                     type="text"
                     className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-normal text-gray-800 outline-none"
                     placeholder="Add your task..."
                     value={todo}
                     onChange={handleInputChange}
                     onKeyDown={handleInputKeyDown}
                  />
                  <button
                     className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-500 text-xs font-semibold text-white"
                     onClick={addTodo}
                  >
                     Add
                  </button>
               </div>
            </div>
            <div className="flex h-full flex-col gap-2">
               <label className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faListCheck} />
                  Todo List
               </label>
               <div className="flex h-full flex-col justify-between">
                  <ul className="flex h-full flex-col gap-3 overflow-y-auto">
                     {todoList.map((todo, index) => (
                        <li
                           className="flex h-12 justify-between gap-4 rounded-md bg-gray-100 px-4 text-gray-800"
                           key={index}
                        >
                           <div className="flex w-4/5 items-center gap-2">
                              <input
                                 className="h-5 w-5 cursor-pointer"
                                 type="checkbox"
                                 name=""
                                 id=""
                              />
                              <p className="truncate">{todo}</p>
                           </div>
                           <div className="flex items-center gap-2">
                              <button className="" type="button">
                                 <FontAwesomeIcon icon={faTrashCan} />
                              </button>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="flex gap-4">
                     <span>
                        <FontAwesomeIcon icon={faLayerGroup} /> 12 All Tasks
                     </span>
                     <span>
                        <FontAwesomeIcon icon={faCircleXmark} /> 8 tasks left
                     </span>
                     <span>
                        <FontAwesomeIcon icon={faCircleCheck} /> 4 Complete Tasks
                     </span>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default App;
