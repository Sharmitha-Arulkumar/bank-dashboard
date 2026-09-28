import React from "react";

export default function Loans() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen select-none">
      {/* METRICS DISPLAY GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {[
          {
            title: "Personal Loans",
            val: "\$50,000",
            icon: "👤",
            bg: "bg-[#E7EDFF]",
            text: "text-[#396AFF]",
          },
          {
            title: "Corporate Loans",
            val: "\$100,000",
            icon: "💼",
            bg: "bg-[#FFF7E5]",
            text: "text-[#FFBB38]",
          },
          {
            title: "Business Loans",
            val: "\$500,000",
            icon: "📊",
            bg: "bg-[#FFEBED]",
            text: "text-[#FF4B4A]",
          },
          {
            title: "Custom Loans",
            val: "Choose Money",
            icon: "🛠️",
            bg: "bg-[#E8FAF4]",
            text: "text-[#16DBCC]",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-[#DFEAF2] flex items-center gap-4 shadow-xs"
          >
            <div
              className={`w-11 h-11 rounded-full ${item.bg} ${item.text} flex items-center justify-center text-lg shrink-0`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-[#718EBF] font-semibold">
                {item.title}
              </p>
              <p className="text-base font-bold mt-0.5 text-[#343C6A]">
                {item.val}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ACTIVE LOANS TABLE */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#343C6A]">
          Active Loans Overview
        </h3>

        <div className="bg-white rounded-3xl border border-[#DFEAF2] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-[#E6EFF5] text-[#718EBF] font-bold bg-slate-50/30">
                  <th className="p-4 pl-6">SL No</th>
                  <th className="p-4">Loan Money</th>
                  <th className="p-4">Left to repay</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Interest rate</th>
                  <th className="p-4">Installment</th>
                  <th className="p-4 text-center pr-6 w-24">Repay</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium">
                {[
                  {
                    no: "01.",
                    mny: "\$100,000",
                    left: "\$40,500",
                    dur: "8 Months",
                    rate: "12%",
                    inst: "\$2,000 / month",
                  },
                  {
                    no: "02.",
                    mny: "\$500,000",
                    left: "\$250,000",
                    dur: "36 Months",
                    rate: "10%",
                    inst: "\$8,000 / month",
                  },
                  {
                    no: "03.",
                    mny: "\$900,000",
                    left: "\$40,500",
                    dur: "12 Months",
                    rate: "12%",
                    inst: "\$5,000 / month",
                  },
                  {
                    no: "04.",
                    mny: "\$50,000",
                    left: "\$40,500",
                    dur: "25 Months",
                    rate: "5%",
                    inst: "\$2,000 / month",
                  },
                  {
                    no: "05.",
                    mny: "\$50,000",
                    left: "\$40,500",
                    dur: "5 Months",
                    rate: "16%",
                    inst: "\$10,000 / month",
                  },
                  {
                    no: "06.",
                    mny: "\$80,000",
                    left: "\$25,500",
                    dur: "14 Months",
                    rate: "8%",
                    inst: "\$2,000 / month",
                  },
                  {
                    no: "07.",
                    mny: "\$12,000",
                    left: "\$5,500",
                    dur: "9 Months",
                    rate: "13%",
                    inst: "\$500 / month",
                  },
                  {
                    no: "08.",
                    mny: "\$160,000",
                    left: "\$100,800",
                    dur: "3 Months",
                    rate: "12%",
                    inst: "\$900 / month",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#F4F7FA] hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-4 pl-6 text-[#718EBF] font-semibold">
                      {row.no}
                    </td>
                    <td className="p-4 font-bold text-slate-800">{row.mny}</td>
                    <td className="p-4 text-slate-700">{row.left}</td>
                    <td className="p-4 text-[#718EBF] font-semibold">
                      {row.dur}
                    </td>
                    <td className="p-4 text-[#718EBF] font-semibold">
                      {row.rate}
                    </td>
                    <td className="p-4 font-semibold text-slate-700">
                      {row.inst}
                    </td>
                    <td className="p-4 text-center pr-6">
                      <button className="border border-[#1814F3] text-[#1814F3] text-xs font-bold px-5 py-1.5 rounded-full hover:bg-[#1814F3] hover:text-white cursor-pointer transition-all whitespace-nowrap">
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}

                {/* FOOTER TOTAL ROW */}
                <tr className="text-[#FF4B4A] font-bold bg-slate-50/20">
                  <td className="p-4 pl-6 font-extrabold">Total</td>
                  <td className="p-4 font-extrabold">$125,0000</td>
                  <td className="p-4 font-extrabold">$750,000</td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4 font-extrabold">$50,000 / month</td>
                  <td className="p-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
