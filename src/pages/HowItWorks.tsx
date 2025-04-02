import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, CreditCard, Star, Heart, Users, Trophy } from 'lucide-react';
import HowItWorksHero from '../components/how-it-works/HowItWorksHero';
import HowItWorksSteps from '../components/how-it-works/HowItWorksSteps';
import CommunityBenefits from '../components/how-it-works/CommunityBenefits';
import CallToAction from '../components/how-it-works/CallToAction';

export default function HowItWorks() {
  return (
    <div className="pt-16">
      <HowItWorksHero />
      <HowItWorksSteps />
      <CommunityBenefits />
      <CallToAction />
    </div>
  );
}