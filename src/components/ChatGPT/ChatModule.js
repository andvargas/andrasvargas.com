import { useState } from "react";
import classes from "./ChatModule.module.css";
import ReactMarkdown from "react-markdown";
import { Fab, Tooltip } from "@mui/material";
import Logo from "../Logo/Logo";
import { Helmet } from "react-helmet";

const ChatModule = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(Date.now());
  const [tooltip, setTooltipOff] = useState(true);

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

  const disclaimer = (
    <div className={classes.bubble}>
      Hello, welcome to AndreChat, an AI-powered chat assistant designed to assist you with website-related queries. <br /> AndreChat is managed and
      maintained by our team at Andras. Feel free to ask anything, and our AI language model will do its best to provide accurate answers. <br /> If
      you choose to share your contact details with us, we can provide more personalized assistance and follow-up support. Rest assured, we take your
      privacy seriously, and your contact details will be kept confidential. <br />
      <strong>How can we assist you today?</strong>
    </div>
  );

  return (
    <main className={classes.main} onClick={() => setTooltipOff(false)}>
      <Helmet>
        <title>Andras Vargas | AI Powered Chat-assistant</title>
        <link rel="canonical" href={`${window.location.hostname}/`} />
        <meta name="description" content="Welcome to AndreChat, an AI-powered chat assistant designed to assist you with website-related queries." />
      </Helmet>
      <Tooltip
        title="HomePage"
        open={tooltip}
        onMouseEnter={() => setTooltipOff(true)}
        onMouseLeave={() => setTooltipOff(false)}
        placement="right-end"
        arrow
      >
        <Fab style={{ position: "fixed", left: "25px" }}>
          <Logo width={39} />
        </Fab>
      </Tooltip>

      <h1 style={{ paddingLeft: "15px" }}>AndreChat</h1>
      {chats.length < 1 ? disclaimer : ""}
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
