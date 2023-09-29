import { useEffect, useState, useRef } from 'react';
import {io, Socket} from 'socket.io-client';
import { apis } from '../utils/tools/api';

import '../styles/Chatroom.css';

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

    const handleClearButton = () => {
        setMessages([]);
    };

    return (
        <div>
            <div className='chatroom'>
                <ul className='chatroomSpace'>
                    {messages.map((msg, i) => (
                        <li key={i} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                            <div>
                            <span className="text ">{msg.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Image className='imageleft' inputValue={inputValue} handleSubmit_Chatroom={handleSubmit_Chatroom} handleInputChange_Chatroom={handleInputChange_Chatroom} ClearButton={handleClearButton}></Image>
            </div>
        </div>

    );
}

