
import { Link } from "react-router-dom";

export default function Marquee() {
  const announcement = (
    <>
      <span className="font-extrabold tracking-wide">
        VAISIRI PU COLLEGE
      </span>

      <span className="mx-5 text-purple-300">✦</span>

      <span className="font-black">
        ADMISSIONS OPEN!
      </span>

      <span className="mx-4 rounded-full bg-white px-4 py-1 font-black text-[#7027A5]">
        2026–2027
      </span>

      <span className="font-extrabold">
        Science Stream · PCMB & PCMC
      </span>

      <span className="mx-5 font-bold">
        Shape your tomorrow with learning and guidance.
      </span>

      <Link
        to="/admission"
        className="mx-3 inline-flex items-center rounded-full bg-[#49116D] px-5 py-2 font-extrabold text-white shadow-md transition hover:bg-[#321047]"
      >
        Enquire Now →
      </Link>

      <span className="mx-5 text-purple-300">✦</span>
    </>
  );

  return (
    <>
      <div className="relative h-10 w-full overflow-hidden border-y border-[#E8D5F7] bg-[#FBF7FF]">
        <div className="flex h-full w-max items-center whitespace-nowrap animate-vaisiri-marquee">
          <div className="flex h-full shrink-0 items-center px-4 text-sm text-[#43105F] sm:text-base">
            {announcement}
          </div>

          <div
            className="flex h-full shrink-0 items-center px-4 text-sm text-[#43105F] sm:text-base"
            aria-hidden="true"
          >
            {announcement}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vaisiri-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-vaisiri-marquee {
          animation: vaisiri-marquee 32s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-vaisiri-marquee {
            animation-duration: 25s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-vaisiri-marquee {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
