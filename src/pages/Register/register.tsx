import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: any) => {
    console.log(fullName, username, email, password, avatar, cover);
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert("Email is Invalid");
      return;
    }
    if (!avatar || !cover) {
      alert("Please add your avatar and cover");
      return;
    }
    if (!fullName || !username || !email || !password) {
      alert("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar || "");
      formData.append("cover", cover || "");

      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.status) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 p-4 h-dvh bg-black md:px-12 lg:px-24">
        <div className="flex flex-col items-center gap-4 py-6 rounded-xl bg-neutral-700">
          <h1 className="text-2xl bg-transparent font-semibold">Register</h1>
          <div className="flex flex-col gap-6 px-16 py-6 rounded-xl bg-neutral-700">
            <div className="flex items-center w-full gap-8 bg-transparent">
              {avatar && (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="Avatar"
                  className="w-20 h-20 aspect-square rounded-full"
                />
              )}
              {!avatar && (
                <label
                  htmlFor="avatar"
                  className="flex bg-transparent aspect-square justify-center items-center flex-col gap-2 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black/40">
                    <HiOutlinePlus
                      size={24}
                      className="text-white bg-transparent"
                    />
                  </div>
                  <p className="bg-transparent">Profile Picture</p>
                  <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    onChange={(e: any) => setAvatar(e.target.files[0])}
                    required
                    className="hidden"
                  />
                </label>
              )}
              {cover && (
                <img
                  src={URL.createObjectURL(cover)}
                  alt="Cover"
                  className="w-20 h-20 aspect-square rounded-full"
                />
              )}
              {!cover && (
                <label
                  htmlFor="cover"
                  className="flex bg-transparent justify-center items-center aspect-square flex-col gap-2 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black/40">
                    <HiOutlinePlus
                      size={24}
                      className="text-white bg-transparent"
                    />
                  </div>
                  <p className="bg-transparent">Cover Image</p>
                  <input
                    type="file"
                    id="cover"
                    accept="image/*"
                    onChange={(e: any) => setCover(e.target.files[0])}
                    required
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />
            <input
              type="password"
              required
              min={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 rounded-md bg-black/40 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-700 w-full"
            />
          </div>
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-700"></div>
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleRegister}
            className={`p-3 rounded-b-md w-[100%] -mb-6 bg-red-700 hover:bg-red-800 text-white text-lg ${
              isLoading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
