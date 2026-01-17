'use client'

import { useState, useRef } from "react";
import { Plus, Send, ChevronLeft, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatList from "@/components/chat/ChatList";
import ChatWindow from "@/components/chat/ChatWindow";
const Page = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [isListOpen, setIsListOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectChat = (id: number) => {
    setActiveChat(id);
    setIsListOpen(false);
    console.log("Switched to chat:", id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message sent", (e.target as HTMLFormElement).message.value);

  }

  return (
    <div className="container mx-auto flex h-[calc(100vh-5rem)] w-full bg-white md:p-4 gap-4 overflow-hidden">
      <div className={cn(
        "absolute inset-0 z-999 bg-[#70C8FF] h-full w-[75%] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:max-w-[350px] md:flex md:rounded-2xl flex-col p-3 overflow-hidden",
        isListOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-white font-bold text-xl">Messages</h2>
          <button className="md:hidden text-white" onClick={() => setIsListOpen(false)}>
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <ChatList activeId={activeChat} onSelect={handleSelectChat} />
        </div>
      </div>


      <main className="flex-1 flex flex-col bg-white md:rounded-2xl shadow-sm overflow-hidden h-full">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
          <button
            onClick={() => setIsListOpen(true)}
            className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full"
          >
            <Menu size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {activeChat}
            </div>
            <div>
              <h3 className="font-semibold text-sm leading-none">Chat User {activeChat}</h3>
              <span className="text-[10px] text-green-500 font-medium uppercase">Online</span>
            </div>
          </div>
        </div>
        <ChatWindow />
        <div className="p-4 pb-6 md:pb-4 border-t border-gray-100 flex items-center gap-3">
          <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400">
            <Plus size={24} />
            <input ref={fileInputRef} type="file" className="hidden" />
          </button>
          <form className="flex items-center w-full gap-3" onSubmit={handleSubmit}>
            <input
              name="message"
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-full px-6 py-2.5 outline-none text-sm"
            />
            <button
              type="submit"
              className="p-2.5 bg-blue-500 text-white rounded-full">
              <Send size={20} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Page;