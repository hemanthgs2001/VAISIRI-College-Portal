import { site } from "../../config/siteConfig.js";

export default function Marquee() {
  const items = Array.from({ length: 6 });

  return (
    <div className="overflow-hidden bg-[#ffeb99] py-2 text-sm font-semibold text-brand-900">
      <div className="flex w-max animate-marquee-slow whitespace-nowrap">
        {items.concat(items).map((_, i) => (
          <span key={i} className="px-8">
            {site.announcement}
          </span>
        ))}
      </div>
    </div>
  );
}