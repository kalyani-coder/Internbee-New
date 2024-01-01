
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const MessageComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('inbox');
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello there!', sender: 'John Doe' },
    // Add more dummy messages as needed
  ]);

  const chatPanelRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedUser(null);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') {
      // Don't send empty messages
      return;
    }

    const newMessage = {
      id: chatMessages.length + 1,
      text: messageInput,
      sender: 'You', // Set the sender as 'You' when the message is sent
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessageInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getUsersForCategory = () => {
    // Simulate fetching users based on the selected category
    switch (selectedCategory) {
      case 'inbox':
        return [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Alen Walker' },
          { id: 3, name: 'Kenneth Doe' },
          { id: 4, name: 'Adom Grills' },
          { id: 5, name: 'Sam Jack' },
          // Add more users as needed
        ];
      case 'archive':
        // Fetch users for archive category
        return [];
      case 'spam':
        // Fetch users for spam category
        return [];
      default:
        return [];
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat panel when new messages are added
    chatPanelRef.current.scrollTop = chatPanelRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <><div><Navbar/></div>
    <div className="flex h-screen bg-gray-100">
      {/* Left Section with Dropdown */}
      <div className="w-1/4 border-r">
        <div className="items-center justify-between bg-gray-200 p-2">
          <div>
            <span>Message</span>
          </div>
          <select onChange={(e) => handleCategoryChange(e.target.value)}>
            {['Inbox', 'Archive', 'Spam'].map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* User List */}
        {selectedCategory === 'inbox' && (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Chat(5)</h3>
            <ul>
              {getUsersForCategory().map((user) => (
                <li key={user.id} onClick={() => handleUserSelect(user)} className="hover:cursor-pointer">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section with Chat Panel */}
      <div className="flex-grow">
        <div ref={chatPanelRef} className="flex-grow p-4 bg-gray-100 overflow-auto">
          <h2 className="text-xl font-bold mb-4">
            {selectedUser ? `Chat with ${selectedUser.name}` : 'Select a user'}
          </h2>
          <div className="flex flex-col h-full">
            <div className="flex-grow mb-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 p-2 rounded ${
                    message.sender === 'You'
                      ? 'self-end bg-blue-500 text-white'
                      : 'bg-gray-300 text-black'
                  }`}
                >
                  <span className="font-bold block">
                    {message.sender === 'You' ? 'You' : selectedUser ? selectedUser.name : ''}
                  </span>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Send Message"
                value={messageInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="flex-grow p-2 mr-2 border rounded"
              />
              <button
                onClick={handleSendMessage}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MessageComponent;

