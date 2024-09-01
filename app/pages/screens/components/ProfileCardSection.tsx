
'use client';
import React from "react";
import Image from "next/image";
import ProfileCardItem from "./ProfileCardItem";

const ProfileCardSection: React.FC = () => {
  return (
    <div className="relative bg-white rounded-xl shadow-2xl w-[455px] h-[600px] flex flex-col justify-between">
      <div className="bg-black h-[50px] w-full rounded-t-xl flex items-center px-4">
  <span className="bg-red-500 rounded-full h-3 w-3 mr-2"></span>
  <span className="bg-yellow-500 rounded-full h-3 w-3 mr-2"></span>
  <span className="bg-green-500 rounded-full h-3 w-3"></span>
</div>
      <div className="absolute top-20 left-4 pb-8 pl-8">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <Image
            src="https://avatar.iran.liara.run/public/boy?username=Ash"
            alt="Suman Singh"
            width={90}
            height={90}
            className="rounded-full"
          />
          <div className="ml-4">
            <span className="block text-black text-[24px] font-roboto font-bold">
              Suman Singh
            </span>
            <p className="text-gray-500 text-sm">Backend Engineer</p>
            <div className="bg-gray-200 h-2 rounded-full w-36 mt-2"></div>
          </div>
          <div className="ml-4 flex-grow"></div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-4" />

        {/* Status Section */}
        <div className="space-y-4 mt-10">
          <div className="flex items-start">
            <span className="bg-teal-200 rounded-full h-5 w-5 mr-4"></span>
            <div>
              <p className="text-black font-semibold mb-4">
                Mail but no response
              </p>
              <div className="mt-1">
                <div className="bg-gray-200 h-2 rounded-full w-36 mb-1"></div>
                <div className="bg-gray-200 h-2 rounded-full w-24"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-yellow-200 rounded-full h-5 w-5 mr-4"></span>
            <div>
              <p className="text-black font-semibold mb-4">
                Introduction received
              </p>
              <div className="mt-1">
                <div className="bg-gray-200 h-2 rounded-full w-36 mb-1"></div>
                <div className="bg-gray-200 h-2 rounded-full w-24"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <span className="bg-pink-200 rounded-full h-5 w-5 mr-4"></span>
            <div>
              <p className="text-black font-semibold mb">
                Interview schedule by Friday
              </p>
              <div className="mt-1">
                <div className="bg-gray-200 h-2 rounded-full w-36 mb-1"></div>
                <div className="bg-gray-200 h-2 rounded-full w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side floating images */}
      <div className="absolute -right-16 top-1/4 transform -translate-y-1/2 space-y-4">
        <div className="bg-white rounded-full p-1 shadow-md">
          <Image
            src="https://avatar.iran.liara.run/public/boy?username=ML"
            alt="ML Engineer"
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Right side floating images */}
      <div className="absolute -right-28 top-2/3 transform -translate-y-1/2 space-y-4">
        <ProfileCardItem
          imageUrl="https://avatar.iran.liara.run/public/boy?username=ML"
          name="ML Engineer"
          progress={60}
        />
        <ProfileCardItem
          imageUrl="https://avatar.iran.liara.run/public/boy?username=Ash"
          name="iOS Engineer"
          progress={80}
        />
      </div>

      {/* Left side floating images */}
      <div className="absolute -left-12 top-3/4 transform -translate-y-1/2 space-y-4">
        <div className="bg-white rounded-full p-1 shadow-md">
          <Image
            src="https://avatar.iran.liara.run/public/boy?username=ML"
            alt="iOS Engineer"
            width={135}
            height={135}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSection;
