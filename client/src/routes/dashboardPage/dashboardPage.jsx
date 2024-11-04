import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // New import
import "./dashboardPage.css";

const DashboardPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState(""); // New state for input text

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = inputText; // Use inputText from state
    if (!text) return;
    mutation.mutate(text);
  };

  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>MindFlow</h1>
        </div>
        <div className="options">
          <div className="option" onClick={() => setInputText("Summarize")}>
            <img src="/chat.png" alt="" />
            <span>Summarize</span>
          </div>
          <div className="option" onClick={() => setInputText("Analyze Image")}>
            <img src="/image.png" alt="" />
            <span>Analyze Image</span>
          </div>
          <div className="option" onClick={() => setInputText("Optimize Code")}>
            <img src="/code.png" alt="" />
            <span>Optimize Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Ask me anything..."
            value={inputText} // Bind the input value
            onChange={(e) => setInputText(e.target.value)} // Update input state on change
          />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
