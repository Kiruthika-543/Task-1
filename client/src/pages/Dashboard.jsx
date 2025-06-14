import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/protected", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      setMessage(res.data.message);
    }).catch(() => setMessage("Unauthorized"));
  }, []);

  return <div className="p-4"><h2>{message}</h2></div>;
}

export default Dashboard;