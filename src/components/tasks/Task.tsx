export const Task = () => {
  return <div className="bg-red-300 basis-[80%] rounded-4xl flex justify-center overflow-scroll scrollbar-none">
    <div className="list w-full p-5 ">
      <ul className="flex flex-col gap-2 " >
        <li   className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 1</li>
        <li className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 2</li>
        <li className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 3</li>
        <li className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 4</li>
        <li className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 5</li>
        <li className="h-15 active:scale-95 transition-transform duration-100 bg-red-200 rounded-2xl flex justify-center items-center" >Task 6</li>
      </ul>
    </div>
  </div>;
};
