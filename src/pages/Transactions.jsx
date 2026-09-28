import React from "react";
import CreditCardWidget from "../components/CreditCardWidget";

export default function Transactions() {
  return (
    <div className="space-y-6 bg-[#F5F7FA] p-1 select-none">
      {/* CARD AND MY EXPENSE ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <div className="xl:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#343C6A]">My Cards</h3>
            <button className="text-sm font-semibold text-[#343C6A] hover:underline cursor-pointer">
              + Add Card
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCardWidget
              dark={true}
              balance="\$5,756"
              holder="Eddy Cusuma"
              validThru="12/22"
              number="3778 **** **** 1234"
            />
            <CreditCardWidget
              dark={false}
              balance="\$5,756"
              holder="Eddy Cusuma"
              validThru="12/22"
              number="3778 **** **** 1234"
            />
          </div>
        </div>

        {/* MY EXPENSE GRAPH */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-[#343C6A]">My Expense</h4>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] h-[215px] flex flex-col justify-between shadow-sm relative">
            {/* Hover Tooltip Value Marker for Highlighted Bar */}
            <div className="absolute top-4 right-[46px] bg-[#343C6A] text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-xs after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#343C6A]">
              $12,500
            </div>

            <div className="flex items-end justify-between h-28 px-3 mt-4">
              {[
                { label: "Aug", val: 35, active: false },
                { label: "Sep", val: 25, active: false },
                { label: "Oct", val: 60, active: false },
                { label: "Nov", val: 40, active: false },
                { label: "Dec", val: 85, active: true }, // Highlighted Active Pillar
                { label: "Jan", val: 30, active: false },
              ].map((bar, idx) => (
                <div
                  key={idx}
                  className="w-6 flex flex-col items-center h-full justify-end group"
                >
                  <div className="w-6 bg-[#EDF1F7] rounded-md h-full relative overflow-hidden">
                    <div
                      className={`absolute bottom-0 w-full rounded-md transition-all duration-300 ${
                        bar.active
                          ? "bg-[#16DBCC]"
                          : "bg-[#E3E9F1] group-hover:bg-[#CBD5E1]"
                      }`}
                      style={{ height: `${bar.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Chart Labels */}
            <div className="flex justify-between text-[11px] text-[#718EBF] font-semibold px-1 mt-1">
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTION TABLE */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#343C6A]">
          Recent Transactions
        </h3>

        <div className="flex gap-6 border-b border-gray-200 text-sm font-bold">
          <span className="text-[#1814F3] border-b-2 border-[#1814F3] pb-2 cursor-pointer">
            All Transactions
          </span>
          <span className="text-[#718EBF] pb-2 cursor-pointer hover:text-slate-800">
            Income
          </span>
          <span className="text-[#718EBF] pb-2 cursor-pointer hover:text-slate-800">
            Expense
          </span>
        </div>

        <div className="bg-white rounded-3xl border border-[#DFEAF2] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs lg:text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E6EFF5] text-[#718EBF] font-bold bg-slate-50/30">
                  <th className="p-4 pl-6 w-12 text-center"></th>{" "}
                  {/* Space for circle icons */}
                  <th className="p-4">Description</th>
                  <th className="p-4">Transaction ID</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Card</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4 text-center pr-6 w-28">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F7FA]">
                {[
                  {
                    desc: "Spotify Subscription",
                    id: "#12548796",
                    type: "Shopping",
                    card: "1234 ****",
                    date: "28 Jan, 12:30 AM",
                    amt: "-\$2,500",
                    isLoss: true,
                  },
                  {
                    desc: "Freepik Sales",
                    id: "#12548796",
                    type: "Transfer",
                    card: "1234 ****",
                    date: "25 Jan, 10:40 PM",
                    amt: "+\$750",
                    isLoss: false,
                  },
                  {
                    desc: "Mobile Service",
                    id: "#12548796",
                    type: "Service",
                    card: "1234 ****",
                    date: "20 Jan, 10:40 PM",
                    amt: "-\$150",
                    isLoss: true,
                  },
                  {
                    desc: "Wilson",
                    id: "#12548796",
                    type: "Transfer",
                    card: "1234 ****",
                    date: "15 Jan, 03:29 PM",
                    amt: "-\$1,050",
                    isLoss: true,
                  },
                  {
                    desc: "Emily",
                    id: "#12548796",
                    type: "Transfer",
                    card: "1234 ****",
                    date: "14 Jan, 10:40 PM",
                    amt: "+\$840",
                    isLoss: false,
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="text-slate-700 hover:bg-slate-50/50 transition-colors font-medium"
                  >
                    <td className="p-4 pl-6 flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          row.isLoss
                            ? "bg-[#FFEBED] text-[#FF4B4A]"
                            : "bg-[#EBF9F1] text-[#41C485]"
                        }`}
                      >
                        {row.isLoss ? "↗" : "↙"}
                      </div>
                      <span className="font-semibold text-slate-800">
                        {row.desc}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">
                      {row.desc}
                    </td>
                    <td className="p-4 text-[#718EBF]">{row.id}</td>
                    <td className="p-4 text-[#718EBF]">{row.type}</td>
                    <td className="p-4 text-[#718EBF]">{row.card}</td>
                    <td className="p-4 text-[#718EBF]">{row.date}</td>
                    <td
                      className={`p-4 font-bold ${row.isLoss ? "text-[#FF4B4A]" : "text-[#41C485]"}`}
                    >
                      {row.amt}
                    </td>
                    <td className="p-4 text-center pr-6">
                      <button className="px-4 py-1.5 border border-[#120FB3] text-[#120FB3] text-xs font-bold rounded-full hover:bg-[#120FB3] hover:text-white transition-colors cursor-pointer">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Footer */}
        <div className="flex justify-end gap-2 text-xs font-semibold text-[#718EBF] pt-2 px-1 select-none">
          <button className="px-2 py-1.5 hover:text-[#1814F3] transition-colors cursor-pointer">
            ⦏ Previous
          </button>
          <button className="w-7 h-7 rounded-lg bg-[#1814F3] text-white flex items-center justify-center shadow-xs">
            1
          </button>
          <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer text-slate-700">
            2
          </button>
          <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer text-slate-700">
            3
          </button>
          <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer text-slate-700">
            4
          </button>
          <button className="px-2 py-1.5 hover:text-[#1814F3] transition-colors cursor-pointer">
            Next ⦎
          </button>
        </div>
      </div>
    </div>
  );
}
