import React from 'react';
import Image from 'next/image';
import InputText from '@/app/components/InputText';
import CustomButton from '@/app/components/CustomButton';
import backgroundImage from '../../../assets/images/bgstart.png'; // Adjust this path as needed

const StartJoinCard: React.FC = () => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input changed:', event.target.value);
    };

    return (
        <div className="relative">
            {/* Background with half white and half black */}
            <div className="absolute inset-0 h-full">
                <div className="h-1/2 bg-white"></div>
                <div className="h-1/2 bg-black"></div>
            </div>
            
            {/* Content Wrapper */}
            <div className="relative max-w-[1330px] mx-auto">
                <section className="relative h-[416px] w-full overflow-hidden rounded-lg">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <Image 
                            src={backgroundImage} 
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center px-8">
                        {/* Text Section */}
                        <div className="flex-1 ml-16">
                            <h2 className="text-4xl font-bold text-white">
                                Start using the hiring<br />platform of the future.
                            </h2>
                        </div>

                        {/* Buttons and Input Section */}
                        <div className="flex-1 flex flex-col space-y-4 items-end justify-center mr-16">
                            <CustomButton
                                text="Start free trial"
                                width="466px"
                                height="74px"
                                backgroundColor="black"
                                textColor="white"
                                rounded="50px"
                                onClick={() => console.log('Start free trial clicked')}
                            />

<div className="relative w-full text-center">
                                <span className="inline-block py-2 text-black font-roboto ml-28">
                                    OR
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 mt-4">
                                <InputText
                                    width="246px"
                                    height="74px"
                                    placeholder="Enter work email"
                                    onChange={handleInputChange}
                                />
                                <CustomButton
                                    text="Book Demo"
                                    width="211px"
                                    height="74px"
                                    backgroundColor="black"
                                    textColor="white"
                                    rounded="50px"
                                    onClick={() => console.log('Book Demo clicked')}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StartJoinCard;