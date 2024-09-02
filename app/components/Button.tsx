import React from "react";

interface ButtonProps {
    width: string;
    text: string;
    onClick: () => void;
    height?: string;
}

const Button: React.FC<ButtonProps> = ({ width, text, onClick, height = '57px' }) => {
    return (
        <div
            style={{ width, height }}
            className="bg-black text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow hover:scale-105"
            onClick={onClick}
        >
            <span className="font-roboto font-bold text-[16px]">
                {text}
            </span>
        </div>
    );
};

export default Button;