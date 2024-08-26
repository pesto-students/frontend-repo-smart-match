import React from "react";

interface ButtonProps {
    width: string;
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ width, text, onClick }) => {
    return (
        <div
            style={{ width }}
            className="h-[57px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow hover:scale-105"
            onClick={onClick}
        >
            <span className="font-roboto font-bold text-[16px]">
                {text}
            </span>
        </div>
    );
};

export default Button;