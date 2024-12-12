import { useState } from 'react';

const Chatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/propertydetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await res.json();
        setResponse(data.ollama_response);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask a question about the property"
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Chatbot;