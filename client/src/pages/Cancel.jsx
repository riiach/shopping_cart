import React from "react";
import { Link } from "react-router-dom";

export default function Cancel() {
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
                    <div className="w-28 h-28 rounded-full bg-red-50 flex items-center justify-center shadow-sm animate-[float_6s_ease-in-out_infinite]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-14 h-14 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Payment Failed
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Something went wrong while processing your payment. Please try again.
                        </p>
                    </div>

                    <div className="w-full flex flex-col items-center gap-3">
                        <Link
                            to="/checkout"
                            className="
                inline-flex items-center gap-2 px-5 py-2 rounded-full
                bg-indigo-600 text-white text-sm font-medium
                shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300
                transition
              "
                        >
                            Try Again
                        </Link>

                        <Link
                            to="/"
                            className="
                inline-flex items-center gap-2 px-5 py-2 rounded-full
                bg-gray-200 text-gray-700 text-sm font-medium
                shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300
                transition
              "
                        >
                            Back to Home
                        </Link>
                    </div>

                    <small className="text-xs text-gray-400">
                        If payment keeps failing, try another method or contact support.
                    </small>
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
