type GButtonProps = {
  text: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function GButton({
  text,
  onClick,
  disabled = false,
  className,
  type = "button",
}: GButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        backgroundColor: "var(--primary, #E2AB2E)",
        color: "#232323",
        fontWeight: "bold",
        border: "none",
        padding: "1rem 2rem",
        borderRadius: 6,
        fontSize: "1rem",
        lineHeight: 1,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
      aria-disabled={disabled}
    >
      <span className="whitespace-nowrap">{text}</span>
    </button>
  );
}
