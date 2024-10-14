import Image from "next/image";

interface FormBaseProps {
  children: React.ReactNode;
  layout?: "left" | "right";
}

export default function FormBase({ children, layout = "left" }: FormBaseProps) {
  return (
    <div className="grid place-items-center min-h-screen h-full w-screen backdrop-blur-lg">
      <div
        className={`flex rounded-3xl my-8  overflow-clip w-full max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-4rem)] md:max-w-[calc(100%-16rem)] lg:w-auto lg:max-w-none shadow-xl ${
          layout === "right" && "flex-row-reverse"
        }`}
      >
        <div className="hidden lg:flex justify-center items-center min-w-[24rem] md:min-w-[28rem] min-h-[36rem] bg-white">
          <Image
            src={"/edutrain_logo_ori.jpg"}
            alt="Logo Edutrain"
            width={400}
            height={400}
            className="max-w-[calc(100%-8rem)]"
          />
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_3.jpg')",
          }}
          className="flex justify-center items-center w-full lg:w-auto lg:max-w-[28rem] lg:min-w-[28rem] min-h-[36rem] bg-cover bg-center text-white"
        >
          <div className="relative h-full flex flex-col justify-center items-center w-full gap-4 text-center max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
