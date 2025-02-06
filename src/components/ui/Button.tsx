import { ReactElement } from "react";

type Variants = "primary" | "secondary";
export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-indigo-600 text-white",
    "secondary": "bg-indigo-300 text-indigo-600"

}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "p-6",
}

const defaultStyles = "rounded-md flex items-center"

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{props.text}{props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}</button>
}