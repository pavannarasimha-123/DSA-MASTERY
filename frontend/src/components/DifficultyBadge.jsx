import React from "react";

export default function DifficultyBadge({ difficulty }) {
  const diff = difficulty || "Medium";
  const map = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Hard: "bg-rose-50 text-rose-700 border-rose-200"
  };

  const style = map[diff] || map.Medium;

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${style}`}>
      {diff}
    </span>
  );
}
