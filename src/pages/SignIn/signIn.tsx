import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if(!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    console.log(email, password)
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-dvh">
        <div className="flex w-[300px] pt-12 h-[300px] flex-col items-center justify-center rounded-xl bg-neutral-700">
          <h1 className="text-2xl bg-transparent font-semibold mb-4">Log In</h1>
          <form className="flex bg-transparent w-[90%] flex-col gap-4 p-4">
            <input
              type="email"
              id="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />

            <input
              type="password"
              id="password"
              required
              min={6}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />
          </form>
          <button
            type="submit"
            onClick={handleLogin}
            className="p-3 rounded-b-md w-full mt-6 bg-red-700 hover:bg-red-800 text-white text-lg"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
