import React from "react";

interface InputTextProps {
    width: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    height?: string; 
}

const InputText: React.FC<InputTextProps> = ({ 
    width, 
    placeholder, 
    onChange, 
    height = '57px' 
}) => {
    return (
        <input
            type="text"
            style={{ width, height }} 
            className="bg-white border border-black rounded-full px-4 text-black font-roboto text-[16px] focus:outline-none"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default InputText;