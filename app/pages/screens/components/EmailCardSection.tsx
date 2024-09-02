import React, { useState } from 'react';
import Image from 'next/image';
import bgtwo from '../../../assets/images/bgtwo.png';
import airplane from '../../../assets/images/airplane.png'
import calender from '../../../assets/images/calender.png'

const EmailCardSection: React.FC = () => {
    
    const [openStep, setOpenStep] = useState<number | null>(null);

   
    const toggleStep = (step: number) => {
        setOpenStep(openStep === step ? null : step);
    };

    return (
        <section className="py-16 bg-white text-black">
            <div className="max-w-[1420px] mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">How it works?</h2>
                    <div className='flex justify-center'>
                        <p className="mt-4 text-gray-600 w-[758px] text-center">
                            We realise that you must have hundreds of other things to do as a startup. We try to
                            make sourcing much easier for you by taking as many things off your plate as possible.
                        </p>
                    </div>    
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
   
                    <div className="relative bg-[#F7CB5E] rounded-tl-[44px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[44px] shadow-lg w-[641px] h-auto overflow-hidden flex items-end">
                        <Image
                            src={bgtwo} 
                            alt="Review draft messages"
                            layout="responsive"
                            width={688}
                            height={644}
                            objectFit="cover"
                            quality={100}
                            className="object-bottom" 
                        />
                    </div>

                    
                    <div className="space-y-8 w-[400px]"> 
                       
                        <div className="flex items-start space-x-4 cursor-pointer" onClick={() => toggleStep(1)}>
                            <h3 className="text-3xl font-bold">1.</h3>
                            <div>
                                <h4 className="text-xl font-bold">Signup & review email draft</h4>
                                {openStep === 1 && (
                                    <span className="block mt-2 text-gray-600 transition-all duration-300 ease-in-out">
                                        As soon as you signup, we create battle-tested outreach messages (Email & WhatsApp) 
                                        on your behalf to reach out to candidates.
                                    </span>
                                )}
                                <hr className="mt-4 border-t-2 border-gray-300"/>
                            </div>
                        </div>

                     
                        <div className="flex items-start space-x-4 cursor-pointer" onClick={() => toggleStep(2)}>
                            <h3 className="text-3xl font-bold">2.</h3>
                            <div>
                                <h4 className="text-xl font-bold">Shortlist & reach out</h4>
                                {openStep === 2 && (
                                    <span className="block mt-2 text-gray-600 transition-all duration-300 ease-in-out">
                                        After reviewing the draft, you can shortlist the candidates and start reaching out through our platform.
                                    </span>
                                )}
                                <hr className="mt-4 border-t-2 border-gray-300"/>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 cursor-pointer" onClick={() => toggleStep(3)}>
                            <h3 className="text-3xl font-bold">3.</h3>
                            <div>
                                <h4 className="text-xl font-bold">Receive interest & interview</h4>
                                {openStep === 3 && (
                                    <span className="block mt-2 text-gray-600 transition-all duration-300 ease-in-out">
                                        Candidates express interest, and you can proceed with scheduling interviews seamlessly.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailCardSection;
