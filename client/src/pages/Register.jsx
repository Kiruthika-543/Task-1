import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Register</h2>
      <input className="border p-2 my-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input className="border p-2 my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2">Register</button>
    </div>
  );
}

export default Register;