"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchBox({ placeholder, value, onChange }: SearchBoxProps) {
  return (
    <div
      className="
        flex items-center gap-2
        bg-white 
        border border-gray-300 
        rounded-xl 
        px-4 py-2 
        shadow-sm 
        hover:border-gray-400 
        transition
        focus-within:ring-2
        focus-within:ring-blue-500
      "
    >
      <Search size={18} className="text-gray-500" />

      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type="text"
        placeholder={placeholder || "Search..."}
        className="
          w-full 
          focus:outline-none 
          text-gray-700
        "
      />
    </div>
  );
}