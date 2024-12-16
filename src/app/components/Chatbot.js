"use client";

import { useState } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/propertydetails', {
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
        <div className={styles.chatbot}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask something..."
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            {response && <div className={styles.response}>{response}</div>}
        </div>
    );
};

export default Chatbot;