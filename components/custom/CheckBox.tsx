"use client";
import { useState, useEffect } from "react";
import { Check as CheckIcon, Minus as ResetIcon } from "lucide-react";

interface CheckBoxProps {
  checked?: boolean;
  icon?: "check" | "reset";
  setChecked?: (value: boolean) => void;
}

export default function CheckBox({
  checked = false,
  icon = "check",
  setChecked,
}: CheckBoxProps) {
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleClick = () => {
    const newValue = !check;
    setCheck(newValue);
    if (setChecked) {
      setChecked(newValue);
    }
  };

  const Icon = icon === "check" ? CheckIcon : ResetIcon;

  return (
    <div
      className={`w-6 h-6 border cursor-pointer rounded-lg m-2 bg-white`}
      onClick={handleClick}
    >
      {check && <Icon size={12} className="w-full h-full text-blue-500" />}
    </div>
  );
}
