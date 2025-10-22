interface PropsOpcionNav {
    className?: string;
    href: string;
    children: React.ReactNode;
}

export function OpcionNav({ children, ...props }: PropsOpcionNav) {
    return (<a
      href={`#${props.href}`}
      className={`
        font-semibold transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-green-500 hover:to-[#24a9e7]
        text-gray-600
        ${props.className}
      `}>
      {children}
    </a>)
}