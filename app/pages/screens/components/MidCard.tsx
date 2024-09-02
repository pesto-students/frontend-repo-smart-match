import React from 'react';
import Button from '@/app/components/Button';
import InputText from '@/app/components/InputText';
import bgone from '../../../assets/images/bgone.png';
import Image from 'next/image';
import airplane from '../../../assets/images/airplane.png';
import calender from '../../../assets/images/calender.png'

const MidCard: React.FC = () => {
    const features = [
        {
            title: 'Sourcing on auto-pilot',
            icon: <Image src={airplane} alt="Airplane" width={29} height={29} />,
            description: [
                'Draft outreach message',
                'Set up mailboxes for you',
                'Shortlist candidates and reach out (on email, WhatsApp, and phone call)',
                'Handle replies and collect interest',
                'Do an intro call with interested candidates',
                'Get reference checks',
                'Share curated list of candidates with you',
            ],
            extraInfo: 'Ready to interview candidates on your calendar',
        },
        {
            title: 'Outreach copilot',
            icon: <Image src={calender} alt="Calendar" width={29} height={29} />,
            description: [
                'Automate outreach processes',
                'Personalize messages for high engagement',
                'Track responses and follow up automatically',
                'Schedule interviews seamlessly',
            ],
            extraInfo: 'Connect with high-potential candidates effortlessly',
        },
    ];

    const activeContent = features[0];

    return (
        <section className="bg-black text-white py-20">
            <h2 className="text-center text-3xl font-bold">What do we do?</h2>
            <p className="text-center mt-4">
                We help companies hire talent with ready references. <br />
                There are multiple products that we offer.
            </p>

            <div className="flex justify-center mt-8 space-x-4 h-[81px]">
                {features.map((feature) => (
                    <button
                        key={feature.title}
                        className={`flex items-center px-4 rounded-lg text-black ${
                            feature.title === 'Sourcing on auto-pilot' ? 'bg-white' : 'bg-gray-300'
                        }`}
                    >
                        <div className="flex items-center">
                            <div
                                className={`flex items-center justify-center w-[45px] h-[45px] rounded-full ${
                                    feature.title === 'Sourcing on auto-pilot' ? 'bg-[#5885F7]' : 'bg-[#F7CB5E]'
                                }`}
                            >
                                {feature.icon}
                            </div>
                        </div>
                        <span className="ml-2">{feature.title}</span>
                    </button>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <div className="bg-white w-[1080px] text-black p-12 rounded-lg shadow-lg flex">
                    <div className="w-1/2 pr-6">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-[77px] h-[77px] rounded-full bg-[#5885F7]">
                            <Image 
        src={airplane} 
        alt="Airplane" 
        width={49} 
        height={49} 
    />
                            </div>
                        </div>
                        <h4 className="text-[32px] font-bold fo">What we do</h4>
                        <ul className="list-decimal list-inside mt-2 text-gray-400 text-[20px] font-light">
                            {activeContent.description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h4 className="text-[32px] font-bold mt-8">What we do</h4>
                        <h4 className="text-gray-400 text-[20px] font-light mt-2">{activeContent.extraInfo}</h4>

                        <div className="flex space-x-4 mt-6">
                            <InputText
                                width={'240px'}
                                placeholder={'Enter work email'}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    console.log(event.target.value);
                                }}
                            />
                            <Button
                                text="Try for free"
                                onClick={() => console.log('Try for free clicked')}
                                width={'179px'}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col h-[614px] w-1/2">
                        <div className="bg-[#F7CB5E] h-[60px] w-full rounded-tl-[22px] rounded-tr-[22px]"></div>
                        <div className="h-[554px] w-auto relative overflow-hidden">
                            <Image
                                src={bgone}
                                alt="Background"
                                width={550}
                                height={500}
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MidCard;