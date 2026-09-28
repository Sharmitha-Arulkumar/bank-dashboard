import React from "react";

export default function CreditCardWidget({
  dark,
  balance,
  holder,
  validThru,
  number,
}) {
  return (
    <div
      className={`rounded-3xl flex flex-col justify-between h-[215px] shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "bg-[#1814F3] text-white border-transparent shadow-md"
          : "bg-white border-[#DFEAF2] text-[#343C6A]"
      }`}
    >
      <div className="p-6 pb-0 flex justify-between items-start">
        <div>
          <p
            className={`text-[10px] font-medium uppercase tracking-wider ${dark ? "text-gray-300" : "text-[#718EBF]"}`}
          >
            Balance
          </p>
          <p className="text-xl font-bold mt-0.5">{balance}</p>
        </div>
        <div
          className={`w-9 h-7 rounded-md relative flex flex-col justify-between p-1 overflow-hidden ${
            dark
              ? "bg-amber-100/90 border border-amber-200/50"
              : "bg-amber-200 border border-amber-300"
          }`}
        >
          {/* Internal Chip Line Grid Patterns */}
          <div className="flex justify-between w-full h-1.5 opacity-60">
            <div className="w-2 h-full border-r border-b border-amber-800/30" />
            <div className="w-2 h-full border-l border-b border-amber-800/30" />
          </div>
          <div className="w-full h-[1px] bg-amber-800/20 absolute top-1/2 left-0" />
          <div className="flex justify-between w-full h-1.5 opacity-60">
            <div className="w-2 h-full border-r border-t border-amber-800/30" />
            <div className="w-2 h-full border-l border-t border-amber-800/30" />
          </div>
          {/* Center core layout */}
          <div className="absolute inset-x-2.5 inset-y-1.5 border border-amber-800/20 rounded-xs bg-amber-100/30" />
        </div>
      </div>

      <div className="p-6 pt-0 flex gap-12 mt-2">
        <div>
          <p
            className={`text-[9px] uppercase tracking-wider ${dark ? "text-gray-400" : "text-[#718EBF]"}`}
          >
            Card Holder
          </p>
          <p className="text-xs font-semibold mt-0.5">{holder}</p>
        </div>
        <div>
          <p
            className={`text-[9px] uppercase tracking-wider ${dark ? "text-gray-400" : "text-[#718EBF]"}`}
          >
            Valid Thru
          </p>
          <p className="text-xs font-semibold mt-0.5">{validThru}</p>
        </div>
      </div>

      <div
        className={`px-6 py-4 flex justify-between items-center ${dark ? "bg-white/10" : "border-t border-[#DFEAF2] bg-[#F5F7FA]"}`}
      >
        <p className="font-mono text-sm lg:text-base tracking-widest">
          {number}
        </p>
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full bg-orange-400/80" />
          <div className="w-5 h-5 rounded-full bg-red-500/80" />
        </div>
      </div>
    </div>
  );
}
