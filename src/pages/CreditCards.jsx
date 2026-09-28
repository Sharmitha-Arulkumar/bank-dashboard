import React from "react";
import CreditCardWidget from "../components/CreditCardWidget";

export default function CreditCards() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen select-none">
      {/* MY CARDS AREA */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#343C6A]">My Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CreditCardWidget
            dark={true}
            balance="$5,756"
            holder="Eddy Cusuma"
            validThru="12/22"
            number="3778 **** **** 1234"
          />
          <CreditCardWidget
            dark={true}
            balance="$5,756"
            holder="Eddy Cusuma"
            validThru="12/22"
            number="3778 **** **** 1234"
          />
          <CreditCardWidget
            dark={false}
            balance="$5,756"
            holder="Eddy Cusuma"
            validThru="12/22"
            number="3778 **** **** 1234"
          />
        </div>
      </div>
      {/* EXPENSE STATISTICS & CARD LIST */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Card Expense Statistics */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-[#343C6A]">
            Card Expense Statistics
          </h4>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[320px] flex flex-col justify-between shadow-xs">
            {/* Donut Chart */}
            <div className="flex items-center justify-center relative flex-1 h-44 overflow-visible">
              <svg className="w-40 h-40 overflow-visible" viewBox="0 0 200 200">
                {/* 1. DBL Bank (Blue) - Top Left Quadrant */}
                <path
                  d="M 100 100 L 30 100 A 70 70 0 0 1 100 30 Z"
                  fill="#396AFF"
                />

                {/* 2. ABM Bank (Cyan) - Top Right Quadrant (Most Exploded Outer Vector) */}
                <path
                  d="M 100 100 L 100 12 A 88 88 0 0 1 188 100 Z"
                  fill="#16DBCC"
                />

                {/* 3. BRC Bank (Pink) - Bottom Right Quadrant (Narrow Thickness Ring) */}
                <path
                  d="M 100 100 L 158 100 A 58 58 0 0 1 100 158 Z"
                  fill="#FF82AC"
                />

                {/* 4. MCP Bank (Yellow) - Bottom Left Quadrant */}
                <path
                  d="M 100 100 L 100 178 A 78 78 0 0 1 22 100 Z"
                  fill="#FFBB38"
                />

                {/* Circular Inner Mask to form the Donut geometry architecture */}
                <circle cx="100" cy="100" r="32" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Legend Matrix Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-[#718EBF] font-semibold px-4 pb-2">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#396AFF]" /> DBL Bank
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF82AC]" /> BRC Bank
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#16DBCC]" /> ABM Bank
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFBB38]" /> MCP Bank
              </span>
            </div>
          </div>
        </div>

        {/* Card List */}
        <div className="xl:col-span-2 space-y-4 h-[368px] flex flex-col justify-between">
          <h4 className="font-bold text-lg text-[#343C6A]">Card List</h4>

          <div className="flex-1 flex flex-col justify-between">
            {[
              {
                type: "Secondary",
                bank: "DBL Bank",
                num: "**** **** 5600",
                name: "William",
                bg: "bg-[#E7EDFF]",
                text: "text-[#396AFF]",
              },
              {
                type: "Secondary",
                bank: "BRC Bank",
                num: "**** **** 4300",
                name: "Michel",
                bg: "bg-[#FFEBED]",
                text: "text-[#FF4B4A]",
              },
              {
                type: "Secondary",
                bank: "ABM Bank",
                num: "**** **** 7560",
                name: "Edward",
                bg: "bg-[#FFF7E5]",
                text: "text-[#FFBB38]",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 border border-[#DFEAF2] flex items-center justify-between text-xs lg:text-sm shadow-xs h-[82px] transition-all hover:border-[#396AFF]/20"
              >
                {/* Credit Card Microchip */}
                <div className="flex items-center gap-4 min-w-[140px]">
                  <div
                    className={`w-11 h-11 ${card.bg} ${card.text} rounded-xl flex flex-col justify-between p-2.5 shrink-0`}
                  >
                    <div className="flex justify-between w-full opacity-80">
                      <div className="w-1.5 h-1 rounded-xs bg-current" />
                      <div className="w-1.5 h-1 rounded-xs bg-current" />
                    </div>
                    <div className="w-full h-1 bg-current opacity-40 rounded-xs my-0.5" />
                    <div className="flex justify-between w-full opacity-80">
                      <div className="w-1 h-1 rounded-xs bg-current" />
                      <div className="w-2 h-1 rounded-xs bg-current" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#718EBF] font-medium text-[11px]">
                      Card Type
                    </p>
                    <p className="font-bold text-[#343C6A] text-xs mt-0.5">
                      {card.type}
                    </p>
                  </div>
                </div>

                {/* Bank Info */}
                <div className="min-w-[80px]">
                  <p className="text-[#718EBF] font-medium text-[11px]">Bank</p>
                  <p className="font-bold text-[#343C6A] text-xs mt-0.5">
                    {card.bank}
                  </p>
                </div>

                {/* Card Number Column */}
                <div className="hidden sm:block min-w-[120px]">
                  <p className="text-[#718EBF] font-medium text-[11px]">
                    Card Number
                  </p>
                  <p className="font-mono font-bold text-[#343C6A] text-xs mt-0.5">
                    {card.num}
                  </p>
                </div>

                {/* Namain Card Column */}
                <div className="min-w-[90px]">
                  <p className="text-[#718EBF] font-medium text-[11px]">
                    Namain Card
                  </p>
                  <p className="font-bold text-[#343C6A] text-xs mt-0.5">
                    {card.name}
                  </p>
                </div>

                {/* Action trigger hook */}
                <div className="pr-2">
                  <button className="text-xs font-bold text-[#1814F3] hover:text-blue-800 hover:underline cursor-pointer transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ADD NEW CARD & CARD SETTINGS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start pt-2">
        {/* Add New Card Container */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="font-bold text-lg text-[#343C6A]">Add New Card</h3>
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#DFEAF2] shadow-xs h-[380px] flex flex-col justify-between">
            <p className="text-xs text-[#718EBF] leading-relaxed max-w-2xl font-medium">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 flex-1 mt-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-[#343C6A] font-semibold mb-1.5 text-xs">
                  Card Type
                </label>
                <input
                  type="text"
                  placeholder="Classic"
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-2.5 outline-none text-slate-700 text-xs focus:border-[#1814F3] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#343C6A] font-semibold mb-1.5 text-xs">
                  Name On Card
                </label>
                <input
                  type="text"
                  placeholder="My Cards"
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-2.5 outline-none text-slate-700 text-xs focus:border-[#1814F3] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#343C6A] font-semibold mb-1.5 text-xs">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="**** **** **** ****"
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-2.5 outline-none text-slate-700 text-xs focus:border-[#1814F3] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#343C6A] font-semibold mb-1.5 text-xs">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="25 January 2025"
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-2.5 outline-none text-slate-700 text-xs focus:border-[#1814F3] bg-white transition-colors"
                />
              </div>
              <div className="md:col-span-2 mt-auto">
                <button className="bg-[#1814F3] text-white text-xs font-bold px-10 py-3.5 rounded-xl shadow-xs transition-all hover:bg-blue-800 cursor-pointer">
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Card Settings */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-[#343C6A]">Card Setting</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] shadow-xs h-[380px] flex flex-col justify-between py-4">
            <div className="flex-1 flex flex-col justify-between py-1">
              {[
                {
                  title: "Block Card",
                  desc: "Instantly block your card",
                  icon: "🔒",
                  bg: "bg-[#FFF7E5]",
                  txt: "text-[#FFBB38]",
                },
                {
                  title: "Change Pin Code",
                  desc: "Withdraw without any card",
                  icon: "🔑",
                  bg: "bg-[#E7EDFF]",
                  txt: "text-[#396AFF]",
                },
                {
                  title: "Add to Google Pay",
                  desc: "Withdraw without any card",
                  icon: "🤖",
                  bg: "bg-[#FFEBED]",
                  txt: "text-[#FF4B4A]",
                },
                {
                  title: "Add to Apple Pay",
                  desc: "Withdraw without any card",
                  icon: "🍏",
                  bg: "bg-[#E8FAF4]",
                  txt: "text-[#16DBCC]",
                },
                {
                  title: "Add to Apple Store",
                  desc: "Withdraw without any card",
                  icon: "🏪",
                  bg: "bg-[#EAF9FF]",
                  txt: "text-[#00B2FF]",
                },
              ].map((setting, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-1 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent"
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${setting.bg} ${setting.txt} flex items-center justify-center text-base shrink-0`}
                  >
                    {setting.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#343C6A]">
                      {setting.title}
                    </p>
                    <p className="text-[10px] text-[#718EBF] font-medium mt-0.5">
                      {setting.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
