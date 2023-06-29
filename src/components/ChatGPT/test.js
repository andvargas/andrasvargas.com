const chat = async (e, message) => {
  e.preventDefault();

  if (!message) return;
  setIsTyping(true);

  const newChat = { role: "user", content: message };
  const newChats = [...chats, newChat];
  setChats(newChats);

  setMessage("");

  axios
    .post("http://localhost:5001/chatgpt", newChats) // Use newChats instead of chats
    .then((response) => response.data) // response.json() is not needed, as axios already parses the response
    .then((data) => {
      const updatedChats = [...newChats, data.output]; // Add the response to newChats
      setChats(updatedChats);
      setIsTyping(false);
    })
    .catch((error) => console.log(error));
};
