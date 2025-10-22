interface PropsButton {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    target?: string;
    rel?: string;
}

export function PrimaryButton({ children,...props }: PropsButton) {
  return (
        <a
            {...props}
            className={`
            bg-gradient-to-r from-green-500 to-[#24a9e7]
            text-white font-bold
            text-sm sm:text-lg md:text-xl
            rounded-lg shadow-lg
            px-4 py-2 cursor-pointer
            transition duration-300 ease-in-out
            hover:scale-105 active:scale-95
            ${props.className}`}
        >
            {children}
        </a>)
} 