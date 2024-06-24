import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TopBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="bg-neutral-800 flex px-4 py-4 w-full">
      <div className="mx-auto w-full bg-transparent flex justify-between items-center">
        <div className="flex flex-row bg-transparent ml-4 ">
          <div className="px-[26px] bg-red-700 py-2 rounded-xl font-bold">
            <h1 className="bg-transparent text-zinc-200">MT</h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 rounded-full">
          <div className="relative rounded-l-xl">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              required
              className=" text-white ml-4 placeholder:text-neutral-400 px-6 py-2 rounded-l-xl w-full focus:outline-none"
              placeholder="Search"
            />
            <div className="absolute rounded-xl inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-4 h-4 text-neutral-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-r-xl">
            Search
          </button>
        </div>
        <div className="flex bg-transparent items-center gap-4">
          {isLoggedIn ?? (
            <img
              src="https://i.pravatar.cc/300"
              alt="profile"
              loading="lazy"
              onError={(e) =>
                (e.currentTarget.src = "https://i.pravatar.cc/300")
              }
              className="w-10 h-10 rounded-full"
            />
          )}

          {isLoggedIn ? (
            <IoMdLogIn
              size={30}
              onClick={handleLogin}
              className="bg-transparent cursor pointer"
            />
          ) : null}
          {!isLoggedIn ? (
            <IoMdLogOut
              size={30}
              onClick={handleLogout}
              className="bg-transparent cursor-pointer"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
