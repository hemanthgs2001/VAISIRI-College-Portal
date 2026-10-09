import { site } from "../../config/siteConfig.js";

const icons = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
};

const links = [
  { name: "facebook", label: "Facebook", href: site.facebook },
  { name: "instagram", label: "Instagram", href: site.instagram },
];

// Reusable social icons. Pass `className` to change colours per place (top bar / footer).
export default function SocialLinks({ className = "", size = "h-5 w-5" }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map((l) => (
        <li key={l.name}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            title={l.label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition hover:bg-gold-400 hover:text-brand-900 hover:border-gold-400"
          >
            <svg
              className={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icons[l.name]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}