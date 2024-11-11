"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { Option } from "@/types/global";

import "./Dropdown.css";

interface Props {
  children: ReactNode;
  options: Option[];
}

const Dropdown = ({ children, options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      console.log(
        "Clicked outside?",
        !dropdownRef.current?.contains(e.target as Node),
      );
      console.log("if ", dropdownRef.current);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        console.log("setIsClosed");
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen, dropdownRef]);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <button className="relative" aria-label="dropdown" onClick={toggleDropdown}>
      {children}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={dropdownRef}
          role="menu"
          className="arrowUp absolute left-1/2 -translate-x-1/2"
        >
          <ul className="overflow-hidden rounded-md bg-gray-200">
            {options.map((option, index) => (
              <li
                onClick={option.action}
                key={index}
                className="px-6 py-2 duration-150 hover:bg-gray-300 active:bg-gray-400"
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default Dropdown;
