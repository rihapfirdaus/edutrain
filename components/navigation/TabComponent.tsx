"use client";
import React, { useState, ReactNode } from "react";

interface TabComponentProps {
  tabs: string[];
  children: ReactNode;
  className?: string;
}

export default function TabComponent({
  tabs,
  children,
  className,
}: TabComponentProps) {
  const [indexTab, setIndexTab] = useState(2);
  const childArray = React.Children.toArray(children);

  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        {tabs.map((item, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-bold border-b ${
              index === indexTab && "text-blue-500 border-blue-500"
            }`}
            onClick={() => setIndexTab(index)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={`py-2 min-h-80 ${className}`}>
        {indexTab <= childArray.length && childArray[indexTab]}
      </div>
    </div>
  );
}
