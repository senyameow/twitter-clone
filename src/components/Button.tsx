import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return (
        <button
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

