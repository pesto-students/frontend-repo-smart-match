import React from "react";

interface InputTextProps {
    width: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ width, placeholder, onChange }) => {
    return (
        <input
            type="text"
            style={{ width }}
            className="h-[57px] bg-white border border-black rounded-full px-4 text-black font-roboto text-[16px] focus:outline-none "
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default InputText;
