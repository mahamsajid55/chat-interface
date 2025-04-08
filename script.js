const socket = io.connect("http://localhost:5000");

document.getElementById("send-button").addEventListener("click", () => {
  const message = document.getElementById("message-input").value;
  socket.emit("send_message", message);  // Emit message to server
  document.getElementById("message-input").value = ""; // Clear input
});

// Listen for incoming messages
socket.on("receive_message", (message) => {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
});



