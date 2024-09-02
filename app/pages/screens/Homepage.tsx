import React from "react";
import CandidateSearchForm from "../../components/CandidateSearchForm";
import FeatureCard from "../../components/FeatureCard";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import MidCard from "./components/MidCard";
import EmailCardSection from "./components/EmailCardSection";
import SendMessageCard from "./components/SendMessageCard";
import SubscribeSection from "./components/SubscribeSection";
import StartJoinCard from "./components/StartJoinCard";
import Footer from "@/app/components/Footer";

const Homepage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="pt-[104px]">
        {" "}
        <HeroSection />
        <CandidateSearchForm />
        <MidCard />
        <EmailCardSection />
        <SendMessageCard />
        <SubscribeSection />
        <StartJoinCard />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
