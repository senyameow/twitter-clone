'use client'
import useAuthModal from "@/hooks/useAuthModal";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { useUser } from "@/hooks/useUser";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { onclick?: () => void }



const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type,
    onclick,
    ...props
}, ref) => {

    const { pending } = useFormStatus()

    const { onOpen } = useAuthModal()

    const { user } = useUser()

    const handleClick = () => {
        if (!user) {
            console.log(user)
            onOpen()
        } else {
            console.log('do smth')
            // tweet or smth
            onclick?.()

        }
    }
    return (
        <button
            onClick={handleClick}
            type={type}
            className={twMerge(
                `
        bg-main text-white rounded-full w-full px-3 py-2 text-[1.1rem] font-bold hover:bg-blue-400/90
      `,
                disabled && 'opacity-75 cursor-not-allowed',
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}

        </button>
    );
});

Button.displayName = "Button";

export default Button;

