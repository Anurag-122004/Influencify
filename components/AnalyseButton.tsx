"use client";

import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="px-6 py-2 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
      type="submit"
      disabled={pending}
    >
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  );
}

export default AnalyseButton;
