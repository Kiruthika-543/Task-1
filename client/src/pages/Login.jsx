import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Login Successful!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Login</h2>
      <input className="border p-2 my-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input className="border p-2 my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2">Login</button>
    </div>
  );
}

export default Login;