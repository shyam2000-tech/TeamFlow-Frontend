"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  selected?: string;
  onChange?: (value: string) => void;
}

export default function Dropdown({
  label,
  options,
  selected,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-40">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full px-4 py-2 bg-white 
          border border-gray-300 
          rounded-xl shadow-sm 
          flex items-center justify-between 
          hover:border-gray-400 
          transition
        "
      >
        <span className="text-gray-700">
          {selected || label}
        </span>
        <ChevronDown size={18} className="text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="
            absolute left-0 mt-2 w-full 
            bg-white 
            border border-gray-200 
            rounded-xl shadow-lg 
            z-20
          "
        >
          {options.map((opt) => (
            <div
              key={opt}
              className="
                px-4 py-2 cursor-pointer 
                hover:bg-gray-100 
                text-gray-700
              "
              onClick={() => {
                onChange?.(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}