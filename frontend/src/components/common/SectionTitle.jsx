export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-gold-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-900">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-2 max-w-2xl text-gray-600">{subtitle}</p>}
    </div>
  );
}
