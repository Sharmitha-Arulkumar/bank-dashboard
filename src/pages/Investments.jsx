import React from "react";

export default function Investments() {
  return (
    <div className="p-6 lg:p-8 space-y-6 bg-[#F5F7FA] min-h-screen select-none">
      {/* METRICS DISPLAy GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Total Invested Amount",
            val: "$150,000",
            icon: "💰",
            bg: "bg-[#DCFAF8]",
            iconColor: "text-[#16DBCC]",
          },
          {
            label: "Number of Investments",
            val: "1,250",
            icon: "🔄",
            bg: "bg-[#FFE5EE]",
            iconColor: "text-[#FF82AC]",
          },
          {
            label: "Rate of Return",
            val: "+5.80%",
            icon: "📈",
            bg: "bg-[#E7EDFF]",
            iconColor: "text-[#396AFF]",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-[#DFEAF2] flex items-center gap-4 shadow-xs"
          >
            <div
              className={`w-12 h-12 rounded-full ${card.bg} ${card.iconColor} flex items-center justify-center text-xl shrink-0`}
            >
              {card.icon}
            </div>
            <div>
              <p className="text-xs text-[#718EBF] font-medium">{card.label}</p>
              <p className="text-xl font-bold mt-0.5 text-[#343C6A]">
                {card.val}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LINE CHART CONFIGURATION FRAME BLOCKS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yearly Total Investment Chart */}
        <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] shadow-xs h-[300px] flex flex-col justify-between">
          <h4 className="font-bold text-base text-[#343C6A]">
            Yearly Total Investment
          </h4>
          <div className="relative w-full h-48 mt-2 flex items-start pl-10 pr-2">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] font-semibold text-[#718EBF] w-8 text-right pr-1">
              <span>$40,000</span>
              <span>$30,000</span>
              <span>$20,000</span>
              <span>$10,000</span>
              <span>$0</span>
            </div>
            <div className="w-full h-full relative border-b border-[#E2E8F0] pb-6">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
              >
                {/* Horizontal Guide Matrix Gridlines */}
                {[0, 30, 60, 90, 120].map((y, idx) => (
                  <line
                    key={idx}
                    x1="0"
                    y1={y}
                    x2="500"
                    y2={y}
                    stroke="#F1F5F9"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                ))}
                {/* Orange Line Graph Coordinates */}
                <path
                  d="M 15 110 L 110 50 L 205 75 L 300 20 L 395 65 L 485 45"
                  fill="none"
                  stroke="#FC7900"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Value Vertices Circular Node Highlights */}
                {[
                  { x: 15, y: 110 },
                  { x: 110, y: 50 },
                  { x: 205, y: 75 },
                  { x: 300, y: 20 },
                  { x: 395, y: 65 },
                  { x: 485, y: 45 },
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    fill="#FFFFFF"
                    stroke="#FC7900"
                    strokeWidth="2.5"
                  />
                ))}
              </svg>
            </div>
          </div>
          {/* X Axis Labels */}
          <div className="flex justify-between text-[11px] font-semibold text-[#718EBF] pl-10 pr-2">
            {["2016", "2017", "2018", "2019", "2020", "2021"].map((y) => (
              <span key={y} className="w-12 text-center">
                {y}
              </span>
            ))}
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] shadow-xs h-[300px] flex flex-col justify-between">
          <h4 className="font-bold text-base text-[#343C6A]">
            Monthly Revenue
          </h4>
          <div className="relative w-full h-48 mt-2 flex items-start pl-10 pr-2">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] font-semibold text-[#718EBF] w-8 text-right pr-1">
              <span>$40,000</span>
              <span>$30,000</span>
              <span>$20,000</span>
              <span>$10,000</span>
              <span>$0</span>
            </div>
            <div className="w-full h-full relative border-b border-[#E2E8F0] pb-6">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
              >
                {/* Horizontal Gridlines */}
                {[0, 30, 60, 90, 120].map((y, idx) => (
                  <line
                    key={idx}
                    x1="0"
                    y1={y}
                    x2="500"
                    y2={y}
                    stroke="#F1F5F9"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                ))}
                {/* Spline Curve Path Coordinates */}
                <path
                  d="M 15 110 C 60 90, 80 50, 110 50 C 140 50, 175 110, 205 60 C 240 20, 275 60, 300 45 C 330 30, 365 75, 395 75 C 430 75, 460 20, 485 20"
                  fill="none"
                  stroke="#16DBCC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* X Axis Labels */}
          <div className="flex justify-between text-[11px] font-semibold text-[#718EBF] pl-10 pr-2">
            {["2016", "2017", "2018", "2019", "2020", "2021"].map((y) => (
              <span key={y} className="w-12 text-center">
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MY INVESTMENT & TRENDING STOCK */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* My Investment Flow */}
        <div className="xl:col-span-2 space-y-4">
          <h4 className="font-bold text-lg text-[#343C6A]">My Investment</h4>
          <div className="bg-white rounded-3xl p-6 border border-[#DFEAF2] space-y-4 shadow-xs min-h-[320px] flex flex-col justify-between">
            {[
              {
                name: "Apple Store",
                cat: "E-commerce, Marketplace",
                val: "$54,000",
                labelVal: "Envestment Value",
                ret: "+16%",
                labelRet: "Return Value",
                icon: "🍏",
                bg: "bg-[#FFEBED]",
                txt: "text-[#FF4B4A]",
              },
              {
                name: "Samsung Mobile",
                cat: "E-commerce, Marketplace",
                val: "$25,300",
                labelVal: "Envestment Value",
                ret: "-4%",
                labelRet: "Return Value",
                icon: "💙",
                bg: "bg-[#E7EDFF]",
                txt: "text-[#396AFF]",
              },
              {
                name: "Tesla Motors",
                cat: "Electric Vehicles",
                val: "$8,200",
                labelVal: "Envestment Value",
                ret: "+25%",
                labelRet: "Return Value",
                icon: "⚡",
                bg: "bg-[#FFF7E5]",
                txt: "text-[#FFBB38]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs lg:text-sm border-b border-slate-50 last:border-none pb-2 last:pb-0"
              >
                {/* Brand Header Meta Segment */}
                <div className="flex items-center gap-3.5 min-w-[220px]">
                  <div
                    className={`w-12 h-12 ${item.bg} ${item.txt} rounded-2xl flex items-center justify-center text-xl shrink-0 border border-slate-50`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#718EBF] font-medium mt-0.5">
                      {item.cat}
                    </p>
                  </div>
                </div>

                {/* Investment Assessment Value Matrix Block */}
                <div className="hidden sm:block text-left min-w-[120px]">
                  <p className="font-bold text-[#343C6A] text-sm md:text-base">
                    {item.val}
                  </p>
                  <p className="text-xs text-[#718EBF] font-medium mt-0.5">
                    {item.labelVal}
                  </p>
                </div>

                {/* Return Percentage Metric Yield Column */}
                <div className="text-right min-w-[100px]">
                  <p
                    className={`font-bold text-sm md:text-base ${item.ret.startsWith("-") ? "text-[#FF4B4A]" : "text-[#41C485]"}`}
                  >
                    {item.ret}
                  </p>
                  <p className="text-xs text-[#718EBF] font-medium mt-0.5">
                    {item.labelRet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Stock Table */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-[#343C6A]">Trending Stock</h4>
          <div className="bg-white rounded-3xl p-5 border border-[#DFEAF2] shadow-xs min-h-[320px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-medium text-slate-700">
                <thead>
                  <tr className="border-b border-[#E6EFF5] text-[#718EBF] font-bold text-[11px]">
                    <th className="pb-3 w-12">SL No</th>
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3 text-right">Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      sl: "01.",
                      name: "Trivago",
                      price: "$520",
                      ret: "+5%",
                      neg: false,
                    },
                    {
                      sl: "02.",
                      name: "Canon",
                      price: "$480",
                      ret: "+10%",
                      neg: false,
                    },
                    {
                      sl: "03.",
                      name: "Uber Food",
                      price: "$350",
                      ret: "-3%",
                      neg: true,
                    },
                    {
                      sl: "04.",
                      name: "Nokia",
                      price: "$940",
                      ret: "+2%",
                      neg: false,
                    },
                    {
                      sl: "05.",
                      name: "Tiktok",
                      price: "$670",
                      ret: "-12%",
                      neg: true,
                    },
                  ].map((stock, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-3 font-semibold text-[#718EBF]">
                        {stock.sl}
                      </td>
                      <td className="py-3 font-bold text-slate-800">
                        {stock.name}
                      </td>
                      <td className="py-3 text-[#718EBF] font-semibold">
                        {stock.price}
                      </td>
                      <td
                        className={`py-3 text-right font-bold ${stock.neg ? "text-[#FF4B4A]" : "text-[#41C485]"}`}
                      >
                        {stock.ret}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
