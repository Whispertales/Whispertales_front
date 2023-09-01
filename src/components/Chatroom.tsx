import { useEffect, useState, useRef } from 'react';
import {io, Socket} from 'socket.io-client';
import { apis } from '../utils/tools/api';

import Image from './Image';

export default function Chatroom(){
    const ENDPOINT = apis.SocketioServer; // replace with your server endpoint
    const socketRef = useRef<Socket>();
    //const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);

    useEffect(() => {
        socketRef.current = io(ENDPOINT);
        return ()=>{
            socketRef.current!.disconnect();
        }
    }, []);

    useEffect(() => {
        socketRef.current!.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, { text: msg, isBot: true }]);
        });

        // remove event listener when component unmounts
        return () => {
            socketRef.current!.off('chat message');
        };
    }, []);

    const handleInputChange_Chatroom = (e:any) => {
        setInputValue(e.target.value);
    };

    const handleSubmit_Chatroom = (e:any) => {
        e.preventDefault();
        // send input value to server
        socketRef.current!.emit('chat message', inputValue);
        // add user's message to the chat history
        setMessages((prevMessages) => [...prevMessages, { text: inputValue, isBot: false }]);
        // clear input field
        setInputValue('');
    };

    const handleClear = () => {
        setMessages([]);
    };

    return (
        <div>
            <ul>
                {messages.map((msg, i) => (
                    <li key={i} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                        <span className="text">{msg.text}</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleClear}>Clear Chat</button>
            <Image inputValue={inputValue} handleSubmit_Chatroom={handleSubmit_Chatroom} handleInputChange_Chatroom={handleInputChange_Chatroom}></Image>
        </div>
    );
}

