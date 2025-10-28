export default function Logo() {
    return (
        <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
            <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-md"
            >
                {/* Dark gray square background */}
                <rect width="200" height="200" fill="#020617" />

                {/* PBL text centered */}
                <text
                    x="100"
                    y="120"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="72"
                    fill="#c4ff00"
                    fontWeight="700"
                    letterSpacing="-2"
                    textAnchor="middle"
                >
                    PBL
                </text>
            </svg>
        </div>
    )
}