import { useEffect, useState } from "react";
import { getHealth } from "./services/api";

function App() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    async function checkBackend() {
      try {
        const data = await getHealth();
        setStatus(data.status);
      } catch (error) {
        setStatus("offline");
      }
    }

    checkBackend();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AuditAI</h1>

      <h2>
        Backend Status:
        {" "}
        {status === "online" ? "🟢 Online" : "🔴 Offline"}
      </h2>

      <p>Welcome to AuditAI 🚀</p>
    </div>
  );
}

export default App;