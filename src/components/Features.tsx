import React from 'react';
import { CreditCard, Smartphone, PiggyBank, LineChart } from 'lucide-react';

const features = [
  {
    name: 'Digital Banking',
    description: 'Access your accounts anytime, anywhere with our secure mobile and online banking platforms.',
    icon: Smartphone,
  },
  {
    name: 'Credit Cards',
    description: 'Choose from our premium selection of credit cards with rewards, cash back, and travel benefits.',
    icon: CreditCard,
  },
  {
    name: 'Savings & CDs',
    description: 'Grow your money with competitive rates on savings accounts and certificates of deposit.',
    icon: PiggyBank,
  },
  {
    name: 'Investment Solutions',
    description: 'Build your portfolio with expert guidance and diverse investment options.',
    icon: LineChart,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Banking Made Simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover our comprehensive suite of financial solutions designed to meet your needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}