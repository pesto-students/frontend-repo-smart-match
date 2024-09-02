import React from 'react';
import CustomButton from './CustomButton'; // Adjust path if needed
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import bgcandidate from '../assets/images/bgcandidate.png';

const CandidateSearchForm: React.FC = () => {
    return (
        <div className="relative max-h-[335px] w-full">
            {/* Background Layer */}
            <div className="absolute inset-0 h-full">
                <div className="h-1/2 bg-white"></div>
                <div className="h-1/2 bg-black"></div>
            </div>
            
            {/* Main Content Wrapper */}
            <div className="relative flex flex-col items-start h-full max-w-[1300px] mx-auto p-8 rounded-[24px] font-roboto overflow-hidden">
                <Image 
                    src={bgcandidate}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 flex flex-wrap items-center w-full gap-2 mb-8">
                    <span>Find me a person having</span>
                    <div className="relative">
                        <input 
                            type="text" 
                            value="Python"
                            className="bg-white text-gray-700 p-2 pr-8 rounded-lg w-[150px] focus:outline-none"
                            readOnly
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">×</button>
                    </div>
                    <span>knowledge and located in</span>
                    <div className="relative">
                        <input 
                            type="text" 
                            value="India"
                            className="bg-white text-gray-700 p-2 pr-8 rounded-lg w-[150px] focus:outline-none"
                            readOnly
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">×</button>
                    </div>
                    <span>and has minimum</span>
                    <select className="bg-white text-gray-700 p-2 rounded-lg w-[120px] focus:outline-none">
                        <option>3 years</option>
                    </select>
                
                    <span>experience and has worked in</span>
                    <input 
                        type="text" 
                        placeholder="Search Companies"
                        className="bg-white text-gray-700 p-2 rounded-lg w-[200px] focus:outline-none"
                    />
                    <span>companies.</span>
                </div>

                {/* Button Wrapper to place the button on the next line */}
                <div className="relative z-10 mt-4 w-full">
                    <CustomButton
                        width="190px"
                        height="42px"
                        backgroundColor="#F3BC7F"
                        rounded="50px"
                        text="Search Candidates"
                        textColor="black"
                        onClick={() => console.log('Button clicked')}
                        icon={FaArrowRight}
                        iconSize={12}
                        iconColor="black"
                    />
                </div>
            </div>
        </div>
    );
};

export default CandidateSearchForm;
