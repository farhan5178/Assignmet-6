import React from 'react';
import User from './../../assets/products/user.png';
import Package from './../../assets/products/package.png';
import Rocket from './../../assets/products/rocket.png';

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: User
  },
  {
    id: 2,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: Package
  },
  {
    id: 3,
    title: "Start Using",
    desc: "Download and start using your premium tools immediately..",
    img: Rocket
  }
];

const Cart2 = () => {
  return (
    <div className='text-center space-y-10 mx-25 py-4 mt-28'>

      {/* Heading */}
      <div>
        <h1 className='text-3xl font-bold'>Get Started in 3 Steps</h1>
        <p className='text-gray-500'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

      {steps.map(step => (
  <div
    key={step.id}
    className='relative flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300'
  >

    <div className='absolute top-3 right-3 bg-linear-to-r from-blue-500 to-purple-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold'>
      {step.id}
    </div>

    <img src={step.img} alt="" className='w-20' />

    <h2 className='text-xl font-semibold'>{step.title}</h2>

    <p className='text-gray-500 max-w-xs'>
      {step.desc}
    </p>

  </div>
))}

      </div>

    </div>
  );
};

export default Cart2;