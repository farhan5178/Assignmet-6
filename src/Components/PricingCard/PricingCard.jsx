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
    <div className="my-10 md:my-16 px-4 sm:px-8 md:px-16 lg:px-24">
      
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 md:p-8 border transition-all duration-300
              ${plan.popular
                ? "bg-gradient-to-b from-purple-600 to-indigo-600 text-white md:scale-105 shadow-2xl z-10"
                : "bg-white hover:shadow-xl border-gray-100"}
            `}
          >

            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <h2 className="text-xl md:text-2xl font-bold">{plan.name}</h2>
            <p className={`text-sm mt-1 ${plan.popular ? "text-purple-100" : "text-gray-500"}`}>
              {plan.desc}
            </p>

            <div className="my-6 md:my-8">
              <span className="text-4xl md:text-5xl font-bold">
                ${plan.price}
              </span>
              <span className="text-sm ml-1 opacity-80">/Month</span>
            </div>

            <ul className="space-y-4 text-sm md:text-base">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`${plan.popular ? "text-orange-300" : "text-green-500"} font-bold`}>
                    ✔
                  </span> 
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 md:mt-10 w-full py-3 rounded-full font-bold transition-all
                ${plan.popular
                  ? "bg-white text-purple-700 hover:bg-gray-100"
                  : "bg-linear-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg"}
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