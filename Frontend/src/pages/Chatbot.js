import React, { useState } from 'react';

// Chatbot Component
const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const sendMessage = async () => {
        if (userInput.trim() === '') return;
        const newMessages = [...messages, { author: 'user', content: userInput }];
        setMessages(newMessages);
        setIsSending(true);
        setUserInput('');

        try {
            const botResponse = await getBotResponse(userInput);
            setMessages([
                ...newMessages,
                { author: 'bot', content: botResponse }
            ]);
        } catch (error) {
            setMessages([
                ...newMessages,
                { author: 'bot', content: 'Sorry, something went wrong.' }
            ]);
        } finally {
            setIsSending(false);
        }
    };

    // Function to get bot response from Gemini API
    const getBotResponse = async (userQuery) => {
        const apiKey = 'AIzaSyDJRxzgt0KuYQAGT4DxjeNtWM_mgNWay24'; // Use your Gemini API key
        const model = 'gemini-1.5-flash-latest';

        const requestPayload = {
            contents: [
                {
                    parts: [
                        { text: `I want to know about dry fruit nutrition and diet plans. Here's my query: ${userQuery}` }
                    ]
                }
            ]
        };

        const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestPayload),
        });

        if (!apiResponse.ok) {
            throw new Error('Failed to retrieve response');
        }

        const data = await apiResponse.json();
        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('No valid response from API');
        }
    };

    return (
        <div id="chatbotContainer">
            <div id="chatbotHeader">Chat with Us</div>
            <div id="chatbotMessages" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.author === 'user' ? 'user-message' : 'bot-message'}`}>
                        <div className="message-content">{msg.content}</div>
                    </div>
                ))}
            </div>
            <div id="chatbotInput">
                <input
                    type="text"
                    id="chatInput"
                    placeholder="Type your message..."
                    className="text-black p-2"
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button
                    id="sendButton"
                    disabled={isSending}
                    onClick={sendMessage}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
