'use client'

import Image from "next/image";
export const messages = [
    { id: 1, text: "Hey! How is the project going?", sender: "other", time: "10:30 AM" },
    { id: 2, text: "It's going great! Check this out.", sender: "me", time: "10:32 AM" },
    { id: 3, image: "https://placehold.co/600x400", sender: "me", time: "10:32 AM" },
    { id: 4, text: "Looks amazing! Can you send me the full design?", sender: "other", time: "10:33 AM" },
    { id: 5, text: "Sure, I'll send it right now.", sender: "me", time: "10:34 AM" },
    { id: 6, text: "Thanks! Looking forward to it.", sender: "other", time: "10:35 AM" },
    { id: 7, text: "Here you go!", sender: "me", time: "10:36 AM" },
    { id: 8, image: "https://placehold.co/600x400", sender: "me", time: "10:36 AM" },
    { id: 9, text: "Perfect! Thanks again.", sender: "other", time: "10:37 AM" },
    { id: 10, text: "You're welcome! Let me know if you need anything else.", sender: "me", time: "10:38 AM" },
    { id: 11, text: "Will do. Have a great day!", sender: "other", time: "10:39 AM" },
    { id: 12, text: "You too! Talk soon.", sender: "me", time: "10:40 AM" },

];
const ChatWindow = () => {


    return (
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#F8FAFC]">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex flex-col max-w-[70%] ${msg.sender === 'me' ? 'self-end items-end' : 'self-start items-start'}`}
                >
                    <div className={`p-3 rounded-2xl ${msg.sender === 'me'
                            ? 'bg-blue-500 text-white rounded-tr-none'
                            : 'bg-white text-gray-800 shadow-sm rounded-tl-none'
                        }`}>
                        {msg.text && <p className="text-sm">{msg.text}</p>}
                        {msg.image && (
                            <div className="relative w-48 h-32 md:w-64 md:h-48 rounded-lg overflow-hidden">
                                <Image src={msg.image} alt="Sent file" fill className="object-cover" />
                            </div>
                        )}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 uppercase font-medium">{msg.time}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;