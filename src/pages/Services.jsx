import React from "react";

export default function Services() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen select-none">
      {/* ================= ROW 1: TOP HIGHLIGHT CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Life Insurance",
            text: "Unlimited protection",
            icon: "🛡️",
            bg: "bg-[#EAEEF9]",
            iconColor: "text-[#396AFF]",
          },
          {
            label: "Shopping",
            text: "Buy. Think. Grow.",
            icon: "🛍️",
            bg: "bg-[#FFF7E5]",
            iconColor: "text-[#FFBB38]",
          },
          {
            label: "Safety",
            text: "We are your allies",
            icon: "🔒",
            bg: "bg-[#E8FAF4]",
            iconColor: "text-[#16DBCC]",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-[#DFEAF2] flex items-center gap-5 shadow-xs"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${item.bg} ${item.iconColor} flex items-center justify-center text-xl shrink-0`}
            >
              {item.icon}
            </div>
            <div>
              <h4 className="text-base font-bold text-[#343C6A]">
                {item.label}
              </h4>
              <p className="text-xs text-[#718EBF] mt-1 font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= ROW 2: BANK SERVICES PIPELINE ROWS ================= */}
      <div className="space-y-4">
        {/* Title cleanly rendered completely outside the inner white panel layout */}
        <h3 className="text-lg font-bold text-[#343C6A]">Bank Services List</h3>

        <div className="space-y-3.5">
          {[
            {
              title: "Business loans",
              sub: "It is a long established fact",
              icon: "💰",
              bg: "bg-[#FFEBED]",
              text: "text-[#FF4B4A]",
            },
            {
              title: "Checking accounts",
              sub: "It is a long established fact",
              icon: "💼",
              bg: "bg-[#FFF7E5]",
              text: "text-[#FFBB38]",
            },
            {
              title: "Savings accounts",
              sub: "It is a long established fact",
              icon: "📈",
              bg: "bg-[#FFE5EE]",
              text: "text-[#FF82AC]",
            },
            {
              title: "Debit and credit cards",
              sub: "It is a long established fact",
              icon: "👤",
              bg: "bg-[#E7EDFF]",
              text: "text-[#396AFF]",
            },
            {
              title: "Life Insurance",
              sub: "It is a long established fact",
              icon: "🛡️",
              bg: "bg-[#E8FAF4]",
              text: "text-[#16DBCC]",
            },
            {
              title: "Business loans",
              sub: "It is a long established fact",
              icon: "💰",
              bg: "bg-[#FFEBED]",
              text: "text-[#FF4B4A]",
            },
          ].map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-4 px-6 rounded-2xl border border-[#DFEAF2] flex items-center justify-between gap-6 text-xs lg:text-sm shadow-xs min-h-[75px] transition-all hover:border-[#1814F3]/20"
            >
              {/* Primary Identity Segment Column */}
              <div className="flex items-center gap-4 min-w-[240px]">
                <div
                  className={`w-10 h-10 ${srv.bg} ${srv.text} rounded-xl flex items-center justify-center text-lg shrink-0`}
                >
                  {srv.icon}
                </div>
                <div>
                  <p className="font-bold text-[#343C6A] text-sm md:text-base">
                    {srv.title}
                  </p>
                  <p className="text-xs text-[#718EBF] font-medium mt-0.5">
                    {srv.sub}
                  </p>
                </div>
              </div>

              {/* Repeating Informational Columns Mapping Exact Mock Spec Layout */}
              <div className="hidden lg:block min-w-[120px]">
                <p className="font-bold text-[#343C6A] text-sm">Lorem Ipsum</p>
                <p className="text-[11px] text-[#718EBF] font-medium mt-0.5">
                  Many publishing
                </p>
              </div>

              <div className="hidden md:block min-w-[120px]">
                <p className="font-bold text-[#343C6A] text-sm">Lorem Ipsum</p>
                <p className="text-[11px] text-[#718EBF] font-medium mt-0.5">
                  Many publishing
                </p>
              </div>

              <div className="hidden sm:block min-w-[120px]">
                <p className="font-bold text-[#343C6A] text-sm">Lorem Ipsum</p>
                <p className="text-[11px] text-[#718EBF] font-medium mt-0.5">
                  Many publishing
                </p>
              </div>

              {/* Action Details Button Grid Column */}
              <div className="pr-1">
                <button
                  className={`px-5 py-2 border rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    idx === 2
                      ? "border-[#1814F3] text-[#1814F3] hover:bg-[#1814F3] hover:text-white" // Accent visual focus item row match
                      : "border-[#718EBF] text-[#718EBF] hover:border-[#343C6A] hover:text-[#343C6A]"
                  }`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
