import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // This function will be called when the user clicks "Send"
  const sendMessage = async () => {
    if (!userInput.trim()) return; // ignore empty input

    // 1. Add user's message to the messages array
    setMessages(prev => [...prev, { role: 'user', content: userInput }]);

    // 2. Send user message to your AI server endpoint
    //    (Replace the URL below with your actual server address, e.g., http://localhost:5178/ask-ai)
    const response = await fetch('http://localhost:5178/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();

    // 3. Add AI's reply to the messages array
    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);

    // 4. Clear the user input field
    setUserInput('');
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.role === 'user'
                ? styles.userMessage
                : styles.assistantMessage
            }
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          style={styles.inputBox}
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button style={styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

// Some basic inline styles for demonstration
const styles = {
  chatContainer: {
    width: '400px',
    margin: '0 auto',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    height: '500px'
  },
  messagesContainer: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9'
  },
  userMessage: {
    textAlign: 'right',
    margin: '5px',
    padding: '10px',
    backgroundColor: '#cef',
    borderRadius: '8px',
    display: 'inline-block'
  },
  assistantMessage: {
    textAlign: 'left',
    margin: '5px',
    padding: '10px',
    backgroundColor: '#eee',
    borderRadius: '8px',
    display: 'inline-block'
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ccc'
  },
  inputBox: {
    flex: 1,
    padding: '10px',
    border: 'none',
    outline: 'none'
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default Chat;
