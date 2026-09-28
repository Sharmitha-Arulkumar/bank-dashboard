import React from "react";
import CreditCardWidget from "../components/CreditCardWidget";

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen">
      {/* MY CARDS & RECENT TRANSACTIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Left Side - My Cards (Takes 2 columns) */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#343C6A]">My Cards</h3>
            <button className="text-sm font-semibold text-[#343C6A] hover:underline">
              See All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Recent Transactions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">
            Recent Transaction
          </h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[215px] flex flex-col justify-between overflow-y-auto shadow-xs">
            <div className="space-y-3.5">
              {[
                {
                  title: "Deposit from my Card",
                  date: "28 January 2021",
                  val: "-$850",
                  type: false,
                  icon: "💳",
                  bg: "bg-[#FFF7E5]",
                  text: "text-[#FFBB38]",
                },
                {
                  title: "Deposit Paypal",
                  date: "25 January 2021",
                  val: "+$2,500",
                  type: true,
                  icon: "🪙",
                  bg: "bg-[#E7EDFF]",
                  text: "text-[#396AFF]",
                },
                {
                  title: "Jemi Wilson",
                  date: "21 January 2021",
                  val: "+$5,400",
                  type: true,
                  icon: "👤",
                  bg: "bg-[#E8FAF4]",
                  text: "text-[#16DBCC]",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs lg:text-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-full ${t.bg} ${t.text} flex items-center justify-center text-xl`}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[#232323] text-sm">
                        {t.title}
                      </p>
                      <p className="text-xs text-[#718EBF] mt-0.5">{t.date}</p>
                    </div>
                  </div>
                  <span
                    className={`font-bold text-sm ${t.type ? "text-[#41D433]" : "text-[#FE5C73]"}`}
                  >
                    {t.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WEEKLY ACTIVITY & EXPENSE STATISTICS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Weekly Activity */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">Weekly Activity</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[340px] flex flex-col justify-between shadow-xs">
            <div className="flex justify-end gap-5 text-xs text-[#718EBF] font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16DBCC]" />{" "}
                Deposit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1814F3]" />{" "}
                Withdraw
              </span>
            </div>

            <div className="relative flex-1 flex flex-col justify-between mt-4">
              {/* Horizontal Line Grid Overlay Guides */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-[#718EBF] h-[220px]">
                {["500", "400", "300", "200", "100", "0"].map((label, idx) => (
                  <div key={idx} className="flex items-center w-full">
                    <span className="w-8 text-left">{label}</span>
                    {idx < 5 && (
                      <div className="flex-1 border-b border-[#F3F4F6] border-dashed" />
                    )}
                  </div>
                ))}
              </div>

              {/* Dynamic Pillars Layer Container */}
              <div className="flex justify-between items-end h-[220px] pl-10 pr-4 z-10">
                {[
                  { d: 480, w: 240 },
                  { d: 150, w: 340 },
                  { d: 400, w: 220 },
                  { d: 480, w: 440 },
                  { d: 150, w: 240 },
                  { d: 410, w: 250 },
                  { d: 450, w: 390 },
                ].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1.5 w-10"
                  >
                    <div className="flex gap-1.5 items-end h-[200px]">
                      <div
                        className="w-3 bg-[#16DBCC] rounded-full"
                        style={{ height: `${val.d / 5}%` }}
                      />
                      <div
                        className="w-3 bg-[#1814F3] rounded-full"
                        style={{ height: `${val.w / 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs font-semibold text-[#718EBF] pl-10 pr-4 mt-2">
              {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                <span key={d} className="w-10 text-center">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expense Statistics */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">
            Expense Statistics
          </h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[340px] flex flex-col justify-center items-center shadow-xs">
            <svg className="w-56 h-56 overflow-visible" viewBox="0 0 200 200">
              {/* 30% Entertainment Section */}
              <path d="M 94 90 L 25 50 A 85 85 0 0 1 145 25 Z" fill="#343C6A" />
              <text
                x="94"
                y="46"
                fill="#FFFFFF"
                className="text-[11px] font-bold"
                textAnchor="middle"
              >
                <tspan x="94" dy="0">
                  30%
                </tspan>
                <tspan x="94" dy="12" className="text-[7.5px] font-normal">
                  Entertainment
                </tspan>
              </text>

              {/* 15% Bill Expense Section */}
              <path
                d="M 106 90 L 152 29 A 85 85 0 0 1 185 105 Z"
                fill="#FC7900"
              />
              <text
                x="145"
                y="66"
                fill="#FFFFFF"
                className="text-[11px] font-bold"
                textAnchor="middle"
              >
                <tspan x="145" dy="0">
                  15%
                </tspan>
                <tspan x="145" dy="12" className="text-[7.5px] font-normal">
                  Bill Expense
                </tspan>
              </text>

              {/* 35% Others Section */}
              <path
                d="M 100 106 L 178 106 A 85 85 0 0 1 100 188 Z"
                fill="#1814F3"
              />
              <text
                x="135"
                y="140"
                fill="#FFFFFF"
                className="text-[11px] font-bold"
                textAnchor="middle"
              >
                <tspan x="135" dy="0">
                  35%
                </tspan>
                <tspan x="135" dy="12" className="text-[7.5px] font-normal">
                  Others
                </tspan>
              </text>

              {/* 20% Investment Section */}
              <path
                d="M 94 102 L 94 182 A 85 85 0 0 1 20 62 Z"
                fill="#FF00F5"
              />
              <text
                x="54"
                y="120"
                fill="#FFFFFF"
                className="text-[11px] font-bold"
                textAnchor="middle"
              >
                <tspan x="54" dy="0">
                  20%
                </tspan>
                <tspan x="54" dy="12" className="text-[7.5px] font-normal">
                  Investment
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* QUICK TRANSFER & BALANCE HISTORY */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Quick Transfer */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">Quick Transfer</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[220px] flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-center px-1">
              {[
                {
                  name: "Livia Bator",
                  role: "CEO",
                  initials: "LB",
                  bg: "bg-blue-100 text-blue-600",
                },
                {
                  name: "Randy Press",
                  role: "Director",
                  initials: "RP",
                  bg: "bg-amber-100 text-amber-600",
                },
                {
                  name: "Workman",
                  role: "Designer",
                  initials: "WM",
                  bg: "bg-emerald-100 text-emerald-600",
                },
              ].map((user, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center select-none"
                >
                  {/* FIXED: Replaced brittle external image tags with solid CSS profile avatars */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm tracking-wide border-2 border-white shadow-sm ${user.bg}`}
                  >
                    {user.initials}
                  </div>
                  <p className="text-xs font-bold mt-2 text-slate-800">
                    {user.name}
                  </p>
                  <p className="text-[10px] text-[#718EBF] font-medium mt-0.5">
                    {user.role}
                  </p>
                </div>
              ))}
              <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-slate-400 font-bold border border-gray-100 hover:bg-slate-50 cursor-pointer">
                ➔
              </button>
            </div>

            <div className="flex items-center bg-[#EDF1F7] rounded-full pl-5 pr-1 py-1 mt-2">
              <span className="text-xs text-[#718EBF] whitespace-nowrap font-medium">
                Write Amount
              </span>
              <input
                type="text"
                defaultValue="525.50"
                className="w-full bg-transparent border-none outline-none px-4 text-xs font-bold text-[#1814F3]"
              />
              <button className="bg-[#1814F3] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-blue-800 transition cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>

        {/*  Balance History  */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">Balance History</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[220px] flex flex-col justify-between shadow-xs">
            <div className="w-full h-32 relative flex items-start pl-8 pr-2 pt-2">
              {/* Y Axis Guide Footnotes */}
              <div className="absolute left-0 top-2 bottom-4 flex flex-col justify-between text-[10px] text-[#718EBF] font-normal w-6 text-right select-none">
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>

              <div className="w-full h-full relative">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 600 140"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="balanceAreaGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1814F3"
                        stopOpacity="0.22"
                      />
                      <stop
                        offset="100%"
                        stopColor="#1814F3"
                        stopOpacity="0.00"
                      />
                    </linearGradient>
                  </defs>
                  {[20, 50, 80, 110, 140].map((y, idx) => (
                    <line
                      key={idx}
                      x1="-10"
                      y1={y}
                      x2="610"
                      y2={y}
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  ))}
                  {[15, 110, 210, 305, 402, 500, 595].map((x, idx) => (
                    <line
                      key={idx}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="145"
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  ))}
                  <path
                    d="M 15 120 C 50 40, 75 70, 112 85 C 150 100, 180 30, 210 40 C 240 50, 280 -15, 305 -10 C 335 -5, 375 100, 402 105 C 430 110, 475 25, 500 30 C 525 35, 570 115, 595 20 L 595 140 L 15 140 Z"
                    fill="url(#balanceAreaGrad)"
                  />
                  <path
                    d="M 15 120 C 50 40, 75 70, 112 85 C 150 100, 180 30, 210 40 C 240 50, 280 -15, 305 -10 C 335 -5, 375 100, 402 105 C 430 110, 475 25, 500 30 C 525 35, 570 115, 595 20"
                    fill="none"
                    stroke="#1814F3"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between text-[11px] font-semibold text-[#718EBF] pl-10 pr-2 select-none">
              {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((m) => (
                <span
                  key={m}
                  className="hover:text-[#1814F3] transition-colors cursor-pointer"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
