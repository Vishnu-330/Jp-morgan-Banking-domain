import React from 'react';
import { Shield, Clock, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-200">Open an account in minutes.</span>
            </h2>
            <div className="mt-8 flex space-x-6">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-200" />
                <span className="ml-3 text-blue-200">Secure Banking</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-200" />
                <span className="ml-3 text-blue-200">24/7 Support</span>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Mobile banking app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}