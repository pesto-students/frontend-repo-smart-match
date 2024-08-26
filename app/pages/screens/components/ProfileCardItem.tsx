import React from "react";
import Image from "next/image";

interface ProfileCardItemProps {
  imageUrl: string;
  name: string;
  progress: number;
}

const ProfileCardItem: React.FC<ProfileCardItemProps> = ({ imageUrl, name, progress }) => {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2 w-[279px] h-[78px]">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
        />
      </div>
      <div className="ml-4 flex-grow">
        <span className="block text-lg font-semibold text-black">{name}</span>
        <div className="mt-1 bg-gray-300 rounded-full h-2 w-[130px]">
          <div className="bg-gray-400 h-2 rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="ml-auto bg-teal-200 rounded-full p-2.5">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-teal-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  />
</svg>
      </div>
    </div>
  );
};

export default ProfileCardItem;
