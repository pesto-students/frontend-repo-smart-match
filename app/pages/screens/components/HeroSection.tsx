import React, { useState } from "react";
import Button from "@/app/components/Button";
import InputText from "@/app/components/InputText";
import ProfileCardSection from "./ProfileCardSection";
import Wrapper from "@/app/components/Wrapper";
import bgImage from '@/app/assets/images/bg.png'; 

const HeroSection: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between items-start py-8 px-4 md:px-8 lg:px-4">
          <div className="w-full md:w-auto mt-16 md:mb-0 mr-20">
            <div className="text-black font-bold mb-[60px]">
              <span className="block text-[64px] leading-[1] font-roboto">
                Hire from India&apos;s largest talent pool.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mb-[40px] space-y-4 sm:space-y-0 sm:space-x-4">
              <InputText
                width="370px"
                placeholder="Enter your text"
                onChange={handleInputChange}
              />
              <Button width="180px" text="Book Demo" onClick={handleClick} />
            </div>
            <div className="flex items-center justify-center w-10 mb-2 ml-60 -mt-8">
  <span className="text-center text-black font-roboto mx-8">OR</span>
</div>
            <Button
              width="565px"
              text="Start free trail to access to hire now"
              onClick={handleClick}
            />
          </div>
          
          <div className="w-full md:w-auto mr-16">
            <ProfileCardSection />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
