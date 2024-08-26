import React from 'react';
import CandidateSearchForm from '../../components/CandidateSearchForm';
import FeatureCard from '../../components/FeatureCard';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';

const Homepage: React.FC = () => {
    return (
        <div className="bg-white">
            <Header />
            
            {/* Add padding-top to account for the fixed header */}
            <div className="pt-[104px]"> {/* This should match the height of your header */}
                <HeroSection />

                <section className="bg-green-100 py-16">
                    <CandidateSearchForm />
                </section>

                <section className="bg-black text-white py-16">
                    <h2 className="text-center text-3xl font-bold">What do we do?</h2>
                    <p className="text-center mt-4">We help companies hire talent with ready references.</p>
                    <div className="flex justify-center mt-8">
                        <FeatureCard title="Sourcing on auto-pilot" />
                        <FeatureCard title="Outreach copilot" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Homepage;