import React from "react";
import CreditCardWidget from "../components/CreditCardWidget";

export default function Accounts() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen select-none">
      {/* METRICS DISPLAY GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          {
            text: "My Balance",
            val: "\$12,750",
            icon: "🪙",
            bg: "bg-[#FFF7E5]",
            iconColor: "text-[#FFBB38]",
          },
          {
            text: "Income",
            val: "\$5,600",
            icon: "📈",
            bg: "bg-[#E7EDFF]",
            iconColor: "text-[#396AFF]",
          },
          {
            text: "Expense",
            val: "\$3,460",
            icon: "📉",
            bg: "bg-[#FFEBED]",
            iconColor: "text-[#FF4B4A]",
          },
          {
            text: "Total Saving",
            val: "\$7,920",
            icon: "🛡️",
            bg: "bg-[#E8FAF4]",
            iconColor: "text-[#16DBCC]",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-[#DFEAF2] flex items-center gap-4 shadow-xs"
          >
            <div
              className={`w-12 h-12 rounded-full ${item.bg} ${item.iconColor} flex items-center justify-center text-xl`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-[#718EBF] font-semibold">
                {item.text}
              </p>
              <p className="text-lg lg:text-xl font-bold mt-0.5 text-[#343C6A]">
                {item.val}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LAST TRANSACTION & MY CARD */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Last Transaction */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">Last Transaction</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] space-y-4 shadow-xs min-h-[215px] flex flex-col justify-between">
            {[
              {
                title: "Spotify Subscription",
                date: "25 Jan 2021",
                cat: "Shopping",
                card: "1234 ****",
                state: "Pending",
                val: "-\$150",
                neg: true,
                icon: "🎮",
                bg: "bg-[#E8FAF4]",
                text: "text-[#16DBCC]",
              },
              {
                title: "Mobile Service",
                date: "25 Jan 2021",
                cat: "Service",
                card: "1234 ****",
                state: "Completed",
                val: "-\$340",
                neg: true,
                icon: "📱",
                bg: "bg-[#E7EDFF]",
                text: "text-[#396AFF]",
              },
              {
                title: "Emily Wilson",
                date: "25 Jan 2021",
                cat: "Transfer",
                card: "1234 ****",
                state: "Completed",
                val: "+\$780",
                neg: false,
                icon: "👤",
                bg: "bg-[#FFEBED]",
                text: "text-[#FF4B4A]",
              },
            ].map((tx, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs lg:text-sm pb-1 last:pb-0"
              >
                <div className="flex items-center gap-3.5 min-w-[220px]">
                  <div
                    className={`w-10 h-10 ${tx.bg} ${tx.text} rounded-full flex items-center justify-center text-base shrink-0`}
                  >
                    {tx.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#232323] text-sm">
                      {tx.title}
                    </p>
                    <p className="text-xs text-[#718EBF] mt-0.5 font-medium">
                      {tx.date}
                    </p>
                  </div>
                </div>
                <span className="text-[#718EBF] font-semibold text-xs min-w-[80px] text-left hidden sm:inline">
                  {tx.cat}
                </span>
                <span className="text-[#718EBF] font-semibold text-xs min-w-[80px] text-left hidden md:inline">
                  {tx.card}
                </span>
                <span className="font-semibold text-slate-600 min-w-[80px] text-left hidden sm:inline">
                  {tx.state}
                </span>
                <span
                  className={`font-bold text-sm text-right min-w-[60px] ${tx.neg ? "text-[#FE5C73]" : "text-[#41D433]"}`}
                >
                  {tx.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Credit Card */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#343C6A]">My Card</h3>
            <button className="text-sm font-bold text-[#343C6A] hover:underline cursor-pointer">
              See All
            </button>
          </div>
          <CreditCardWidget
            dark={true}
            balance="\$5,756"
            holder="Eddy Cusuma"
            validThru="12/22"
            number="3778 **** **** 1234"
          />
        </div>
      </div>

      {/* DEBIT & CREDIT OVERVIEW & INVOICES SENT */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Debit & Credit Overview */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">
            Debit & Credit Overview
          </h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[340px] flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-[#718EBF] font-medium">
                \$7,560 Debited & \$5,420 Credited in this Week
              </span>
              <div className="flex gap-5">
                <span className="flex items-center gap-2 text-[#718EBF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1814F3]" />{" "}
                  Debit
                </span>
                <span className="flex items-center gap-2 text-[#718EBF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FC7900]" />{" "}
                  Credit
                </span>
              </div>
            </div>

            {/* Vertical Chart */}
            <div className="relative flex-1 flex flex-col justify-between mt-6">
              {/* Graphical Double Pillar */}
              <div className="flex justify-between items-end h-[200px] pl-4 pr-4 z-10 border-b border-gray-100 pb-1">
                {[
                  { d: 50, c: 90 }, // Sat
                  { d: 30, c: 70 }, // Sun
                  { d: 25, c: 45 }, // Mon
                  { d: 85, c: 35 }, // Tue
                  { d: 45, c: 80 }, // Wed
                  { d: 60, c: 20 }, // Thu
                  { d: 75, c: 85 }, // Fri
                ].map((bar, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1.5 w-12"
                  >
                    <div className="flex gap-2 items-end h-[180px] w-full justify-center">
                      <div
                        className="w-3.5 bg-[#1814F3] rounded-md transition-all duration-300"
                        style={{ height: `${bar.d}%` }}
                      />
                      <div
                        className="w-3.5 bg-[#FC7900] rounded-md transition-all duration-300"
                        style={{ height: `${bar.c}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* X-Axis Month Grid Footer Labels */}
            <div className="flex justify-between text-xs font-semibold text-[#718EBF] pl-4 pr-4 mt-2">
              {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((m) => (
                <span key={m} className="w-12 text-center">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Invoices Sent */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#343C6A]">Invoices Sent</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[340px] flex flex-col justify-between shadow-xs">
            <div className="space-y-4 overflow-y-auto pr-1">
              {[
                {
                  name: "Apple Store",
                  cat: "5h ago",
                  amt: "\$450",
                  avatar: "🍏",
                  bg: "bg-[#E8FAF4]",
                  text: "text-[#16DBCC]",
                },
                {
                  name: "Michael",
                  cat: "2 days ago",
                  amt: "\$160",
                  avatar: "🧑",
                  bg: "bg-[#FFF7E5]",
                  text: "text-[#FFBB38]",
                },
                {
                  name: "Playstation",
                  cat: "5 days ago",
                  amt: "\$1085",
                  avatar: "🎮",
                  bg: "bg-[#E7EDFF]",
                  text: "text-[#396AFF]",
                },
                {
                  name: "William",
                  cat: "10 days ago",
                  amt: "\$90",
                  avatar: "👩",
                  bg: "bg-[#FFEBED]",
                  text: "text-[#FF4B4A]",
                },
              ].map((inv, index) => (
                <div
                  index={index}
                  key={index}
                  className="flex items-center justify-between text-sm py-0.5"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-full ${inv.bg} ${inv.text} flex items-center justify-center text-xl shrink-0 border border-slate-50`}
                    >
                      {inv.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#232323] text-sm">
                        {inv.name}
                      </p>
                      <p className="text-[11px] text-[#718EBF] mt-0.5 font-medium">
                        {inv.cat}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#718EBF] text-sm">
                      {inv.amt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
