import React from "react";

export default function Loading() {
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
                            className="w-14 h-14 text-indigo-600 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                strokeOpacity="0.25"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2a10 10 0 0 1 10 10"
                            />
                        </svg>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Processing Payment...
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Please wait while we confirm your payment.
                        </p>
                    </div>

                    <small className="text-xs text-gray-400">
                        Do not close this window ✨
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
