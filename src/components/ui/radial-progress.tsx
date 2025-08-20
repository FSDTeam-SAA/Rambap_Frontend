"use client";

interface RadialProgressProps {
  value: number; // 0 - 100
  size?: number; // optional, default 120
  strokeWidth?: number; // optional, default 12
  children?: React.ReactNode;
  className?: string;
}

export const RadialProgress = ({
  value,
  size = 120,
  strokeWidth = 12,
  children,
  className,
}: RadialProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative inline-flex ${className || ""}`} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#3b82f6"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
