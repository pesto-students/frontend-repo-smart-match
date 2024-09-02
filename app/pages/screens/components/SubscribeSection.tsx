import React from "react";
import Image from "next/image";
import InputText from "@/app/components/InputText";
import CustomButton from "@/app/components/CustomButton";
import bg from "../../../assets/images/bgsub.png";
import Button from "@/app/components/Button";

const SubscribeSection: React.FC = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", event.target.value);
  };

  return (
    <section className="relative">
      {/* White background for title */}
      <div className="bg-white pt-8 pb-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-4">
            Subscribe to <br />
            free talent drops
          </h2>
          <p className="text-center mb-16 text-black">
            Want to see the quality of these engineers for free?
          </p>
        </div>
      </div>

      {/* Background pattern image */}
      <div className="relative">
        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          alt="Background pattern"
        />

        {/* Form and info section overlapping both backgrounds */}
        <div className="container mx-auto px-4 relative">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
            <div className="w-1/2 p-16 h-[700px]">
              <div className="space-y-8 mt-8">
                {/* First Name and Work Email on the same line */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-black font-bold mb-2">
                      First Name
                    </label>
                    <InputText
                      width="100%"
                      height="60px"
                      placeholder="John Doe"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-black font-bold mb-2">
                      Work Email
                    </label>
                    <InputText
                      width="100%"
                      height="60px"
                      placeholder="example@gmail.com"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Company and Role hiring for on the same line */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-black font-bold mb-2">
                      Company
                    </label>
                    <InputText
                      width="100%"
                      height="60px"
                      placeholder="Apple"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-black font-bold mb-2">
                      Role hiring for
                    </label>
                    <InputText
                      width="100%"
                      height="60px"
                      placeholder="Backend"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Salary Budget all in one line */}
                <div>
                  <label className="block text-black font-bold mb-2">
                    Salary Budget
                  </label>
                  <div className="flex items-center space-x-2 mb-8">
                    <InputText
                      width="40%"
                      height="60px"
                      placeholder="₹60,000"
                      onChange={handleInputChange}
                    />
                    <span className="text-black">To</span>
                    <InputText
                      width="40%"
                      height="60px"
                      placeholder="₹80,000"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <Button
                  text="Subscribe"
                  width="215px"
                  height="74px"
                  onClick={() => console.log("Subscribe clicked")}
                />
              </div>
            </div>
            <div className="w-1/2 bg-black text-white p-16">
              <h3 className="text-[32px] font-bold mb-4">
                Every week we will send you top software engineers who are
                looking out of a job switch. You can reach out to them for
                absolutely free
              </h3>
              <p className="mb-8 text-[20px]">
                Subscribe to our weekly newsletter which will send a 100% free
                to contact engineers in your inbox
              </p>
              <hr className="my-4 border-t-2 border-gray-300" />
              <h4 className="text-[32px] font-bold mb-2">
                Candidates sent here will be active job seekers
              </h4>
              <p className="text-[20px]">
                They will broadly match the criteria you put in here.
              </p>
            </div>
          </div>
        </div>

        <div className="py-80"></div>
      </div>
    </section>
  );
};

export default SubscribeSection;
