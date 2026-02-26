'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";

// Mock Data
const chatListData = [
  { id: 1, profile: "https://placehold.co/400x400", name: "John Doe", message: "Hello, how are you?", time: "10:30 AM", status: "online" },
  { id: 2, profile: "https://placehold.co/400x400", name: "Jane Doe", message: "See you tomorrow!", time: "09:15 AM", status: "offline" },
  { id: 3, profile: "https://placehold.co/400x400", name: "Hosain Ahmed", message: "Project is ready.", time: "Yesterday", status: "online" },
  // ... add more as needed
];

interface ChatListProps {
  activeId: number;
  onSelect: (id: number) => void;
}

const ChatList = ({ activeId, onSelect }: ChatListProps) => {
  return (
    <div className="flex flex-col gap-1">
      {chatListData.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={cn(
            "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left",
            activeId === item.id 
              ? "bg-white shadow-md scale-[1.02]" 
              : "hover:bg-white/20 text-white/90 hover:text-white"
          )}
        >
          {/* Avatar Section */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
              <Image 
                src={item.profile} 
                alt={item.name} 
                width={48} 
                height={48} 
                className="object-cover"
              />
            </div>
            {item.status === "online" && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          {/* Text Section */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
              <h3 className={cn(
                "font-semibold truncate",
                activeId === item.id ? "text-slate-900" : "text-white"
              )}>
                {item.name}
              </h3>
              <span className={cn(
                "text-[10px] ml-2 shrink-0",
                activeId === item.id ? "text-slate-400" : "text-blue-100"
              )}>
                {item.time}
              </span>
            </div>
            <p className={cn(
              "text-sm truncate",
              activeId === item.id ? "text-slate-500" : "text-blue-50"
            )}>
              {item.message}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatList;