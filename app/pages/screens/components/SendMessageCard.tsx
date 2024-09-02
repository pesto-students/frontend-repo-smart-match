import React from "react";
import { FaEnvelope, FaPhone, FaPlus } from "react-icons/fa";
import Button from "@/app/components/Button";
import InputText from "@/app/components/InputText";
import Image from "next/image";
import sequenceImage from "../../../assets/images/bgthree.png";

const SendMessageCard: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-[1220px] mx-auto px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-16">
        <div className="flex-1 max-w-[540px] mx-auto">
          <h2 className="text-3xl font-bold">
            Send personalised messages across multiple channels
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Send multi-channel hyper-personalised sequences. Choose and order
            according to your preference:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 text-lg space-y-1">
            <li>Email</li>
            <li>Asking the scout for introduction (single-click)</li>
            <li>WhatsApp/text</li>
            <li>LinkedIn InMail</li>
            <li>Phone call</li>
          </ul>

          <div className="flex space-x-12 mt-8">
  <div className="text-center">
    <div className="flex items-baseline">
      <span className="text-[96px] font-bold text-black leading-none">10</span>
      <span className="text-[96px] font-bold text-red-500 leading-none">X</span>
    </div>
    <p className="text-[32px] font-bold text-black mt-2">Better talent</p>
  </div>
  <div className="text-center">
    <div className="flex items-baseline">
      <span className="text-[96px] font-bold text-black leading-none">30</span>
      <span className="text-[96px] font-bold text-green-500 leading-none">%</span>
    </div>
    <p className="text-[32px] font-bold text-black mt-2">Response Rate</p>
  </div>
</div>

          <div className="flex space-x-4 mt-8">
            <InputText
              width={"240px"}
              placeholder={"Enter work email"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event.target.value);
              }}
            />
            <Button
              text="Try for free"
              onClick={() => console.log("Try for free clicked")}
              width={"179px"}
            />
          </div>
        </div>

        <div className="flex-1 relative bg-transparent rounded-lg shadow-lg max-w-[628px] h-[670px] overflow-hidden">
          <div className="absolute bottom-0 left-0">
            <Image
              src={sequenceImage}
              alt="Sequence Image"
              width={534}
              height={643}
              className="rounded-tl-lg shadow-md"
            />
          </div>

          <div className="absolute top-4 right-0 z-10">
            <div className="bg-white w-[298px] p-6 rounded-xl shadow-lg border border-gray-300">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src="https://avatar.iran.liara.run/public/boy?username=Abc"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Prem Malhotra</h3>
                <div className="w-full bg-gray-200 h-4 rounded-full mb-2"></div>
                <div className="w-3/4 bg-gray-200 h-4 rounded-full mb-4"></div>
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="bg-teal-500 p-2 rounded-full">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="bg-blue-500 p-2 rounded-full">
                    <FaPhone className="text-white" />
                  </div>
                  <div className="bg-red-500 p-2 rounded-full">
                    <FaPlus className="text-white" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Scout</span>

                  <div className="relative w-6 h-6 mr-2">
                    <Image
                      src="https://avatar.iran.liara.run/public/boy?username=Max"
                      alt="Profile"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <span>Raj (Amazon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMessageCard;
