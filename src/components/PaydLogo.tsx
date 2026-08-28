type PaydLogoProps = {
  size?: number;
  className?: string;
};

export default function PaydLogo({ size = 40, className = "" }: PaydLogoProps) {
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
      <circle cx="24" cy="24" r="22" stroke="#2F6BFF" strokeWidth="1.6" />
      <path
        d="M12 31 L20 24 L26 27 L36 15"
        stroke="#2F6BFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="15" r="2.4" fill="#2F6BFF" />
    </svg>
  );
}