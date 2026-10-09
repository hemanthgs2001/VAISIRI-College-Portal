const base =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

// One component for input / textarea / select so every form looks identical
export default function FormField({ label, id, as = "input", error, options = [], className = "", ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      {as === "textarea" && <textarea id={id} rows={3} className={base} {...props} />}

      {as === "select" && (
        <select id={id} className={base} {...props}>
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      )}

      {as === "input" && <input id={id} className={base} {...props} />}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
