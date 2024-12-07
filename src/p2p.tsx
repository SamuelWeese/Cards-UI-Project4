import React, { useEffect, useState, useRef } from 'react';
import SimplePeer from 'simple-peer';
import useWebSocket from 'react-use-websocket';

const P2PChat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const peerRef = useRef<SimplePeer.Instance | null>(null);

    // WebSocket connection to signaling server
    const { sendMessage, lastMessage } = useWebSocket('ws://localhost:8080');

    useEffect(() => {
        // Initialize peer on page load
        const peer = new SimplePeer({ initiator: false, trickle: false });

        peer.on('signal', (data) => {
            sendMessage(JSON.stringify({ type: 'signal', data }));
        });

        peer.on('connect', () => {
            console.log('Connected!');
        });

        peer.on('data', (data) => {
            setMessages((prev) => [...prev, data.toString()]);
        });

        peerRef.current = peer;

        return () => peer.destroy();
    }, [sendMessage]);

    useEffect(() => {
        if (lastMessage) {
            const { type, data } = JSON.parse(lastMessage.data);
            if (type === 'signal') {
                peerRef.current?.signal(data);
            }
        }
    }, [lastMessage]);

    const sendText = () => {
        if (peerRef.current && message.trim()) {
            peerRef.current.send(message);
            setMessages((prev) => [...prev, `You: ${message}`]);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>P2P Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendText}>Send</button>
        </div>
    );
};

export default P2PChat;
