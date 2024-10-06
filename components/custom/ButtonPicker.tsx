import { useEffect } from "react";

interface ButtonPickerProps {
  option: any[];
  defaultValue?: string;
  value?: Set<any>;
  setValue: (value: Set<any>) => void;
}

export default function ButtonPicker({
  option,
  defaultValue,
  value = new Set(),
  setValue,
}: ButtonPickerProps) {
  useEffect(() => {
    if (defaultValue && !value.has(defaultValue)) {
      const newValue = new Set(value);
      newValue.add(defaultValue);
      setValue(newValue);
    }
  }, []);

  const handleClick = (item: any) => {
    const newValue = new Set(value);
    if (newValue.has(item)) {
      newValue.delete(item);
    } else {
      newValue.add(item);
    }
    setValue(newValue);
  };

  return (
    <div className="flex gap-2 w-full overflow-x-scroll">
      {option.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item)}
          className={`py-2 px-4 rounded-lg whitespace-nowrap ${
            value.has(item) ? "bg-[#0041A1] text-white" : "bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
