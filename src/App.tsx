import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex flex-row bg-black h-dvh w-full justify-center items-center">
        <div className="text-2xl px-8 shadow-red-700 backdrop-blur-xl shadow-[0px_0px_120px_10px] bg-red-700/50 py-2 rounded-2xl font-bold animate-pulse bg-gradient-to-b from-red-700/50 via-transparent">
          <h1 className="bg-transparent text-zinc-400" >MT</h1>
        </div>
      </div>
    </>
  );
}

export default App;
