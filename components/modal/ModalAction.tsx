import { X as CloseIcon } from "lucide-react";

interface ModalActionProps {
  children: React.ReactNode;
  action: () => void;
  showCloseButton?: boolean;
}

export default function ModalAction({
  children,
  action,
  showCloseButton = false,
}: ModalActionProps) {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 grid place-items-center z-30 overflow-y-scroll"
      onClick={action}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_1.jpg')",
        }}
        className="flex flex-col justify-center items-center text-white font-bold bg-cover bg-center max-w-80 min-w-80 rounded-3xl min-h-64 shadow-xl relative gap-2 border-2 p-2 my-2"
      >
        {showCloseButton && (
          <div
            className="absolute right-4 top-3 hover:bg-[#0041A1] p-2 rounded-full cursor-pointer"
            onClick={action}
          >
            <CloseIcon />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
