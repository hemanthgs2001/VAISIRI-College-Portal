const variants = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  gold: "bg-gold-400 text-brand-900 hover:bg-gold-500",
  white: "bg-white text-brand-700 hover:bg-brand-50",
  outline: "border-2 border-white text-white hover:bg-white/10",
};

export default function Button({ variant = "primary", className = "", loading = false, children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
