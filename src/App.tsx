import { faListCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
   return (
      <div className="flex h-screen w-screen select-none justify-center p-4">
         <section className="my-16 flex w-full flex-col gap-5 md:w-[768px]">
            <h1 className="mb-2 text-center text-2xl uppercase tracking-wider">Todo App</h1>
            <div className="group flex w-full flex-col gap-2">
               <div className="relative flex w-full items-center">
                  <input
                     type="text"
                     className="peer relative  h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-normal text-gray-800 outline-none drop-shadow-sm transition-all duration-150 ease-in-out focus:bg-white focus:drop-shadow-lg"
                     placeholder="Add your task..."
                  />
                  <button className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-300 text-xs font-semibold text-white transition-all duration-150 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
                     Add
                  </button>
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <label className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faListCheck} />
                  Todo List
               </label>
               <div className="">
                  <ul className="flex flex-col gap-3">
                     <li
                        className="flex h-12 justify-between gap-4 rounded-md bg-gray-100 px-4 text-gray-800"
                        key={1}
                     >
                        <div className="flex w-4/5 items-center gap-2">
                           <input
                              className="h-5 w-5 cursor-pointer"
                              type="checkbox"
                              name=""
                              id=""
                           />
                           <p className="truncate">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis harum
                              incidunt nesciunt nisi.
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <button className="" type="button">
                              <FontAwesomeIcon icon={faTrashCan} />
                           </button>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </div>
   );
}

export default App;
