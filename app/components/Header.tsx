'use client'
import { useRouter } from 'next/navigation'
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import Wrapper from './Wrapper';

const Header: React.FC = () => {
    const router = useRouter()
    const handleClick = () => {

        alert('Button clicked!');
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
            <Wrapper>
                <div className="flex justify-between items-center h-[104px]">
                    <Image src={logo} alt="Smart Match Logo" width={250} height={50} />
                    <div className="flex space-x-2">
                        <Button 
                            width="250px" 
                            text="For recruitment agencies" 
                            onClick={handleClick} 
                        />
                        <Button 
                            width="150px" 
                            text="For job seekers" 
                            onClick={() => router.push('/jobs')}
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Header;