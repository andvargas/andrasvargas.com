import { useState } from "react";
import classes from "./ChatModule.module.css";
import ReactMarkdown from "react-markdown";

const ChatModule = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(Date.now());

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);
    window.scrollTo(0, document.body.scrollHeight);

    setMessage("");

    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:5001" : "https://api.andrasvargas.com";

    fetch(baseUrl + "/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: sessionId,
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        window.scrollTo(0, document.body.scrollHeight);

        // Handle any errors in the backend response
        if (data.error) {
          console.error("Error saving conversation:", data.error);
          // You can show an error message to the user here
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className={classes.main}>
      <h1>This is AndreChat</h1>
      <section>
        {chats.map((chat, index) => (
          <div key={index} className={chat.role === "user" ? classes.bubble + " " + classes.user_msg : classes.bubble}>
            <span>{chat.role}</span>
            <span>:</span>
            <ReactMarkdown>{chat.content}</ReactMarkdown>
          </div>
        ))}
      </section>

      {isTyping ? (
        <div className={isTyping ? "" : classes.hide}>
          <p>
            <i>Typing...</i>
          </p>
        </div>
      ) : (
        ""
      )}

      <form className={classes.chatForm} action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          className={classes.chatInput}
          name="message"
          value={message}
          placeholder="Type a message and hit enter"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
};

export default ChatModule;
