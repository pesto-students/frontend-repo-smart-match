import React from "react";
import { IconType } from 'react-icons'; 

interface CustomButtonProps {
    width: string;
    height: string;
    backgroundColor: string;
    rounded: string;
    text: string;
    textColor?: string;
    onClick: () => void;
    icon?: IconType;
    iconSize?: number;
    iconColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    width,
    height,
    backgroundColor,
    rounded,
    text,
    textColor = "white",
    onClick,
    icon: Icon,
    iconSize = 20,
    iconColor = "white",
}) => {
    return (
        <div
            style={{ width, height, backgroundColor, borderRadius: rounded }}
            className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow hover:scale-105"
            onClick={onClick}
        >
            
            <span className="font-roboto text-[16px]" style={{ color: textColor }}>
                {text}
            </span>

            {Icon && <Icon size={iconSize} color={iconColor} className="ml-4" />}
        </div>
    );
};

export default CustomButton;
