"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function MembershipStep({ formData, handleInputChange }) {
  const plans = [
    {
      id: "free",
      name: "Basic",
      price: "$9.99",
      period: "Month",
      features: [
        "3 months of matchmaking services",
        "1 potential match per month",
        "Basic profile review and matching",
      ],
      highlighted: false,
    },
    {
      id: "premium",
      name: "Standard",
      price: "$12.99",
      period: "Month",
      features: [
        "6 months of matchmaking services",
        "2 potential matches per month",
        "Advanced profile review & matching",
        "Personalized matchmaker",
        "Consultations",
      ],
      highlighted: true,
    },
    {
      id: "vip",
      name: "Platinum",
      price: "$19.99",
      period: "Month",
      features: [
        "12 months of matchmaking services",
        "3 potential matches per month",
        "Comprehensive profile review",
        "Priority matchmaker",
        "Exclusive access to high-end events",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2
          className="text-4xl mb-2 text-[#566737]"
          style={{ fontFamily: "Juana-Light" }}
        >
          Upgrade to Unlock Premium Features
        </h2>
        <p className="text-muted-foreground">Choose a package to get started</p>
      </div>
      <div className="flex gap-4 justify-center mb-8">
        {["1 month", "3 months", "Annual"].map((period) => (
          <button
            key={period}
            className="px-6 py-2 rounded-full border-2 border-[#424034]  hover:border-primary text-foreground font-medium transition-all"
          >
            {period}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-6 transition-all ${
              plan.highlighted
                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                : "bg-transparent border-[#424034]  hover:border-primary"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                plan.highlighted ? "text-primary-foreground" : "text-primary"
              }`}
            >
              {plan.name}
            </h3>
            <div className="mb-6">
              <span
                className={`text-3xl font-bold ${
                  plan.highlighted
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`text-sm ml-2 ${
                  plan.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                / {plan.period}
              </span>
            </div>

            <ul
              className={`space-y-3 mb-6 ${
                plan.highlighted ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-lg">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() =>
                handleInputChange({
                  target: { name: "membership_type", value: plan.id },
                })
              }
              className={`w-full font-semibold ${
                plan.highlighted
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {formData.membership_type === plan.id
                ? "✓ Selected"
                : "Select Plan"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
