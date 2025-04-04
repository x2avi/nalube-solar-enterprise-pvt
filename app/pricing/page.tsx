"use client";

import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";
import NumberFlow from "@number-flow/react";

const plans = [
  {
    index: 0,
    name: "1KVA",
    monthlyPrice: 180, // Monthly price
    annualPrice: 890, // Annual price
    features: [
      "Mini Fridge, lighting and entertainment",
      "Up to 5 night hours(standard load)",
      "Deposit USD500 & Pay the balance 90 days monthly price",
      "Deposit USD800 & pay the balance once off price",
    ],
    style:
    " rounded-3xl py-10 text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Compact & Efficient: Ideal for small-scale power needs. Safe & Reliable: Overload protection and voltage regulation.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "3.2KVA",
    monthlyPrice: 250, // Monthly price
    annualPrice: 1350, // Annual price
    features: [
      "Refridgerator, 0.75Hp pump, lights & entertainment",
      "Up to 6 night hours (standard load)",
      "Deposit USD800 & Pay the balance 90 days monthly price",
      "Deposit USD1,200 & pay the balance once off price",
    ],
    style:
      " rounded-3xl py-10 text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Medium Capacity: Suitable for larger homes and small businesses. Durable & Cool: Robust build with advanced cooling system.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    monthlyPrice: 0, // Placeholder
    annualPrice: 0, // Placeholder
    features: [
        "Refridgerator, 1Hp pump, lights & entertainment, washing machine & freezer ",
        "Up to 6 night hours (standard load)",
        "Deposit USD1,200 & Pay the balance 90 days monthly price",
        "Deposit USD2,100 & pay the balance once off price",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "High Performance: Perfect for industrial and large-scale applications. Scalable & Protective: Supports expansion with comprehensive protection features.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  const [billPlan, setBillPlan] = useState<"monthly" | "annually">("monthly");

  const toggleBillPlan = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToConsultation={() => {}}
        scrollToMaintenance={() => {}}
        scrollToEnergyStorage={() => {}}
        scrollToServices={() => {}}
      />

      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your plan
        </div>

        {/* Toggle Button */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className="text-base font-medium text-gray-300">Monthly</span>
          <button
            onClick={toggleBillPlan}
            className="relative w-12 h-6 bg-blue-500 rounded-full focus:outline-none shadow-md"
          >
            <span
              className={`absolute inline-block w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform ${
                billPlan === "annually" ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className="text-base font-medium text-gray-300">Once Off</span>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6"
            >
              <div className={plan.style}>
                <div className="text-4xl flex items-center font-medium">
                  {plan.name}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6">
                  {plan.name !== "Enterprise" ? (
                    <NumberFlow
                      value={
                        billPlan === "monthly"
                          ? plan.monthlyPrice
                          : plan.annualPrice
                      }
                      suffix={billPlan === "monthly" ? "/mo" : "/once off"}
                      format={{
                        currency: "USD",
                        style: "currency",
                        currencySign: "standard",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        currencyDisplay: "narrowSymbol",
                      }}
                    />
                  ) : (
                    "Let's Talk!"
                  )}
                </div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      {plan.feature === "Contact Us" ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
