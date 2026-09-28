import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    dob: "1990-01-25",
    address: "San Jose, California, USA",
    zip: "45962",
    country: "USA",
  });

  // 1. REACTIVE STATE FOR TOGGLES (Preferences tab)
  const [preferences, setPreferences] = useState({
    currency: "USD",
    timezone: "(GMT-12:00) International Date Line West",
    digital: true,
    merchant: false,
    recommendation: true,
  });

  // 2. REACTIVE STATE FOR SECURITY (Security tab)
  const [security, setSecurity] = useState({
    twoFactor: true,
    currentPassword: "",
    newPassword: "",
  });

  // Click handler to instantly flip boolean toggle states
  const handleToggleChange = (section, key) => {
    if (section === "preferences") {
      setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    } else if (section === "security") {
      setSecurity((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saving configurations:", { profile, preferences, security });
    alert("Changes saved successfully!");
  };

  return (
    <div className="p-6 lg:p-8 bg-[#F5F7FA] min-h-screen select-none">
      <div className="bg-white rounded-3xl border border-[#DFEAF2] p-6 lg:p-8 max-w-5xl mx-auto shadow-xs min-h-[520px]">
        {/* Navigation Selector Bar */}
        <div className="flex border-b border-[#E6EFF5] gap-8 mb-8 text-sm font-semibold">
          {["profile", "preferences", "security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 capitalize transition-all cursor-pointer relative ${
                activeTab === tab
                  ? "text-[#1814F3]"
                  : "text-[#718EBF] hover:text-slate-800"
              }`}
            >
              {tab === "profile" ? "Edit Profile" : tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1814F3] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* EDIT PROFILE */}
        {activeTab === "profile" && (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="relative self-center lg:self-start flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-2 border-slate-100 flex items-center justify-center text-4xl">
                👩‍💼
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#1814F3] text-white rounded-full flex items-center justify-center text-xs shadow cursor-pointer">
                ✏️
              </button>
            </div>

            <form
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs lg:text-sm w-full"
              onSubmit={handleSaveChanges}
            >
              {[
                { id: "name", label: "Your Name", val: profile.name },
                { id: "username", label: "User Name", val: profile.username },
                {
                  id: "email",
                  label: "Email",
                  val: profile.email,
                  type: "email",
                },
                { id: "dob", label: "Date of Birth", val: profile.dob },
                {
                  id: "address",
                  label: "Present Address",
                  val: profile.address,
                },
                { id: "zip", label: "Postal Code", val: profile.zip },
                { id: "country", label: "Country", val: profile.country },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-[#343C6A] font-semibold mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type || "text"}
                    value={f.val}
                    onChange={(e) =>
                      setProfile({ ...profile, [f.id]: e.target.value })
                    }
                    className="w-full border border-[#DFEAF2] rounded-xl px-4 py-3 outline-none text-slate-700 focus:border-[#1814F3]"
                  />
                </div>
              ))}
              <div className="md:col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#1814F3] text-white font-bold px-10 py-3.5 rounded-xl hover:bg-blue-800 transition text-sm shadow-sm w-full md:w-auto cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PREFERENCES TAB */}
        {activeTab === "preferences" && (
          <form
            className="space-y-6 text-xs lg:text-sm"
            onSubmit={handleSaveChanges}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 text-[#343C6A]">
                  Currency
                </label>
                <input
                  type="text"
                  value={preferences.currency}
                  onChange={(e) =>
                    setPreferences({ ...preferences, currency: e.target.value })
                  }
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-3 outline-none text-slate-700 focus:border-[#1814F3]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-[#343C6A]">
                  Time Zone
                </label>
                <input
                  type="text"
                  value={preferences.timezone}
                  onChange={(e) =>
                    setPreferences({ ...preferences, timezone: e.target.value })
                  }
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-3 outline-none text-slate-700 focus:border-[#1814F3]"
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-sm text-[#343C6A]">Notification</h4>
              {[
                { id: "digital", label: "I send or receive digital currency" },
                { id: "merchant", label: "I receive merchant order" },
                {
                  id: "recommendation",
                  label: "There are recommendation for my account",
                },
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* SWITCH BUTTON */}
                  <button
                    type="button"
                    onClick={() => handleToggleChange("preferences", node.id)}
                    className={`w-10 h-5.5 rounded-full p-0.5 cursor-pointer transition-colors flex items-center ${
                      preferences[node.id] ? "bg-[#16DBCC]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-4.5 h-4.5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                        preferences[node.id]
                          ? "translate-x-4.5"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                  <span
                    className="text-xs font-semibold text-[#718EBF] select-none cursor-pointer"
                    onClick={() => handleToggleChange("preferences", node.id)}
                  >
                    {node.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#1814F3] text-white font-bold px-10 py-3.5 rounded-xl hover:bg-blue-800 transition text-sm shadow-sm w-full md:w-auto cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        )}

        {/* SECURITY TAB */}
        {activeTab === "security" && (
          <form
            className="space-y-6 text-xs lg:text-sm max-w-xl"
            onSubmit={handleSaveChanges}
          >
            <div className="space-y-3 pb-4 border-b border-slate-50">
              <h4 className="font-bold text-sm text-[#343C6A]">
                Two-factor Authentication
              </h4>
              <div className="flex items-center gap-3 mt-2">
                {/* TWO-FACTOR SWITCH BUTTON */}
                <button
                  type="button"
                  onClick={() => handleToggleChange("security", "twoFactor")}
                  className={`w-10 h-5.5 rounded-full p-0.5 cursor-pointer flex items-center transition-colors ${
                    security.twoFactor ? "bg-[#16DBCC]" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-4.5 h-4.5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                      security.twoFactor ? "translate-x-4.5" : "translate-x-0"
                    }`}
                  />
                </button>
                <span
                  className="text-xs font-semibold text-[#718EBF] select-none cursor-pointer"
                  onClick={() => handleToggleChange("security", "twoFactor")}
                >
                  Enable or disable two factor authentication
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-sm text-[#343C6A]">
                Change Password
              </h4>
              <div>
                <label className="block text-[#718EBF] font-semibold mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  value={security.currentPassword}
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      currentPassword: e.target.value,
                    })
                  }
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-3 outline-none text-slate-700 focus:border-[#1814F3]"
                />
              </div>
              <div>
                <label className="block text-[#718EBF] font-semibold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  value={security.newPassword}
                  onChange={(e) =>
                    setSecurity({ ...security, newPassword: e.target.value })
                  }
                  className="w-full border border-[#DFEAF2] rounded-xl px-4 py-3 outline-none text-slate-700 focus:border-[#1814F3]"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#1814F3] text-white font-bold px-10 py-3.5 rounded-xl hover:bg-blue-800 transition text-sm shadow-sm w-full md:w-auto cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
