// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Container from "../components/common/Container.jsx";
// import SectionTitle from "../components/common/SectionTitle.jsx";
// import Button from "../components/common/Button.jsx";

// const programCards = [
//   {
//     title: "PU Programs",
//     text: "Science: PCMB | PCMC\nCommerce: SEBA | SCBA | CEBA | MEBA",
//     link: "/courses",
//     color: "from-[#6D28A5] to-[#8B36B5]",
//   },
//   {
//     title: "Gateway to Competitive & Professional Careers",
//     text: "Preparing Future Achievers for NEET | JEE | KCET | CA | CS | CLAT | CMA",
//     link: "/courses",
//     color: "from-[#4A126F] to-[#6D28A5]",
//   },
//   {
//     title: "Beyond the Classroom Learning",
//     text: "Crash Courses | Bridge Courses | Tally | Career Certification Programs",
//     link: "/facilities",
//     color: "from-[#8B36B5] to-[#A855C7]",
//   },
//   {
//     title: "Experienced & Qualified Faculty",
//     text: "Guided by Expert Educators Across Science & Commerce Streams",
//     link: "/about",
//     color: "from-[#582184] to-[#321047]",
//   },
// ];

// const features = [
//   {
//     icon: "✦",
//     title: "Morning Prayer, Yoga, and Meditation",
//     text: "Sessions designed to promote focus, discipline, and mental well-being.",
//   },
//   {
//     icon: "🎓",
//     title: "Experienced Faculty",
//     text: "Qualified educators with expertise in PU Board and competitive examinations.",
//   },
//   {
//     icon: "🏆",
//     title: "Competitive Exam Coaching",
//     text: "Preparation support for NEET, JEE, KCET, CA, CS, CMA and CLAT.",
//   },
//   {
//     icon: "♙",
//     title: "Personalized Mentoring",
//     text: "Academic guidance and career counselling to help students choose the right path.",
//   },
//   {
//     icon: "♧",
//     title: "Student Development",
//     text: "Activities that encourage teamwork, leadership, and personal growth.",
//   },
//   {
//     icon: "▣",
//     title: "Modern Learning Facilities",
//     text: "Learning spaces and resources designed to support academic excellence.",
//   },
//   {
//     icon: "⚗",
//     title: "Practical Learning",
//     text: "Opportunities to strengthen concepts through practical and activity-based learning.",
//   },
//   {
//     icon: "▤",
//     title: "Academic Support",
//     text: "Structured learning, revision, and assessment to help students progress.",
//   },
// ];

// const testimonials = [
//   { name: "Student Achiever 01", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85", pu: 95.33, sslc: 82.80 },
//   { name: "Student Achiever 02", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85", pu: 93.80, sslc: 79.40 },
//   { name: "Student Achiever 03", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85", pu: 97.20, sslc: 88.60 },
//   { name: "Student Achiever 04", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=85", pu: 94.60, sslc: 81.20 },
//   { name: "Student Achiever 05", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85", pu: 92.40, sslc: 77.80 },
//   { name: "Student Achiever 06", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85", pu: 96.10, sslc: 86.40 },
//   { name: "Student Achiever 07", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=85", pu: 91.80, sslc: 80.20 },
//   { name: "Student Achiever 08", image: "https://images.unsplash.com/photo-1504598588642-7d7b4f1e7b3b?auto=format&fit=crop&w=500&q=85", pu: 94.20, sslc: 83.60 },
//   { name: "Student Achiever 09", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85", pu: 98.00, sslc: 89.20 },
//   { name: "Student Achiever 10", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85", pu: 90.60, sslc: 76.40 },
//   { name: "Student Achiever 11", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85", pu: 96.80, sslc: 87.40 },
//   { name: "Student Achiever 12", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85", pu: 93.40, sslc: 80.80 },
// ];

// const newsItems = [
//   {
//     title: "Academic Achievements",
//     text: "Celebrating student achievements and academic milestones.",
//     image: "/images/news/news-1.jpg",
//   },
//   {
//     title: "College Activities",
//     text: "Highlights from events, programmes, and campus activities.",
//     image: "/images/news/news-2.jpg",
//   },
//   {
//     title: "Student Success",
//     text: "Stories showcasing the dedication and achievements of our students.",
//     image: "/images/news/news-3.jpg",
//   },
// ];

// const videos = [
//   { title: "College Introduction", id: "" },
//   { title: "Academic Activities", id: "" },
//   { title: "Campus Highlights", id: "" },
//   { title: "Student Activities", id: "" },
// ];

// const management = [
//   {
//     name: "SRI K. B. JAYANNA",
//     role: "Founder & President",
//     group: "Vidyavahini Group",
//     image: "/images/management/president.jpg",
//     paragraphs: [
//       "It gives me immense pride to welcome students and parents to Vidyanidhi, Tumkur. Our vision is to provide an educational experience that goes far beyond academics—one that shapes character, nurtures leadership, and prepares young minds to face the challenges of the modern world with confidence and clarity.",
//       "At Vidyanidhi, education is not merely the pursuit of marks; it is a journey of transformation. We strive to cultivate curiosity, compassion, and courage in every learner. Through a blend of rigorous academics, value-based learning, and holistic development, we aim to mould responsible citizens who think critically, act ethically, and lead with integrity.",
//       "I express my heartfelt gratitude to parents for placing their trust in us. Together, let us work toward building a brighter future for our students and shaping citizens who will contribute meaningfully to society and the nation.",
//     ],
//   },
//   {
//     name: "SRI N. B. PRADEEP KUMAR",
//     role: "Secretary",
//     group: "Vidyavahini Group",
//     image: "/images/management/secretary.jpg",
//     paragraphs: [
//       "Our institution is deeply committed to fostering excellence through quality education and holistic development. We believe that true education extends beyond textbooks—it is about cultivating curiosity, creativity, and character in every learner. At Vidyanidhi, we strive to create an inspiring environment where every student can realize their full potential academically, personally, and socially.",
//       "Discipline, responsibility, and moral values form the foundation of our institutional philosophy. These principles guide students to become not only successful professionals but also compassionate individuals who contribute meaningfully to society. Through a balanced blend of rigorous academics and life-skill programs, we prepare our students to face the challenges of the modern world with confidence and resilience.",
//       "As we continue to grow and evolve, our commitment remains steadfast—to provide an educational experience that shapes confident, disciplined, and value-driven individuals ready to contribute positively to the nation and the world.",
//     ],
//   },
// ];

// const closingCards = [
//   {
//     icon: "🎓",
//     title: "Blogs & Career Guidance",
//     text: "Explore educational insights and career guidance for your academic journey.",
//     button: "Explore Blogs",
//     link: "/blogs",
//   },
//   {
//     icon: "⌂",
//     title: "Facilities",
//     text: "Discover the learning facilities and student support available at our college.",
//     button: "Explore Facilities",
//     link: "/facilities",
//   },
//   {
//     icon: "▣",
//     title: "Admissions",
//     text: "Take the next step towards your academic journey at VAISIRI PU College.",
//     button: "Apply Now",
//     link: "/admission",
//   },
// ];

// const heroImages = [
//   {
//     src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85",
//     alt: "Students walking together on a college campus",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85",
//     alt: "Teacher supporting students in a classroom",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=85",
//     alt: "Students learning together in a classroom",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=2000&q=85",
//     alt: "Students studying together",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
//     alt: "University campus building",
//   },
// ];

// const aboutImages = [
//   {
//     src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
//     alt: "College campus building",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
//     alt: "Students on a college campus",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
//     alt: "Students learning in a classroom",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
//     alt: "Students studying together",
//   },
// ];

// let welcomePosterShownForPageLoad = false;

// export default function Home() {
//   const [activeHeroImage, setActiveHeroImage] = useState(0);
//   const [activeTestimonialGroup, setActiveTestimonialGroup] = useState(0);
//   const [activeAboutImage, setActiveAboutImage] = useState(0);
//   const [showWelcomePopup, setShowWelcomePopup] = useState(false);
//   const [activeTimelineStep, setActiveTimelineStep] = useState(0);
//   const [activeManagementStep, setActiveManagementStep] = useState(0);

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setActiveHeroImage((current) => (current + 1) % heroImages.length);
//     }, 5000);

//     return () => window.clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const groupCount = Math.ceil(testimonials.length / 3);
//     if (groupCount <= 1) return undefined;

//     const testimonialIntervalId = window.setInterval(() => {
//       setActiveTestimonialGroup((current) => (current + 1) % groupCount);
//     }, 10000);

//     return () => window.clearInterval(testimonialIntervalId);
//   }, []);

//   useEffect(() => {
//     const aboutIntervalId = window.setInterval(() => {
//       setActiveAboutImage((current) => (current + 1) % aboutImages.length);
//     }, 4500);

//     return () => window.clearInterval(aboutIntervalId);
//   }, []);

//   // Show once on the initial app load only. Navigating away and returning to Home
//   // will not show it again. A full browser refresh resets this module-level flag.
//   useEffect(() => {
//     if (welcomePosterShownForPageLoad) return;

//     welcomePosterShownForPageLoad = true;
//     setShowWelcomePopup(true);

//     // Intentionally do not clear this timeout during route unmounts or React StrictMode's
//     // development effect replay; it must always dismiss the initial poster after 3 seconds.
//     window.setTimeout(() => {
//       setShowWelcomePopup(false);
//     }, 3000);
//   }, []);

//   // Move the timeline marker between Vision and Mission as the user scrolls.
//   useEffect(() => {
//     const updateTimelineStep = () => {
//       const steps = Array.from(document.querySelectorAll("[data-vaisiri-timeline-step]"));
//       if (!steps.length) return;

//       const targetY = window.innerHeight * 0.52;
//       let closestIndex = 0;
//       let closestDistance = Number.POSITIVE_INFINITY;

//       steps.forEach((step, index) => {
//         const rect = step.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const distance = Math.abs(centerY - targetY);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setActiveTimelineStep(closestIndex);
//     };

//     window.addEventListener("scroll", updateTimelineStep, { passive: true });
//     window.addEventListener("resize", updateTimelineStep);
//     updateTimelineStep();

//     return () => {
//       window.removeEventListener("scroll", updateTimelineStep);
//       window.removeEventListener("resize", updateTimelineStep);
//     };
//   }, []);

//   // Keep the management timeline marker aligned with the message currently in view.
//   useEffect(() => {
//     const updateManagementTimeline = () => {
//       const steps = Array.from(document.querySelectorAll("[data-vaisiri-management-step]"));
//       if (!steps.length) return;

//       const targetY = window.innerHeight * 0.52;
//       let closestIndex = 0;
//       let closestDistance = Number.POSITIVE_INFINITY;

//       steps.forEach((step, index) => {
//         const rect = step.getBoundingClientRect();
//         const centerY = rect.top + rect.height / 2;
//         const distance = Math.abs(centerY - targetY);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setActiveManagementStep(closestIndex);
//     };

//     window.addEventListener("scroll", updateManagementTimeline, { passive: true });
//     window.addEventListener("resize", updateManagementTimeline);
//     updateManagementTimeline();

//     return () => {
//       window.removeEventListener("scroll", updateManagementTimeline);
//       window.removeEventListener("resize", updateManagementTimeline);
//     };
//   }, []);

//   return (
//     <>
//       {showWelcomePopup && (
//         <div
//           role="status"
//           aria-live="polite"
//           className="fixed inset-0 z-[200] flex items-center justify-center bg-[#16091F]/70 px-5 backdrop-blur-[2px] animate-[welcomeOverlayIn_250ms_ease-out]"
//         >
//           <div className="relative w-full max-w-[560px] animate-[welcomePosterIn_450ms_cubic-bezier(0.2,0.8,0.2,1)]">
//             {/* Decorative burst marks behind the poster */}
//             <span aria-hidden="true" className="pointer-events-none absolute -left-5 top-8 h-2 w-16 rotate-[35deg] rounded-full bg-[#B65AD8] sm:-left-9 sm:w-24" />
//             <span aria-hidden="true" className="pointer-events-none absolute -left-7 top-20 h-2 w-12 rotate-[20deg] rounded-full bg-[#7C35A8] sm:-left-12 sm:w-16" />
//             <span aria-hidden="true" className="pointer-events-none absolute -right-5 bottom-10 h-2 w-16 -rotate-[28deg] rounded-full bg-[#B65AD8] sm:-right-9 sm:w-24" />

//             <div
//               className="relative overflow-hidden border-[5px] border-[#7C287F] bg-white px-7 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.4)] sm:px-12 sm:py-12"
//               style={{
//                 clipPath: "polygon(7% 5%, 29% 10%, 50% 0%, 69% 10%, 93% 5%, 89% 29%, 100% 50%, 89% 70%, 94% 94%, 69% 90%, 50% 100%, 30% 90%, 6% 95%, 11% 70%, 0% 50%, 11% 30%)",
//               }}
//             >
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F2DDF8] text-4xl text-[#6D28A5] sm:h-20 sm:w-20 sm:text-5xl">
//                 ✦
//               </div>
//               <span className="mt-4 block text-xs font-extrabold uppercase tracking-[0.28em] text-[#8B36B5] sm:text-sm">
//                 Welcome to
//               </span>
//               <h2 className="mt-2 font-serif text-2xl font-black leading-tight text-[#321047] sm:text-4xl">
//                 VAISIRI PU College
//               </h2>
//               <p className="mt-3 text-sm font-semibold leading-6 text-[#6B4C79] sm:text-base">
//                 Shape your tomorrow with knowledge, confidence, and opportunity.
//               </p>
//               <span className="mx-auto mt-5 inline-flex rounded-full bg-gradient-to-r from-[#42105F] to-[#8B36B5] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-md sm:text-sm">
//                 Admissions Open · 2026–2027
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//       <style>{`
//         @keyframes welcomeOverlayIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes welcomePosterIn {
//           0% { opacity: 0; transform: scale(0.78) rotate(-3deg); }
//           70% { opacity: 1; transform: scale(1.03) rotate(1deg); }
//           100% { opacity: 1; transform: scale(1) rotate(0); }
//         }
//       `}</style>
//       {/* 1. Admissions-inspired split Hero Banner */}
//       <section className="relative isolate overflow-hidden bg-[#FCF9FF] text-[#321047]">
//         <style>{`
//           @keyframes admissionsPosterFloat {
//             0%, 100% { transform: translateY(0) rotate(-1.5deg); box-shadow: 4px 5px 0 #D8B4EA, 0 12px 24px rgba(55,16,79,0.18); }
//             50% { transform: translateY(-3px) rotate(-0.8deg); box-shadow: 4px 7px 0 #C79BE5, 0 15px 28px rgba(55,16,79,0.22); }
//           }
//           @keyframes posterShimmer {
//             0%, 65%, 100% { background-position: 200% 0; }
//             35% { background-position: -100% 0; }
//           }
//         `}</style>
//         {/* Soft decorative background shapes */}
//         <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#F1E2FC]" />
//         <div className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#E7D0F8]/70" />
//         <div className="pointer-events-none absolute right-[-9rem] top-[-8rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#4A126F]" />
//         <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#7C35A8]" />

//         {/* Horizontal pinned admissions announcement: compact card in the hero's top-right corner */}
//         <div className="pointer-events-none absolute right-3 top-4 z-30 w-[min(21rem,calc(100%-1.5rem))] sm:right-6 sm:top-5 sm:w-[min(24rem,calc(100%-3rem))] lg:right-8 lg:top-5 lg:w-[min(26rem,calc(100%-4rem))]">
//           <div className="pointer-events-auto relative animate-[admissionsPosterFloat_5s_ease-in-out_infinite] rounded-[3px] border border-[#E5C6F5] bg-[#FFFDFE] px-3 pb-3 pt-4 text-left shadow-[5px_6px_0px_#D8B4EA,0_16px_30px_rgba(55,16,79,0.22)] sm:px-4 sm:pb-3 sm:pt-5">
//             {/* Pushpin moved to the top-right corner */}
//             <span aria-hidden="true" className="absolute right-5 top-0 z-20 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white bg-gradient-to-br from-[#C084FC] via-[#7E22CE] to-[#4A126F] shadow-[0_3px_5px_rgba(49,16,71,0.35)] sm:right-6 sm:h-6 sm:w-6" />
//             <span aria-hidden="true" className="absolute right-[2.05rem] top-1 z-10 h-3 w-1 rounded-full bg-[#6D28A5] shadow-sm sm:right-[2.55rem] sm:top-2" />
//             {/* Small folded paper corner */}
//             <span aria-hidden="true" className="absolute right-0 top-0 h-0 w-0 border-b-[14px] border-l-[14px] border-b-[#EAD7F8] border-l-transparent" />
//             <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
//               <span
//                 className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-[#EAD7F8]/70 to-transparent"
//                 style={{ animation: "posterShimmer 5s ease-in-out infinite" }}
//               />
//             </span>

//             <div className="relative flex flex-col items-start">
//               <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#80638E] sm:text-[10px] sm:tracking-[0.2em]">
//                 VAISIRI PU College
//               </span>
//               <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
//                 <span className="font-serif text-lg font-black leading-tight text-[#321047] sm:text-2xl">
//                   Admissions <span className="text-[#6D28A5]">Open!</span>
//                 </span>
//                 <span className="inline-flex rounded-md bg-[#F0DDFC] px-2 py-1 text-[10px] font-extrabold tracking-wide text-[#4A126F] sm:text-xs">
//                   2026 – 2027
//                 </span>
//               </div>
//               <span className="mt-1 block text-[11px] font-bold text-[#6D28A5] sm:text-xs">
//                 Science &amp; Commerce
//               </span>
//               <span className="mt-1 block text-[10px] leading-4 text-[#6B5A72] sm:text-xs sm:leading-5">
//                 Shape your tomorrow with learning and guidance.
//               </span>
//               <Link
//                 to="/admission"
//                 className="relative mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-3 py-1.5 text-[10px] font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
//               >
//                 Enquire Now <span aria-hidden="true">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-6 lg:!px-10">
//           <div className="grid min-h-[540px] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-16">
//             {/* Left: headline and calls to action */}
//             <div className="relative z-10 mx-auto w-full max-w-2xl pt-48 text-center sm:pt-44 lg:mx-0 lg:pt-8 lg:text-left">
//               <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-[#6B4C79] sm:text-sm">
//                 <span className="h-0.5 w-7 bg-[#8B36B5]" />
//                 Shape Your Tomorrow
//               </span>

//               <h1 className="mt-5 font-serif text-4xl font-black leading-[1.04] tracking-tight text-[#321047] sm:text-5xl md:text-6xl">
//                 Discover Your Potential
//                 <span className="mt-2 block text-3xl font-extrabold leading-tight text-[#4A126F] sm:text-4xl md:text-5xl">
//                   at VAISIRI PU College
//                 </span>
//               </h1>



//               <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8 lg:mx-0">
//                 Build your future at VAISIRI PU College. Explore Science and
//                 Commerce pathways, strengthen your academic foundations, and
//                 prepare for the next step with focused learning and guidance.
//               </p>

//               {/* Feature highlights */}
//               <div className="mx-auto mt-7 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0">
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">♧</span>
//                   <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Quality<br />Education</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">▤</span>
//                   <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Academic<br />Guidance</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">♙</span>
//                   <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Student<br />Development</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">↗</span>
//                   <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Future Career<br />Pathways</span>
//                 </div>
//               </div>

//               <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
//                 <Link to="/admission" className="inline-flex">
//                   <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-purple-900/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:text-base">
//                     Register Now <span aria-hidden="true">→</span>
//                   </span>
//                 </Link>

//                 <Link to="/courses" className="inline-flex">
//                   <span className="inline-flex items-center rounded-full border border-[#7C3AA5]/40 bg-white/80 px-6 py-3.5 text-sm font-bold text-[#582184] transition hover:bg-[#F1E2FC] sm:text-base">
//                     Explore Courses
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             {/* Right: rotating education images in a decorative curved frame */}
//             <div className="relative mx-auto flex min-h-[390px] w-full max-w-2xl items-center justify-center sm:min-h-[480px] lg:min-h-[560px]">
//               <div className="absolute right-0 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full bg-[#D7B0F0] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]" />
//               <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#4A126F] sm:h-[405px] sm:w-[405px] lg:h-[480px] lg:w-[480px]" />

//               <div className="absolute right-0 top-1/2 h-[285px] w-[285px] -translate-y-1/2 overflow-hidden rounded-[48%_48%_18%_48%] border-4 border-white/80 shadow-2xl sm:h-[375px] sm:w-[375px] lg:h-[445px] lg:w-[445px]">
//                 {heroImages.map((image, index) => (
//                   <img
//                     key={image.src}
//                     src={image.src}
//                     alt={image.alt}
//                     aria-hidden={index !== activeHeroImage}
//                     className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
//                       index === activeHeroImage ? "opacity-100" : "opacity-0"
//                     }`}
//                     loading={index === 0 ? "eager" : "lazy"}
//                   />
//                 ))}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/25 via-transparent to-white/5" />
//               </div>

//               {/* Floating graduation detail */}
//               <div className="absolute bottom-5 left-1 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl sm:bottom-8 sm:left-0 sm:p-4">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0DDFC] text-2xl text-[#6D28A5]">🎓</span>
//                 <span className="pr-2">
//                   <span className="block text-sm font-extrabold text-[#321047]">Your Future Starts Here</span>
//                   <span className="mt-0.5 block text-xs text-[#76647F]">VAISIRI PU College</span>
//                 </span>
//               </div>

//               {/* Slideshow indicators */}
//               <div className="absolute bottom-0 right-4 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-md sm:bottom-2 sm:right-3">
//                 {heroImages.map((image, index) => (
//                   <button
//                     key={image.src}
//                     type="button"
//                     onClick={() => setActiveHeroImage(index)}
//                     aria-label={`Show slide ${index + 1}`}
//                     aria-current={index === activeHeroImage ? "true" : undefined}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       index === activeHeroImage
//                         ? "w-7 bg-[#6D28A5]"
//                         : "w-2.5 bg-[#C9B4D8] hover:bg-[#8B36B5]"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* 2. Programme and Service Cards */}
//       <section className="bg-gray-50 py-8">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
//           <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//             {programCards.map((card) => (
//               <Link
//                 key={card.title}
//                 to={card.link}
//                 className={`flex min-h-40 flex-col rounded-lg bg-gradient-to-br ${card.color} p-5 text-white shadow-lg transition hover:-translate-y-1`}
//               >
//                 <h2 className="text-lg font-extrabold leading-7">
//                   {card.title}
//                 </h2>

//                 <p className="mt-2 whitespace-pre-line text-sm leading-5 text-white/95">
//                   {card.text}
//                 </p>

//                 <span className="mt-auto pt-5 text-sm font-bold">
//                   Discover More →
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* 3. About VAISIRI — introduction with rotating campus images */}
//       <section className="overflow-hidden bg-[#FCF9FF] py-12 lg:py-16">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
//           <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
//             {/* Left: About Us content */}
//             <div className="relative z-10">
//               <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
//                 <span className="h-0.5 w-7 bg-[#8B36B5]" />
//                 About VAISIRI
//               </span>

//               <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#321047] sm:text-4xl lg:text-5xl">
//                 Who Are We?
//               </h2>

//               <p className="mt-5 text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8">
//                 VAISIRI PU College, Tumkur, is committed to providing quality
//                 pre-university education and helping students build strong
//                 academic foundations for their future.
//               </p>

//               <p className="mt-4 text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8">
//                 With Science and Commerce pathways, focused academic guidance,
//                 and preparation for board and competitive examinations, we
//                 encourage students to discover their strengths and work
//                 confidently towards their goals.
//               </p>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
//                 <div className="rounded-xl border border-[#E9D5F5] bg-white/90 p-4 shadow-sm">
//                   <span className="text-sm font-extrabold text-[#4A126F]">
//                     Strong Foundations
//                   </span>
//                   <p className="mt-1 text-sm leading-6 text-[#76647F]">
//                     Build subject knowledge, confidence, and learning habits.
//                   </p>
//                 </div>
//                 <div className="rounded-xl border border-[#E9D5F5] bg-white/90 p-4 shadow-sm">
//                   <span className="text-sm font-extrabold text-[#4A126F]">
//                     Guided Preparation
//                   </span>
//                   <p className="mt-1 text-sm leading-6 text-[#76647F]">
//                     Work towards board examinations and future opportunities.
//                   </p>
//                 </div>
//               </div>

//               <Link
//                 to="/about"
//                 className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-6 py-3 font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
//               >
//                 Learn More About Us <span aria-hidden="true">→</span>
//               </Link>
//             </div>

//             {/* Right: rotating campus and learning images */}
//             <div className="relative mx-auto w-full max-w-2xl">
//               <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[#EAD7F8] sm:h-56 sm:w-56" />
//               <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#D7B0F0]/80 sm:h-52 sm:w-52" />

//               <div className="relative h-[300px] overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#4A126F] shadow-[0_24px_60px_rgba(74,18,111,0.22)] sm:h-[390px] lg:h-[470px]">
//                 {aboutImages.map((image, index) => (
//                   <img
//                     key={image.src}
//                     src={image.src}
//                     alt={image.alt}
//                     aria-hidden={index !== activeAboutImage}
//                     className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
//                       index === activeAboutImage ? "opacity-100" : "opacity-0"
//                     }`}
//                     loading={index === 0 ? "eager" : "lazy"}
//                   />
//                 ))}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/65 via-[#321047]/5 to-transparent" />

//                 <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
//                   <div>
//                     <span className="text-xs font-bold uppercase tracking-[0.22em] text-purple-100">
//                       Learn • Grow • Achieve
//                     </span>
//                     <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
//                       Life at VAISIRI
//                     </h3>
//                   </div>

//                   <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-2 backdrop-blur-md">
//                     {aboutImages.map((image, index) => (
//                       <button
//                         key={image.src}
//                         type="button"
//                         onClick={() => setActiveAboutImage(index)}
//                         aria-label={`Show campus image ${index + 1}`}
//                         aria-current={index === activeAboutImage ? "true" : undefined}
//                         className={`h-2 rounded-full transition-all duration-300 ${
//                           index === activeAboutImage
//                             ? "w-6 bg-white"
//                             : "w-2 bg-white/60 hover:bg-white"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -left-2 top-6 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl sm:-left-5 sm:top-8 sm:px-5">
//                 <span className="block text-xs font-semibold text-[#80638E]">
//                   Your Future Starts Here
//                 </span>
//                 <span className="mt-1 block text-sm font-extrabold text-[#4A126F]">
//                   VAISIRI PU College
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* 4. Special Features */}
//       <section className="bg-white py-16">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
//           <div className="mb-5 text-center">
//             <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//               Why Choose Us
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//             </span>
//             <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
//               Special Features
//             </h2>
//           </div>

//           <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-[#76647F]">
//             Everything we provide is designed to support academic excellence,
//             personal growth, and a better learning experience.
//           </p>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature) => (
//               <article
//                 key={feature.title}
//                 className="group overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white text-center transition duration-300 hover:-translate-y-1 hover:border-[#6D28A5] hover:bg-[#FCF9FF] hover:shadow-[0_16px_36px_rgba(74,18,111,0.14)]"
//               >
//                 <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

//                 <div className="p-6">
//                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0DDFC] text-3xl text-[#6D28A5] transition-colors duration-300 group-hover:bg-[#4A126F] group-hover:text-white">
//                     {feature.icon}
//                   </div>

//                   <h3 className="mt-5 font-bold leading-6 text-[#4A126F]">
//                     {feature.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-[#76647F]">
//                     {feature.text}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* 5. Vision & Mission — scrolling timeline */}
//       <section className="overflow-hidden bg-[#FCF9FF] py-16 sm:py-20">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
//           <div className="mb-12 text-center">
//             <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//               Our Purpose
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//             </span>
//             <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
//               Vision &amp; Mission
//             </h2>
//           </div>

//           <div className="relative mx-auto max-w-7xl">
//             {/* Timeline rail and scroll-responsive marker */}
//             <div aria-hidden="true" className="absolute bottom-20 left-1/2 top-20 hidden w-1 -translate-x-1/2 rounded-full bg-[#DCC0EF] lg:block">
//               <span
//                 className="absolute left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-[#4A126F] shadow-[0_4px_14px_rgba(74,18,111,0.3)] transition-[top] duration-700 ease-in-out"
//                 style={{ top: activeTimelineStep === 0 ? "22%" : "78%", transform: "translate(-50%, -50%)" }}
//               />
//             </div>

//             <div className="grid items-center gap-8 lg:grid-cols-[1fr_5rem_1fr] lg:gap-5">
//               <div data-vaisiri-timeline-step className="relative overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)]">
//                 <img
//                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"
//                   alt="Student reaching towards a goal at sunrise"
//                   className="h-64 w-full object-cover sm:h-80"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/35 to-transparent" />
//                 <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#4A126F] shadow">
//                   Our Vision
//                 </span>
//               </div>

//               <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
//                 <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeTimelineStep === 0 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
//               </div>

//               <article className="py-3 lg:py-10">
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">
//                   ✦
//                 </div>
//                 <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">
//                   Our Vision
//                 </span>
//                 <h3 className="mt-2 font-serif text-3xl font-black text-[#321047] sm:text-4xl">
//                   Inspiring Tomorrow’s Achievers
//                 </h3>
//                 <p className="mt-4 max-w-xl text-base leading-8 text-[#66576D] sm:text-lg">
//                   Driven by determination, progress, and a commitment to
//                   service, our vision is to nurture confident learners who
//                   grow into responsible individuals ready to make a positive
//                   difference in the world.
//                 </p>
//               </article>

//               <article data-vaisiri-timeline-step className="order-4 py-3 lg:order-none lg:py-10">
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">
//                   ◈
//                 </div>
//                 <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">
//                   Our Mission
//                 </span>
//                 <h3 className="mt-2 font-serif text-3xl font-black text-[#321047] sm:text-4xl">
//                   Learning With Purpose
//                 </h3>
//                 <p className="mt-4 max-w-xl text-base leading-8 text-[#66576D] sm:text-lg">
//                   We aim to provide supportive, quality education through
//                   dedicated teaching, strong academic foundations, personal
//                   guidance, and opportunities that help every student discover
//                   their potential and work towards their goals.
//                 </p>
//               </article>

//               <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
//                 <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeTimelineStep === 1 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
//               </div>

//               <div className="relative order-5 overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)] lg:order-none">
//                 <img
//                   src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85"
//                   alt="Students learning together in a classroom"
//                   className="h-64 w-full object-cover sm:h-80"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/35 to-transparent" />
//                 <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#4A126F] shadow">
//                   Our Mission
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* 6. Student Achievers — rotating groups of three cards */}
//       <section className="overflow-hidden bg-gradient-to-br from-[#4A126F] via-[#6D28A5] to-[#8B36B5] py-14 text-white sm:py-16">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-8">
//           <div className="flex flex-col items-center text-center">
//             <span className="inline-flex rounded-full border border-white/25 bg-[#4A126F] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-lg sm:text-sm">
//               What Students Say
//             </span>
//             <h2 className="mt-4 font-serif text-3xl font-black text-white sm:text-4xl">
//               ನಮ್ಮ ಹೆಮ್ಮೆ, ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
//               Our Pride, Our Students — celebrating progress from SSLC to PU.
//             </p>
//           </div>

//           <div className="relative mt-10">
//             <div
//               key={activeTestimonialGroup}
//               className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
//               style={{ animation: "testimonialsSlideIn 650ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
//               aria-live="polite"
//             >
//               {testimonials
//                 .slice(activeTestimonialGroup * 3, activeTestimonialGroup * 3 + 3)
//                 .map((student, index) => {
//                   const improvement = (student.pu - student.sslc).toFixed(2);
//                   return (
//                     <article
//                       key={student.name}
//                       className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#4A126F] text-white shadow-[0_18px_42px_rgba(20,5,35,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/45 hover:shadow-[0_24px_50px_rgba(20,5,35,0.38)]"
//                     >
//                       <div className="relative flex min-h-[115px] items-center gap-4 overflow-hidden bg-white p-4 text-[#4A126F] sm:p-5">
//                         <div className="absolute inset-y-0 right-0 w-1/3 bg-[#F0DDFC]" />
//                         <img
//                           src={student.image}
//                           alt={`${student.name} portrait placeholder`}
//                           className="relative z-10 h-30 w-30 shrink-0 rounded-full border-4 border-white object-cover shadow-md sm:h-30 sm:w-28"
//                           loading="lazy"
//                         />
//                         <div className="relative z-10 min-w-0">
//                           <span className="block text-[19px] font-extrabold uppercase tracking-[0.18em] text-[#8B36B5]">
//                             VAISIRI PU COLLEGE
//                           </span>
//                           <h3 className="mt-1 text-base font-black leading-tight text-[#321047] sm:text-lg">
//                             {student.name}
//                           </h3>
//                           <span className="mt-2 inline-flex rounded-full bg-[#4A126F] px-3 py-1 text-[10px] font-extrabold text-white">
//                             ನಮ್ಮ ಹೆಮ್ಮೆ
//                           </span>
//                         </div>
//                       </div>

//                       <div className="flex flex-1 flex-col p-5 sm:p-6">
//                         <p className="text-center font-serif text-xl font-black leading-tight text-white sm:text-2xl">
//                           ನಮ್ಮ ಹೆಮ್ಮೆ, ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ
//                         </p>
//                         <p className="mt-1 text-center text-xs font-medium text-purple-200">
//                           Our pride, our student
//                         </p>

//                         <div className="mt-5 space-y-4 rounded-xl border border-white/15 bg-white/5 p-4">
//                           <div>
//                             <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold sm:text-sm">
//                               <span className="text-purple-100">SSLC Percentage</span>
//                               <span className="text-white">{student.sslc.toFixed(2)}%</span>
//                             </div>
//                             <div className="h-3 overflow-hidden rounded-full bg-white/15">
//                               <div className="h-full rounded-full bg-[#DCC0EF] transition-all duration-700" style={{ width: `${student.sslc}%` }} />
//                             </div>
//                           </div>
//                           <div>
//                             <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold sm:text-sm">
//                               <span className="text-purple-100">PU Percentage</span>
//                               <span className="text-white">{student.pu.toFixed(2)}%</span>
//                             </div>
//                             <div className="h-3 overflow-hidden rounded-full bg-white/15">
//                               <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${student.pu}%` }} />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-[#4A126F]">
//                           <div>
//                             <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#8B36B5]">Percentage difference</span>
//                             <span className="mt-0.5 block text-xs text-[#76647F]">PU compared with SSLC</span>
//                           </div>
//                           <span className="shrink-0 text-xl font-black sm:text-2xl">+{improvement}%</span>
//                         </div>
//                         <p className="mt-4 text-center text-[10px] leading-4 text-purple-200">
//                           Demo content — replace student names, photos, and marks with verified college records.
//                         </p>
//                       </div>
//                     </article>
//                   );
//                 })}
//             </div>
//           </div>

//           <div className="mt-8 flex items-center justify-center gap-2.5" aria-label="Student achiever pages">
//             {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setActiveTestimonialGroup(index)}
//                 aria-label={`Show student group ${index + 1}`}
//                 aria-current={activeTestimonialGroup === index ? "true" : undefined}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   activeTestimonialGroup === index
//                     ? "w-8 bg-white"
//                     : "w-2.5 bg-white/45 hover:bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         </Container>
//         <style>{`
//           @keyframes testimonialsSlideIn {
//             from { opacity: 0; transform: translateX(42px); }
//             to { opacity: 1; transform: translateX(0); }
//           }
//         `}</style>
//       </section>

//       {/* 6. News and Media */}
//       <section className="bg-[#FCF9FF] py-16">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
//           <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <div>
//               <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700">
//                 Latest Updates
//               </span>

//               <h2 className="mt-4 text-3xl font-extrabold text-brand-800">
//                 News & Media
//               </h2>

//               <p className="mt-3 max-w-2xl leading-7 text-gray-600">
//                 Discover college news, student achievements, academic
//                 excellence, and memorable milestones.
//               </p>
//             </div>

//             <Link
//               to="/news"
//               className="shrink-0 rounded-xl bg-purple-700 px-6 py-3 text-center font-bold text-white hover:bg-brand-900"
//             >
//               View All →
//             </Link>
//           </div>

//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {newsItems.map((item) => (
//               <article
//                 key={item.title}
//                 className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-md"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-60 w-full object-cover"
//                   loading="lazy"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-lg font-extrabold text-brand-900">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-gray-600">
//                     {item.text}
//                   </p>

//                   <Link
//                     to="/news"
//                     className="mt-4 inline-block font-bold text-purple-700 hover:text-orange-500"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* 7. YouTube Videos */}
//       <section className="bg-white py-12">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
//           <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
//             <h2 className="mb-8 text-center text-3xl font-extrabold text-brand-900">
//               YouTube Videos
//             </h2>

//             <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
//               {videos.map((video) => (
//                 <div
//                   key={video.title}
//                   className="flex min-h-48 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-5 text-center text-white"
//                 >
//                   <span className="flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 text-2xl">
//                     ▶
//                   </span>

//                   <h3 className="mt-4 font-bold">
//                     {video.title}
//                   </h3>

//                   <p className="mt-2 text-sm text-gray-300">
//                     Add the college video link to display it here.
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-6 text-center text-sm text-gray-500">
//               Add your official YouTube video IDs to enable video playback.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* 8. Message From the Management — scroll-responsive timeline */}
//       <section className="overflow-hidden bg-[#FCF9FF] py-16 text-[#321047] sm:py-20">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
//           <div className="mb-12 text-center">
//             <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//               Leadership
//               <span className="h-0.5 w-7 bg-[#8B36B5]" />
//             </span>
//             <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
//               Message From the Management
//             </h2>
//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#76647F] sm:text-base">
//               A message of purpose, values, and commitment to every student’s future.
//             </p>
//           </div>

//           <div className="relative mx-auto max-w-7xl">
//             {/* Timeline rail and scroll-responsive marker */}
//             <div aria-hidden="true" className="absolute bottom-24 left-1/2 top-24 hidden w-1 -translate-x-1/2 rounded-full bg-[#DCC0EF] lg:block">
//               <span
//                 className="absolute left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-[#4A126F] shadow-[0_4px_14px_rgba(74,18,111,0.3)] transition-[top] duration-700 ease-in-out"
//                 style={{ top: activeManagementStep === 0 ? "22%" : "78%", transform: "translate(-50%, -50%)" }}
//               />
//             </div>

//             <div className="grid items-center gap-8 lg:grid-cols-[1fr_5rem_1fr] lg:gap-5">
//               {/* Founder & President: image left, message right */}
//               <div data-vaisiri-management-step className="relative overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)]">
//                 <img
//                   src={management[0].image}
//                   alt={management[0].name}
//                   className="h-72 w-full object-cover object-center sm:h-96"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/55 via-transparent to-transparent" />
//                 <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
//                   <h3 className="font-serif text-xl font-black text-[#321047] sm:text-2xl">{management[0].name}</h3>
//                   <p className="mt-1 font-bold text-[#6D28A5]">{management[0].role}</p>
//                   <p className="text-sm text-[#76647F]">{management[0].group}</p>
//                 </div>
//               </div>

//               <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
//                 <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeManagementStep === 0 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
//               </div>

//               <article className="py-3 lg:py-10">
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">✦</div>
//                 <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">Founder &amp; President</span>
//                 <h3 className="mt-2 font-serif text-2xl font-black text-[#321047] sm:text-3xl">{management[0].name}</h3>
//                 <p className="mt-1 font-semibold text-[#6D28A5]">{management[0].group}</p>
//                 <div className="mt-5 space-y-4 text-base leading-8 text-[#66576D] sm:text-lg">
//                   {management[0].paragraphs.map((paragraph, index) => (
//                     <p key={index}>{paragraph}</p>
//                   ))}
//                 </div>
//               </article>

//               {/* Secretary message */}
//               <article data-vaisiri-management-step className="order-4 py-3 lg:order-none lg:py-10">
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">◈</div>
//                 <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">Secretary</span>
//                 <h3 className="mt-2 font-serif text-2xl font-black text-[#321047] sm:text-3xl">{management[1].name}</h3>
//                 <p className="mt-1 font-semibold text-[#6D28A5]">{management[1].group}</p>
//                 <div className="mt-5 space-y-4 text-base leading-8 text-[#66576D] sm:text-lg">
//                   {management[1].paragraphs.map((paragraph, index) => (
//                     <p key={index}>{paragraph}</p>
//                   ))}
//                 </div>
//               </article>

//               <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
//                 <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeManagementStep === 1 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
//               </div>

//               <div className="relative order-5 overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)] lg:order-none">
//                 <img
//                   src={management[1].image}
//                   alt={management[1].name}
//                   className="h-72 w-full object-cover object-center sm:h-96"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/55 via-transparent to-transparent" />
//                 <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
//                   <h3 className="font-serif text-xl font-black text-[#321047] sm:text-2xl">{management[1].name}</h3>
//                   <p className="mt-1 font-bold text-[#6D28A5]">{management[1].role}</p>
//                   <p className="text-sm text-[#76647F]">{management[1].group}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* 9. Final Action Cards */}
//       <section className="bg-[#4A126F] py-12">
//         <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
//           <div className="grid gap-6 lg:grid-cols-3">
//             {closingCards.map((card, index) => (
//               <article
//                 key={card.title}
//                 className="flex flex-col items-center rounded-2xl border-t-4 border-orange-400 bg-white p-7 text-center shadow-lg"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl text-purple-700">
//                   {card.icon}
//                 </div>

//                 <h2 className="mt-5 text-xl font-extrabold text-brand-900">
//                   {card.title}
//                 </h2>

//                 <p className="mt-3 leading-6 text-gray-600">
//                   {card.text}
//                 </p>

//                 <Link
//                   to={card.link}
//                   className={`mt-6 rounded-full px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 ${
//                     index === 2
//                       ? "bg-orange-500 hover:bg-orange-600"
//                       : "bg-brand-900 hover:bg-purple-700"
//                   }`}
//                 >
//                   {card.button} →
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import Button from "../components/common/Button.jsx";

const programCards = [
  {
    title: "PU Programs",
    text: "Science: PCMB | PCMC",
    link: "/courses",
    color: "from-[#6D28A5] to-[#8B36B5]",
  },
  {
    title: "Gateway to Competitive & Professional Careers",
    text: "Preparing Future Achievers for NEET | JEE | KCET",
    link: "/courses",
    color: "from-[#4A126F] to-[#6D28A5]",
  },
  {
    title: "Beyond the Classroom Learning",
    text: "Crash Courses | Bridge Courses | Tally | Career Certification Programs",
    link: "/facilities",
    color: "from-[#8B36B5] to-[#A855C7]",
  },
  {
    title: "Experienced & Qualified Faculty",
    text: "Guided by Expert Educators Across Science Streams",
    link: "/about",
    color: "from-[#582184] to-[#321047]",
  },
];

const features = [
  {
    icon: "✦",
    title: "Morning Prayer, Yoga, and Meditation",
    text: "Sessions designed to promote focus, discipline, and mental well-being.",
  },
  {
    icon: "🎓",
    title: "Experienced Faculty",
    text: "Qualified educators with expertise in PU Board and competitive examinations.",
  },
  {
    icon: "🏆",
    title: "Competitive Exam Coaching",
    text: "Preparation support for NEET, JEE, and KCET.",
  },
  {
    icon: "♙",
    title: "Personalized Mentoring",
    text: "Academic guidance and career counselling to help students choose the right path.",
  },
  {
    icon: "♧",
    title: "Student Development",
    text: "Activities that encourage teamwork, leadership, and personal growth.",
  },
  {
    icon: "▣",
    title: "Modern Learning Facilities",
    text: "Learning spaces and resources designed to support academic excellence.",
  },
  {
    icon: "⚗",
    title: "Practical Learning",
    text: "Opportunities to strengthen concepts through practical and activity-based learning.",
  },
  {
    icon: "▤",
    title: "Academic Support",
    text: "Structured learning, revision, and assessment to help students progress.",
  },
];

const testimonials = [
  { name: "Student Achiever 01", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85", pu: 95.33, sslc: 82.80 },
  { name: "Student Achiever 02", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85", pu: 93.80, sslc: 79.40 },
  { name: "Student Achiever 03", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85", pu: 97.20, sslc: 88.60 },
  { name: "Student Achiever 04", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=85", pu: 94.60, sslc: 81.20 },
  { name: "Student Achiever 05", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85", pu: 92.40, sslc: 77.80 },
  { name: "Student Achiever 06", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85", pu: 96.10, sslc: 86.40 },
  { name: "Student Achiever 07", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=85", pu: 91.80, sslc: 80.20 },
  { name: "Student Achiever 08", image: "https://images.unsplash.com/photo-1504598588642-7d7b4f1e7b3b?auto=format&fit=crop&w=500&q=85", pu: 94.20, sslc: 83.60 },
  { name: "Student Achiever 09", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85", pu: 98.00, sslc: 89.20 },
  { name: "Student Achiever 10", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85", pu: 90.60, sslc: 76.40 },
  { name: "Student Achiever 11", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85", pu: 96.80, sslc: 87.40 },
  { name: "Student Achiever 12", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85", pu: 93.40, sslc: 80.80 },
];

const management = [
  {
    name: "SRI K. B. JAYANNA",
    role: "Founder & President",
    group: "Vidyavahini Group",
    image: "/images/management/president.jpg",
    paragraphs: [
      "It gives me immense pride to welcome students and parents to Vidyanidhi, Tumkur. Our vision is to provide an educational experience that goes far beyond academics—one that shapes character, nurtures leadership, and prepares young minds to face the challenges of the modern world with confidence and clarity.",
      "At Vidyanidhi, education is not merely the pursuit of marks; it is a journey of transformation. We strive to cultivate curiosity, compassion, and courage in every learner. Through a blend of rigorous academics, value-based learning, and holistic development, we aim to mould responsible citizens who think critically, act ethically, and lead with integrity.",
      "I express my heartfelt gratitude to parents for placing their trust in us. Together, let us work toward building a brighter future for our students and shaping citizens who will contribute meaningfully to society and the nation.",
    ],
  },
  {
    name: "SRI N. B. PRADEEP KUMAR",
    role: "Secretary",
    group: "Vidyavahini Group",
    image: "/images/management/secretary.jpg",
    paragraphs: [
      "Our institution is deeply committed to fostering excellence through quality education and holistic development. We believe that true education extends beyond textbooks—it is about cultivating curiosity, creativity, and character in every learner. At Vidyanidhi, we strive to create an inspiring environment where every student can realize their full potential academically, personally, and socially.",
      "Discipline, responsibility, and moral values form the foundation of our institutional philosophy. These principles guide students to become not only successful professionals but also compassionate individuals who contribute meaningfully to society. Through a balanced blend of rigorous academics and life-skill programs, we prepare our students to face the challenges of the modern world with confidence and resilience.",
      "As we continue to grow and evolve, our commitment remains steadfast—to provide an educational experience that shapes confident, disciplined, and value-driven individuals ready to contribute positively to the nation and the world.",
    ],
  },
];

const closingCards = [
  {
    icon: "🎓",
    title: "Blogs & Career Guidance",
    text: "Explore educational insights and career guidance for your academic journey.",
    button: "Explore Blogs",
    link: "/blogs",
  },
  {
    icon: "⌂",
    title: "Facilities",
    text: "Discover the learning facilities and student support available at our college.",
    button: "Explore Facilities",
    link: "/facilities",
  },
  {
    icon: "▣",
    title: "Admissions",
    text: "Take the next step towards your academic journey at VAISIRI PU College.",
    button: "Apply Now",
    link: "/admission",
  },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85",
    alt: "Students walking together on a college campus",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85",
    alt: "Teacher supporting students in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=85",
    alt: "Students learning together in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=2000&q=85",
    alt: "Students studying together",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    alt: "University campus building",
  },
];

const aboutImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
    alt: "College campus building",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
    alt: "Students on a college campus",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    alt: "Students learning in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
    alt: "Students studying together",
  },
];

let welcomePosterShownForPageLoad = false;

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [activeTestimonialGroup, setActiveTestimonialGroup] = useState(0);
  const [activeAboutImage, setActiveAboutImage] = useState(0);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [activeManagementStep, setActiveManagementStep] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const groupCount = Math.ceil(testimonials.length / 3);
    if (groupCount <= 1) return undefined;

    const testimonialIntervalId = window.setInterval(() => {
      setActiveTestimonialGroup((current) => (current + 1) % groupCount);
    }, 10000);

    return () => window.clearInterval(testimonialIntervalId);
  }, []);

  useEffect(() => {
    const aboutIntervalId = window.setInterval(() => {
      setActiveAboutImage((current) => (current + 1) % aboutImages.length);
    }, 4500);

    return () => window.clearInterval(aboutIntervalId);
  }, []);

  // Show once on the initial app load only. Navigating away and returning to Home
  // will not show it again. A full browser refresh resets this module-level flag.
  useEffect(() => {
    if (welcomePosterShownForPageLoad) return;

    welcomePosterShownForPageLoad = true;
    setShowWelcomePopup(true);

    // Intentionally do not clear this timeout during route unmounts or React StrictMode's
    // development effect replay; it must always dismiss the initial poster after 3 seconds.
    window.setTimeout(() => {
      setShowWelcomePopup(false);
    }, 3000);
  }, []);

  // Move the timeline marker between Vision and Mission as the user scrolls.
  useEffect(() => {
    const updateTimelineStep = () => {
      const steps = Array.from(document.querySelectorAll("[data-vaisiri-timeline-step]"));
      if (!steps.length) return;

      const targetY = window.innerHeight * 0.52;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - targetY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveTimelineStep(closestIndex);
    };

    window.addEventListener("scroll", updateTimelineStep, { passive: true });
    window.addEventListener("resize", updateTimelineStep);
    updateTimelineStep();

    return () => {
      window.removeEventListener("scroll", updateTimelineStep);
      window.removeEventListener("resize", updateTimelineStep);
    };
  }, []);

  // Keep the management timeline marker aligned with the message currently in view.
  useEffect(() => {
    const updateManagementTimeline = () => {
      const steps = Array.from(document.querySelectorAll("[data-vaisiri-management-step]"));
      if (!steps.length) return;

      const targetY = window.innerHeight * 0.52;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - targetY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveManagementStep(closestIndex);
    };

    window.addEventListener("scroll", updateManagementTimeline, { passive: true });
    window.addEventListener("resize", updateManagementTimeline);
    updateManagementTimeline();

    return () => {
      window.removeEventListener("scroll", updateManagementTimeline);
      window.removeEventListener("resize", updateManagementTimeline);
    };
  }, []);

  return (
    <>
      {showWelcomePopup && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#16091F]/70 px-5 backdrop-blur-[2px] animate-[welcomeOverlayIn_250ms_ease-out]"
        >
          <div className="relative w-full max-w-[560px] animate-[welcomePosterIn_450ms_cubic-bezier(0.2,0.8,0.2,1)]">
            {/* Decorative burst marks behind the poster */}
            <span aria-hidden="true" className="pointer-events-none absolute -left-5 top-8 h-2 w-16 rotate-[35deg] rounded-full bg-[#B65AD8] sm:-left-9 sm:w-24" />
            <span aria-hidden="true" className="pointer-events-none absolute -left-7 top-20 h-2 w-12 rotate-[20deg] rounded-full bg-[#7C35A8] sm:-left-12 sm:w-16" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-5 bottom-10 h-2 w-16 -rotate-[28deg] rounded-full bg-[#B65AD8] sm:-right-9 sm:w-24" />

            <div
              className="relative overflow-hidden border-[5px] border-[#7C287F] bg-white px-7 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.4)] sm:px-12 sm:py-12"
              style={{
                clipPath: "polygon(7% 5%, 29% 10%, 50% 0%, 69% 10%, 93% 5%, 89% 29%, 100% 50%, 89% 70%, 94% 94%, 69% 90%, 50% 100%, 30% 90%, 6% 95%, 11% 70%, 0% 50%, 11% 30%)",
              }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F2DDF8] text-4xl text-[#6D28A5] sm:h-20 sm:w-20 sm:text-5xl">
                ✦
              </div>
              <span className="mt-4 block text-xs font-extrabold uppercase tracking-[0.28em] text-[#8B36B5] sm:text-sm">
                Welcome to
              </span>
              <h2 className="mt-2 font-serif text-2xl font-black leading-tight text-[#321047] sm:text-4xl">
                VAISIRI PU College
              </h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#6B4C79] sm:text-base">
                Shape your tomorrow with knowledge, confidence, and opportunity.
              </p>
              <span className="mx-auto mt-5 inline-flex rounded-full bg-gradient-to-r from-[#42105F] to-[#8B36B5] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-md sm:text-sm">
                Admissions Open · 2026–2027
              </span>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes welcomeOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes welcomePosterIn {
          0% { opacity: 0; transform: scale(0.78) rotate(-3deg); }
          70% { opacity: 1; transform: scale(1.03) rotate(1deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
      `}</style>
      {/* 1. Admissions-inspired split Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#FCF9FF] text-[#321047]">
        <style>{`
          @keyframes admissionsPosterFloat {
            0%, 100% { transform: translateY(0) rotate(-1.5deg); box-shadow: 4px 5px 0 #D8B4EA, 0 12px 24px rgba(55,16,79,0.18); }
            50% { transform: translateY(-3px) rotate(-0.8deg); box-shadow: 4px 7px 0 #C79BE5, 0 15px 28px rgba(55,16,79,0.22); }
          }
          @keyframes posterShimmer {
            0%, 65%, 100% { background-position: 200% 0; }
            35% { background-position: -100% 0; }
          }
        `}</style>
        {/* Soft decorative background shapes */}
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#F1E2FC]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#E7D0F8]/70" />
        <div className="pointer-events-none absolute right-[-9rem] top-[-8rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[#4A126F]" />
        <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#7C35A8]" />

        {/* Horizontal pinned admissions announcement: compact card in the hero's top-right corner */}
        <div className="pointer-events-none absolute right-3 top-4 z-30 w-[min(21rem,calc(100%-1.5rem))] sm:right-6 sm:top-5 sm:w-[min(24rem,calc(100%-3rem))] lg:right-8 lg:top-5 lg:w-[min(26rem,calc(100%-4rem))]">
          <div className="pointer-events-auto relative animate-[admissionsPosterFloat_5s_ease-in-out_infinite] rounded-[3px] border border-[#E5C6F5] bg-[#FFFDFE] px-3 pb-3 pt-4 text-left shadow-[5px_6px_0px_#D8B4EA,0_16px_30px_rgba(55,16,79,0.22)] sm:px-4 sm:pb-3 sm:pt-5">
            {/* Pushpin moved to the top-right corner */}
            <span aria-hidden="true" className="absolute right-5 top-0 z-20 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white bg-gradient-to-br from-[#C084FC] via-[#7E22CE] to-[#4A126F] shadow-[0_3px_5px_rgba(49,16,71,0.35)] sm:right-6 sm:h-6 sm:w-6" />
            <span aria-hidden="true" className="absolute right-[2.05rem] top-1 z-10 h-3 w-1 rounded-full bg-[#6D28A5] shadow-sm sm:right-[2.55rem] sm:top-2" />
            {/* Small folded paper corner */}
            <span aria-hidden="true" className="absolute right-0 top-0 h-0 w-0 border-b-[14px] border-l-[14px] border-b-[#EAD7F8] border-l-transparent" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <span
                className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-[#EAD7F8]/70 to-transparent"
                style={{ animation: "posterShimmer 5s ease-in-out infinite" }}
              />
            </span>

            <div className="relative flex flex-col items-start">
              <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#80638E] sm:text-[10px] sm:tracking-[0.2em]">
                VAISIRI PU College
              </span>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-serif text-lg font-black leading-tight text-[#321047] sm:text-2xl">
                  Admissions <span className="text-[#6D28A5]">Open!</span>
                </span>
                <span className="inline-flex rounded-md bg-[#F0DDFC] px-2 py-1 text-[10px] font-extrabold tracking-wide text-[#4A126F] sm:text-xs">
                  2026 – 2027
                </span>
              </div>
              <span className="mt-1 block text-[11px] font-bold text-[#6D28A5] sm:text-xs">
                Science Stream · PCMB &amp; PCMC
              </span>
              <span className="mt-1 block text-[10px] leading-4 text-[#6B5A72] sm:text-xs sm:leading-5">
                Shape your tomorrow with learning and guidance.
              </span>
              <Link
                to="/admission"
                className="relative mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-3 py-1.5 text-[10px] font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
              >
                Enquire Now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-6 lg:!px-10">
          <div className="grid min-h-[540px] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-16">
            {/* Left: headline and calls to action */}
            <div className="relative z-10 mx-auto w-full max-w-2xl pt-48 text-center sm:pt-44 lg:mx-0 lg:pt-8 lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-[#6B4C79] sm:text-sm">
                <span className="h-0.5 w-7 bg-[#8B36B5]" />
                Shape Your Tomorrow
              </span>

              <h1 className="mt-5 font-serif text-4xl font-black leading-[1.04] tracking-tight text-[#321047] sm:text-5xl md:text-6xl">
                Discover Your Potential
                <span className="mt-2 block text-3xl font-extrabold leading-tight text-[#4A126F] sm:text-4xl md:text-5xl">
                  at VAISIRI PU College
                </span>
              </h1>



              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8 lg:mx-0">
                Build your future at VAISIRI PU College. Explore Science pathways, strengthen your academic foundations, and
                prepare for the next step with focused learning and guidance.
              </p>

              {/* Feature highlights */}
              <div className="mx-auto mt-7 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">♧</span>
                  <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Quality<br />Education</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">▤</span>
                  <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Academic<br />Guidance</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">♙</span>
                  <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Student<br />Development</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DDFC] text-xl text-[#6D28A5]">↗</span>
                  <span className="text-xs font-semibold leading-4 text-[#4A285C] sm:text-sm">Future Career<br />Pathways</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link to="/admission" className="inline-flex">
                  <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-purple-900/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:text-base">
                    Register Now <span aria-hidden="true">→</span>
                  </span>
                </Link>

                <Link to="/courses" className="inline-flex">
                  <span className="inline-flex items-center rounded-full border border-[#7C3AA5]/40 bg-white/80 px-6 py-3.5 text-sm font-bold text-[#582184] transition hover:bg-[#F1E2FC] sm:text-base">
                    Explore Courses
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: rotating education images in a decorative curved frame */}
            <div className="relative mx-auto flex min-h-[390px] w-full max-w-2xl items-center justify-center sm:min-h-[480px] lg:min-h-[560px]">
              <div className="absolute right-0 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full bg-[#D7B0F0] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]" />
              <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#4A126F] sm:h-[405px] sm:w-[405px] lg:h-[480px] lg:w-[480px]" />

              <div className="absolute right-0 top-1/2 h-[285px] w-[285px] -translate-y-1/2 overflow-hidden rounded-[48%_48%_18%_48%] border-4 border-white/80 shadow-2xl sm:h-[375px] sm:w-[375px] lg:h-[445px] lg:w-[445px]">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    aria-hidden={index !== activeHeroImage}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                      index === activeHeroImage ? "opacity-100" : "opacity-0"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/25 via-transparent to-white/5" />
              </div>

              {/* Floating graduation detail */}
              <div className="absolute bottom-5 left-1 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl sm:bottom-8 sm:left-0 sm:p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0DDFC] text-2xl text-[#6D28A5]">🎓</span>
                <span className="pr-2">
                  <span className="block text-sm font-extrabold text-[#321047]">Your Future Starts Here</span>
                  <span className="mt-0.5 block text-xs text-[#76647F]">VAISIRI PU College</span>
                </span>
              </div>

              {/* Slideshow indicators */}
              <div className="absolute bottom-0 right-4 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-md sm:bottom-2 sm:right-3">
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveHeroImage(index)}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={index === activeHeroImage ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeHeroImage
                        ? "w-7 bg-[#6D28A5]"
                        : "w-2.5 bg-[#C9B4D8] hover:bg-[#8B36B5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Programme and Service Cards */}
      <section className="bg-gray-50 py-8">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {programCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className={`flex min-h-40 flex-col rounded-lg bg-gradient-to-br ${card.color} p-5 text-white shadow-lg transition hover:-translate-y-1`}
              >
                <h2 className="text-lg font-extrabold leading-7">
                  {card.title}
                </h2>

                <p className="mt-2 whitespace-pre-line text-sm leading-5 text-white/95">
                  {card.text}
                </p>

                <span className="mt-auto pt-5 text-sm font-bold">
                  Discover More →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. About VAISIRI — introduction with rotating campus images */}
      <section className="overflow-hidden bg-[#FCF9FF] py-12 lg:py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: About Us content */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
                <span className="h-0.5 w-7 bg-[#8B36B5]" />
                About VAISIRI
              </span>

              <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#321047] sm:text-4xl lg:text-5xl">
                Who Are We?
              </h2>

              <p className="mt-5 text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8">
                VAISIRI PU College, Tumkur, is committed to providing quality
                pre-university education and helping students build strong
                academic foundations for their future.
              </p>

              <p className="mt-4 text-base leading-7 text-[#66576D] sm:text-lg sm:leading-8">
                With Science pathways, focused academic guidance,
                and preparation for board and competitive examinations, we
                encourage students to discover their strengths and work
                confidently towards their goals.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#E9D5F5] bg-white/90 p-4 shadow-sm">
                  <span className="text-sm font-extrabold text-[#4A126F]">
                    Strong Foundations
                  </span>
                  <p className="mt-1 text-sm leading-6 text-[#76647F]">
                    Build subject knowledge, confidence, and learning habits.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E9D5F5] bg-white/90 p-4 shadow-sm">
                  <span className="text-sm font-extrabold text-[#4A126F]">
                    Guided Preparation
                  </span>
                  <p className="mt-1 text-sm leading-6 text-[#76647F]">
                    Work towards board examinations and future opportunities.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#42105F] to-[#7027A1] px-6 py-3 font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Learn More About Us <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Right: rotating campus and learning images */}
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[#EAD7F8] sm:h-56 sm:w-56" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#D7B0F0]/80 sm:h-52 sm:w-52" />

              <div className="relative h-[300px] overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#4A126F] shadow-[0_24px_60px_rgba(74,18,111,0.22)] sm:h-[390px] lg:h-[470px]">
                {aboutImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    aria-hidden={index !== activeAboutImage}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                      index === activeAboutImage ? "opacity-100" : "opacity-0"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/65 via-[#321047]/5 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-purple-100">
                      Learn • Grow • Achieve
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                      Life at VAISIRI
                    </h3>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-2 backdrop-blur-md">
                    {aboutImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveAboutImage(index)}
                        aria-label={`Show campus image ${index + 1}`}
                        aria-current={index === activeAboutImage ? "true" : undefined}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeAboutImage
                            ? "w-6 bg-white"
                            : "w-2 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 top-6 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl sm:-left-5 sm:top-8 sm:px-5">
                <span className="block text-xs font-semibold text-[#80638E]">
                  Your Future Starts Here
                </span>
                <span className="mt-1 block text-sm font-extrabold text-[#4A126F]">
                  VAISIRI PU College
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Special Features */}
      <section className="bg-white py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="mb-5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
              Why Choose Us
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              Special Features
            </h2>
          </div>

          <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-[#76647F]">
            Everything we provide is designed to support academic excellence,
            personal growth, and a better learning experience.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white text-center transition duration-300 hover:-translate-y-1 hover:border-[#6D28A5] hover:bg-[#FCF9FF] hover:shadow-[0_16px_36px_rgba(74,18,111,0.14)]"
              >
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

                <div className="p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0DDFC] text-3xl text-[#6D28A5] transition-colors duration-300 group-hover:bg-[#4A126F] group-hover:text-white">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 font-bold leading-6 text-[#4A126F]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#76647F]">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Vision & Mission — scrolling timeline */}
      <section className="overflow-hidden bg-[#FCF9FF] py-16 sm:py-20">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
              Our Purpose
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Timeline rail and scroll-responsive marker */}
            <div aria-hidden="true" className="absolute bottom-20 left-1/2 top-20 hidden w-1 -translate-x-1/2 rounded-full bg-[#DCC0EF] lg:block">
              <span
                className="absolute left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-[#4A126F] shadow-[0_4px_14px_rgba(74,18,111,0.3)] transition-[top] duration-700 ease-in-out"
                style={{ top: activeTimelineStep === 0 ? "22%" : "78%", transform: "translate(-50%, -50%)" }}
              />
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_5rem_1fr] lg:gap-5">
              <div data-vaisiri-timeline-step className="relative overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85"
                  alt="Student reaching towards a goal at sunrise"
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/35 to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#4A126F] shadow">
                  Our Vision
                </span>
              </div>

              <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
                <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeTimelineStep === 0 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
              </div>

              <article className="py-3 lg:py-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">
                  ✦
                </div>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">
                  Our Vision
                </span>
                <h3 className="mt-2 font-serif text-3xl font-black text-[#321047] sm:text-4xl">
                  Inspiring Tomorrow’s Achievers
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#66576D] sm:text-lg">
                  Driven by determination, progress, and a commitment to
                  service, our vision is to nurture confident learners who
                  grow into responsible individuals ready to make a positive
                  difference in the world.
                </p>
              </article>

              <article data-vaisiri-timeline-step className="order-4 py-3 lg:order-none lg:py-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">
                  ◈
                </div>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">
                  Our Mission
                </span>
                <h3 className="mt-2 font-serif text-3xl font-black text-[#321047] sm:text-4xl">
                  Learning With Purpose
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#66576D] sm:text-lg">
                  We aim to provide supportive, quality education through
                  dedicated teaching, strong academic foundations, personal
                  guidance, and opportunities that help every student discover
                  their potential and work towards their goals.
                </p>
              </article>

              <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
                <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeTimelineStep === 1 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
              </div>

              <div className="relative order-5 overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)] lg:order-none">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85"
                  alt="Students learning together in a classroom"
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/35 to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#4A126F] shadow">
                  Our Mission
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Student Achievers — rotating groups of three cards */}
      <section className="overflow-hidden bg-gradient-to-br from-[#4A126F] via-[#6D28A5] to-[#8B36B5] py-14 text-white sm:py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-8">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-white/25 bg-[#4A126F] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-lg sm:text-sm">
              What Students Say
            </span>
            <h2 className="mt-4 font-serif text-3xl font-black text-white sm:text-4xl">
              ನಮ್ಮ ಹೆಮ್ಮೆ, ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
              Our Pride, Our Students — celebrating progress from SSLC to PU.
            </p>
          </div>

          <div className="relative mt-10">
            <div
              key={activeTestimonialGroup}
              className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
              style={{ animation: "testimonialsSlideIn 650ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
              aria-live="polite"
            >
              {testimonials
                .slice(activeTestimonialGroup * 3, activeTestimonialGroup * 3 + 3)
                .map((student, index) => {
                  const improvement = (student.pu - student.sslc).toFixed(2);
                  return (
                    <article
                      key={student.name}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#4A126F] text-white shadow-[0_18px_42px_rgba(20,5,35,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/45 hover:shadow-[0_24px_50px_rgba(20,5,35,0.38)]"
                    >
                      <div className="relative flex min-h-[115px] items-center gap-4 overflow-hidden bg-white p-4 text-[#4A126F] sm:p-5">
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#F0DDFC]" />
                        <img
                          src={student.image}
                          alt={`${student.name} portrait placeholder`}
                          className="relative z-10 h-30 w-30 shrink-0 rounded-full border-4 border-white object-cover shadow-md sm:h-30 sm:w-28"
                          loading="lazy"
                        />
                        <div className="relative z-10 min-w-0">
                          <span className="block text-[19px] font-extrabold uppercase tracking-[0.18em] text-[#8B36B5]">
                            VAISIRI PU COLLEGE
                          </span>
                          <h3 className="mt-1 text-base font-black leading-tight text-[#321047] sm:text-lg">
                            {student.name}
                          </h3>
                          <span className="mt-2 inline-flex rounded-full bg-[#4A126F] px-3 py-1 text-[10px] font-extrabold text-white">
                            ನಮ್ಮ ಹೆಮ್ಮೆ
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <p className="text-center font-serif text-xl font-black leading-tight text-white sm:text-2xl">
                          ನಮ್ಮ ಹೆಮ್ಮೆ, ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ
                        </p>
                        <p className="mt-1 text-center text-xs font-medium text-purple-200">
                          Our pride, our student
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/15 bg-white/5 p-4">
                          <div>
                            <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold sm:text-sm">
                              <span className="text-purple-100">SSLC Percentage</span>
                              <span className="text-white">{student.sslc.toFixed(2)}%</span>
                            </div>
                            <div className="h-3 overflow-hidden rounded-full bg-white/15">
                              <div className="h-full rounded-full bg-[#DCC0EF] transition-all duration-700" style={{ width: `${student.sslc}%` }} />
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold sm:text-sm">
                              <span className="text-purple-100">PU Percentage</span>
                              <span className="text-white">{student.pu.toFixed(2)}%</span>
                            </div>
                            <div className="h-3 overflow-hidden rounded-full bg-white/15">
                              <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${student.pu}%` }} />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-[#4A126F]">
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#8B36B5]">Percentage difference</span>
                            <span className="mt-0.5 block text-xs text-[#76647F]">PU compared with SSLC</span>
                          </div>
                          <span className="shrink-0 text-xl font-black sm:text-2xl">+{improvement}%</span>
                        </div>
                        <p className="mt-4 text-center text-[10px] leading-4 text-purple-200">
                          Demo content — replace student names, photos, and marks with verified college records.
                        </p>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2.5" aria-label="Student achiever pages">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTestimonialGroup(index)}
                aria-label={`Show student group ${index + 1}`}
                aria-current={activeTestimonialGroup === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonialGroup === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </Container>
        <style>{`
          @keyframes testimonialsSlideIn {
            from { opacity: 0; transform: translateX(42px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* 6. Message From the Management — scroll-responsive timeline */}
      <section className="overflow-hidden bg-[#FCF9FF] py-16 text-[#321047] sm:py-20">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-10">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#6D28A5] sm:text-sm">
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
              Leadership
              <span className="h-0.5 w-7 bg-[#8B36B5]" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              Message From the Management
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#76647F] sm:text-base">
              A message of purpose, values, and commitment to every student’s future.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Timeline rail and scroll-responsive marker */}
            <div aria-hidden="true" className="absolute bottom-24 left-1/2 top-24 hidden w-1 -translate-x-1/2 rounded-full bg-[#DCC0EF] lg:block">
              <span
                className="absolute left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-[#4A126F] shadow-[0_4px_14px_rgba(74,18,111,0.3)] transition-[top] duration-700 ease-in-out"
                style={{ top: activeManagementStep === 0 ? "22%" : "78%", transform: "translate(-50%, -50%)" }}
              />
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_5rem_1fr] lg:gap-5">
              {/* Founder & President: image left, message right */}
              <div data-vaisiri-management-step className="relative overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)]">
                <img
                  src={management[0].image}
                  alt={management[0].name}
                  className="h-72 w-full object-cover object-center sm:h-96"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                  <h3 className="font-serif text-xl font-black text-[#321047] sm:text-2xl">{management[0].name}</h3>
                  <p className="mt-1 font-bold text-[#6D28A5]">{management[0].role}</p>
                  <p className="text-sm text-[#76647F]">{management[0].group}</p>
                </div>
              </div>

              <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
                <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeManagementStep === 0 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
              </div>

              <article className="py-3 lg:py-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">✦</div>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">Founder &amp; President</span>
                <h3 className="mt-2 font-serif text-2xl font-black text-[#321047] sm:text-3xl">{management[0].name}</h3>
                <p className="mt-1 font-semibold text-[#6D28A5]">{management[0].group}</p>
                <div className="mt-5 space-y-4 text-base leading-8 text-[#66576D] sm:text-lg">
                  {management[0].paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>

              {/* Secretary message */}
              <article data-vaisiri-management-step className="order-4 py-3 lg:order-none lg:py-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DDFC] text-2xl text-[#4A126F] shadow-sm">◈</div>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8B36B5]">Secretary</span>
                <h3 className="mt-2 font-serif text-2xl font-black text-[#321047] sm:text-3xl">{management[1].name}</h3>
                <p className="mt-1 font-semibold text-[#6D28A5]">{management[1].group}</p>
                <div className="mt-5 space-y-4 text-base leading-8 text-[#66576D] sm:text-lg">
                  {management[1].paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <div className="hidden h-full items-center justify-center lg:flex" aria-hidden="true">
                <span className={`h-4 w-4 rounded-full border-4 border-white shadow transition-colors duration-500 ${activeManagementStep === 1 ? "bg-[#4A126F]" : "bg-[#C9A5E3]"}`} />
              </div>

              <div className="relative order-5 overflow-hidden rounded-2xl border border-[#E9D5F5] bg-white shadow-[0_18px_45px_rgba(74,18,111,0.10)] lg:order-none">
                <img
                  src={management[1].image}
                  alt={management[1].name}
                  className="h-72 w-full object-cover object-center sm:h-96"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321047]/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                  <h3 className="font-serif text-xl font-black text-[#321047] sm:text-2xl">{management[1].name}</h3>
                  <p className="mt-1 font-bold text-[#6D28A5]">{management[1].role}</p>
                  <p className="text-sm text-[#76647F]">{management[1].group}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Final Action Cards */}
      <section className="bg-[#4A126F] py-12">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {closingCards.map((card, index) => (
              <article
                key={card.title}
                className="flex flex-col items-center rounded-2xl border-t-4 border-orange-400 bg-white p-7 text-center shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl text-purple-700">
                  {card.icon}
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-brand-900">
                  {card.title}
                </h2>

                <p className="mt-3 leading-6 text-gray-600">
                  {card.text}
                </p>

                <Link
                  to={card.link}
                  className={`mt-6 rounded-full px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 ${
                    index === 2
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-brand-900 hover:bg-purple-700"
                  }`}
                >
                  {card.button} →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}