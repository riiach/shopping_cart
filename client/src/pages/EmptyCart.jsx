import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCartCard({
                                          title = "Your cart is empty",
                                          subtitle = "Add items to your cart to see them here.",
                                          ctaText = "Continue shopping",
                                          ctaTo = "/"
                                      }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div
                className="
          max-w-md w-full bg-white rounded-2xl shadow-lg p-8
          transform transition-all duration-500
          hover:scale-[1.01]
        "
                role="status"
                aria-live="polite"
            >
                <div className="flex flex-col items-center gap-6">
                    <div className="w-28 h-28 rounded-full bg-indigo-50 flex items-center justify-center shadow-sm animate-[float_6s_ease-in-out_infinite]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-14 h-14 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.6A1 1 0 0 0 6.8 21h10.4a1 1 0 0 0 .99-.84L19 13M7 13H5.4" />
                        </svg>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-neutral-900">{title}</h2>
                        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
                    </div>

                    <div className="w-full flex justify-center">
                        <Link
                            to={ctaTo}
                            className="
                inline-flex items-center gap-2 px-5 py-2 rounded-full
                bg-indigo-600 text-white text-sm font-medium
                shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300
                transition
              "
                        >
                            {ctaText}
                        </Link>
                    </div>

                    <small className="text-xs text-gray-400">Tip: try adding something from the main page ✨</small>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-[float_6s_ease-in-out_infinite] {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
