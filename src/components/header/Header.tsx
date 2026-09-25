export const Header = () => {
  return (
    <div className="bg-green-300 basis-[20%] rounded-4xl flex items-center px-6">
      <div className="flex-1"/>
        <div className="flex items-center gap-3">
          <div className="cassie">
            <button className="bg-red-300 h-10 w-20 rounded-2xl hover:bg-red-200 active:scale-95 transition-transform duration-100">
              Cassie
            </button>
          </div>
          <div className="soul">
            <button className="bg-yellow-300 h-10 w-20 rounded-2xl hover:bg-yellow-200 active:scale-95 transition-transform duration-100">
              Soul
            </button>
          </div>
        </div>
      <div className="flex flex-1 justify-end">
        <img src="src\assets\puzzle-piece.png" className="h-10 active:scale-95 transition-transform duration-100" />
      </div>
    </div>
  );
};
