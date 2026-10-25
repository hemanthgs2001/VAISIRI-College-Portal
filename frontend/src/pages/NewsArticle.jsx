import React, { useState } from "react";
import Container from "../components/common/Container.jsx";

// Dummy news article images. Replace each image URL with your actual
// uploaded news clipping image (for example: "/images/news/article-1.jpg").
const newsArticles = [
  {
    id: 1,
    image: "https://placehold.co/900x1100/F3E8FF/581C87/png?text=VAISIRI+News+Article+01",
    alt: "Placeholder news clipping 1",
  },
  {
    id: 2,
    image: "https://placehold.co/900x1100/EDE9FE/6B21A8/png?text=VAISIRI+News+Article+02",
    alt: "Placeholder news clipping 2",
  },
  {
    id: 3,
    image: "https://placehold.co/900x1100/FAF5FF/7E22CE/png?text=VAISIRI+News+Article+03",
    alt: "Placeholder news clipping 3",
  },
  {
    id: 4,
    image: "https://placehold.co/900x1100/F5F3FF/581C87/png?text=VAISIRI+News+Article+04",
    alt: "Placeholder news clipping 4",
  },
  {
    id: 5,
    image: "https://placehold.co/900x1100/F3E8FF/6B21A8/png?text=VAISIRI+News+Article+05",
    alt: "Placeholder news clipping 5",
  },
  {
    id: 6,
    image: "https://placehold.co/900x1100/EDE9FE/7E22CE/png?text=VAISIRI+News+Article+06",
    alt: "Placeholder news clipping 6",
  },
];

export default function NewsArticle() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#FCF9FF] to-[#F8F0FF]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4A126F] via-[#64248C] to-[#7C3AED] px-4 py-10 text-white sm:py-12">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/15 bg-white/5" />
        <div className="pointer-events-none absolute -bottom-24 left-8 h-52 w-52 rounded-full border border-white/10 bg-white/5" />
        <Container>
          <div className="relative text-center">
            <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
              VAISIRI PU College
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              News Articles
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm text-purple-100 sm:text-base">
              A gallery of VAISIRI news features and newspaper clippings.
            </p>
          </div>
        </Container>
      </section>

      <section className="px-4 py-7 sm:px-6 sm:py-9">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelected(article)}
                aria-label={`View news article image ${article.id}`}
                className="group overflow-hidden rounded-2xl border border-purple-100 bg-white p-2.5 text-left shadow-[0_8px_26px_rgba(74,18,111,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_16px_35px_rgba(74,18,111,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <div className="overflow-hidden rounded-xl bg-[#F5EDFF]">
                  <img
                    src={article.image}
                    alt={article.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {selected && (
        <div
          role="presentation"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#160920]/85 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="News article image preview"
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-[95vw] items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close image preview"
              className="absolute -right-2 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-[#4A126F] shadow-lg hover:bg-purple-100"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.alt}
              className="max-h-[88vh] max-w-[92vw] rounded-xl bg-white object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
