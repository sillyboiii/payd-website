type PaydLogoProps = {
  size?: number;
  className?: string;
  stroke?: string;
};

export default function PaydLogo({
  size = 40,
  className = "",
  stroke = "#0B53BF",
}: PaydLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PAYD logo"
    >
      <circle cx="24" cy="24" r="22" stroke={stroke} strokeWidth="2.4" />
      <path
        d="M13.5 30.5 L20.5 23.5 L26.5 26.5 L35 16"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="16" r="2.6" fill={stroke} />
    </svg>
  );
}