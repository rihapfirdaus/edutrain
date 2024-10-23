import { ChevronDown as ShowIcon, ChevronUp as HideIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

interface SelectProps {
  placeholder: string;
  title?: string;
  name: string;
  option: string[];
  disabled?: boolean;
  required?: boolean;
  className?: string;
  label?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function Select({
  placeholder,
  title,
  name,
  option,
  disabled = false,
  required = false,
  className,
  label,
  value,
  defaultValue,
  onChange,
  ...rest
}: SelectProps) {
  const normalization =
    value === "LAKI_LAKI"
      ? "Laki-laki"
      : value === "PEREMPUAN"
      ? "Perempuan"
      : value;

  const [selected, setSelected] = useState(normalization);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (disabled) {
      setShow(false);
    }
  }, [disabled]);

  useEffect(() => {
    setSelected(normalization);
  }, [normalization]);

  return (
    <div className={`relative w-full ${disabled && "text-[#777777]"}`}>
      {label && <label className="text-black">{label}</label>}

      <input
        type="text"
        className={`py-2 rounded-lg border w-full bg-white px-4 caret-transparent ${
          !disabled && "cursor-pointer"
        } ${className}`}
        name={name}
        placeholder={placeholder}
        title={title}
        required={required}
        value={selected}
        onClick={handleShow}
        disabled={disabled}
        {...rest}
        readOnly
      />

      <button
        title={show ? "sembunyikan" : "tampilkan"}
        type="button"
        onClick={handleShow}
        className={`absolute right-4 h-fit z-10 text-[#d4d4d4] hover:text-black ${
          label ? "top-8" : "top-2"
        } `}
      >
        {show ? <HideIcon /> : <ShowIcon />}
      </button>
      {show && (
        <div className="w-full bg-white absolute z-10 border rounded-lg shadow-md overflow-clip">
          {option.map((item) => (
            <p
              key={item}
              className={`py-2 px-4 hover:bg-[#f4f4f4] select-none cursor-pointer ${
                value === item && "bg-[#f4f4f4]"
              }`}
              onClick={() => {
                setSelected(item);
                setShow(false);
                if (onChange) {
                  onChange({
                    target: {
                      name,
                      value: item,
                    },
                  } as ChangeEvent<HTMLInputElement | HTMLSelectElement>);
                }
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
