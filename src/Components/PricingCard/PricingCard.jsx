

const plans = [
  {
    name: "Starter",
    price: 0,
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    button: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: 29,
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    button: "Start Pro Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: 99,
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    button: "Contact Sales",
    popular: false
  }
];

const PricingCard = () => {
  return (
    <div className="my-16 mx-25">
      
     
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl p-6 border shadow-sm transition-all duration-300
              ${plan.popular
                ? "bg-gradient-to-b from-purple-600 to-indigo-600 text-white scale-105 shadow-2xl"
                : "bg-white hover:shadow-xl"}
            `}
          >

            
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}

            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-sm opacity-80">{plan.desc}</p>

           
            <div className="my-6">
              <span className="text-4xl font-bold">
                ${plan.price}
              </span>
              <span className="text-sm">/Month</span>
            </div>

            
            <ul className="space-y-2 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✔ {f}
                </li>
              ))}
            </ul>

         
            <button
              className={`mt-6 w-full py-2 rounded-full font-medium transition
                ${plan.popular
                  ? "bg-white text-purple-700"
                  : "bg-linear-to-r from-blue-500 to-purple-600 text-white"}
              `}
            >
              {plan.button}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PricingCard;