import React, { useState } from "react";
import Header from "../components/Header"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed

const alwaysVisibleFaqs = [
  {
    question: "What is EvoCopilot?",
    answer: "EvoCopilot (or EVO) is India's first AI-Native Talent Ecosystem. We are not a traditional training institute. We are a 'Builder's' Factory that serves two purposes: we evolve engineers into AI Solution Architects using our proprietary EVO Methodology, and we connect these 'Day 1' Ready builders with high-growth startups and enterprises. Think of us as the bridge between raw talent and the future of building software."
  },
  {
    question: "Who is EvoCopilot for?",
    answer: `EvoCopilot works with:
- Students and professionals trying to understand where AI fits in their lives
- Founders building AI-first or AI-enabled products
- Companies adding AI to existing systems
- Teams looking to hire or develop AI-ready talent`
  },
];

const faqCategories = [
  {
    label: "Students & Job Seekers",
    faqs: [
      {
        question: "Is this just another coding bootcamp?",
        answer: "No. Bootcamps teach you syntax (how to write code). We teach you Vibe Coding (how to build products). In an EVO cohort, you won't spend months memorizing algorithms. You will spend 12 weeks using AI Agents (like Cursor, Claude, and GPT-4) to architect, build, and deploy real SaaS products. You graduate as a Builder, not just a junior developer."
      },
      {
        question: "Do I need a Computer Science degree to join?",
        answer: "No. You need logic, curiosity, and the hunger to build. The EVO methodology is designed to empower anyone tech or non-tech to create software. If you can think logically and explain a problem clearly, our AI workflows will handle the complex syntax for you."
      },
      {
        question: "I have a career gap or come from a non-tech background. Is EVO for me?",
        answer: "Absolutely. The playing field has been leveled. Traditional hiring looks at your past (degrees, years of exp). The EVO ecosystem looks at your present (what can you build right now?). By the end of our program, you will have a deployed portfolio of live products. That speaks louder than any resume gap."
      },
      {
        question: "Do you offer a Job Guarantee?",
        answer: "We offer placement support where we map you directly to our network of partner startups who are specifically looking for the exact skills we teach."
      },
      {
        question: "I am mid-career (40+ age). Is it too late to adapt to AI?",
        answer: "Not at all. Many of our participants are experienced professionals. AI is less about age and more about mindset. We focus on helping you integrate AI into how you already think and work."
      },
    ],
  },
  {
    label: "Founders & Growth Startups",
    faqs: [
      {
        question: "Can you help us hire AI talent?",
        answer: "Yes. We help founders think clearly about what roles they actually need, and we connect them with AI-ready builders who understand real product work."
      },
      {
        question: "Can EvoCopilot help me build an AI MVP?",
        answer: "Yes. We work with founders to design and build AI MVPs, validate ideas, and create systems that are meant to scale, not just demos or prototypes."
      },
      {
        question: "Do we build the product for you or guide your team?",
        answer: "Both. Depending on the situation, we may build alongside your team, lead the MVP build, or act as advisors helping you make the right technical and product decisions."
      },
      {
        question: "How does the 'Hire' process work?",
        answer: "We skip the resumes. Tell us your problem statement. We will deploy a 'Pod' of EVO builders to work on a micro-project for you (an MVP feature, a bug fix, or a prototype). You see their code, their speed, and their communication in real-time. If you like what you see, you hire them. Zero risk."
      },
      {
        question: "How is EvoCopilot different from AI agencies?",
        answer: "We focus on thinking, architecture, and long-term sustainability, not just quick delivery. Our goal is to help founders understand what they are building, not just receive code."
      },
      {
        question: "Why should I hire an EVO Architect over a standard CS Graduate?",
        answer: "Speed and ROI. A standard grad needs 6 months of training to be productive. An EVO Architect ships code on Day 1. Our builders are trained on modern stacks (AI Agents, RAG, Vector DBs, Next.js) and understand product thinking. They don't just complete tickets; they solve business problems."
      },
    ],
  },
  {
    label: "Enterprise Leaders",
    faqs: [
      {
        question: "Can Evo help upskill our existing engineering teams?",
        answer: "Yes. We offer the Enterprise Evolution Track. We come in and train your legacy developers on AI-Assisted Engineering. We teach them how to use tools like Copilot and Cursor to increase their shipping velocity by 30-50% while maintaining code security and quality standards."
      },
      {
        question: "Can EvoCopilot help us add AI to existing systems?",
        answer: "Yes. We specialize in integrating AI into real, messy, legacy systems responsibly and incrementally without breaking existing workflows."
      },
      {
        question: "Do you work with enterprise teams?",
        answer: "Yes. We work with enterprise teams on AI strategy, system design, pilot programs, and internal capability building."
      },
      {
        question: "Are you tool-agnostic?",
        answer: "Yes. We focus on solving problems, not selling tools or platforms. The right solution depends on the context."
      },
    ],
  },
  {
    label: "Learning & Programs",
    faqs: [
      {
        question: "What kind of learning programs does EvoCopilot offer?",
        answer: `Our programs focus on:

AI awareness and comfort
- Practical application in real roles
- Building AI products and systems
- Developing AI-ready builders and architects`
      },
      {
        question: "Are these programs online or offline?",
        answer: "We support a mix of formats depending on the program and audience. Details will be shared as programs are finalized."
      },
      {
        question: "When will courses and tracks be announced?",
        answer: "Programs and tracks are being rolled out progressively. If you're interested, we recommend staying connected or reaching out directly."
      },
    ],
  },
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(0); // Start with first category open

  return (
    <>
      <Header />
      <div className="bg-slate-950 min-h-screen flex flex-col items-center py-10 px-2 md:px-0">
        {/* Title and lead */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 mt-6 tracking-wide">We are building this thoughtfully</h1>
        <p className="max-w-3xl text-center text-lg text-gray-300 mb-8">
          EvoCopilot is coming together step by step. In the meantime, the FAQs below will give you a clear sense of what we're building, who it's for, and how we think about AI beyond the noise.
        </p>

        {/* Always visible FAQs */}
        <div className="w-full max-w-4xl mb-8 space-y-4">
          {alwaysVisibleFaqs.map((faq, idx) => (
            <div key={idx} className="border-b border-orange-500 py-5 px-2">
              <h2 className="text-xl font-semibold text-white mb-3">{faq.question}</h2>
              <p className="text-md text-gray-400 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Categories and Accordions */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row md:space-x-12">
          {/* Categories left sidebar */}
          <div className="md:w-1/3 flex flex-col space-y-4 mb-6 md:mb-0">
            {faqCategories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                className={`flex items-center justify-between text-left border-b ${
                  openCategory === idx ? 'border-orange-500' : 'border-gray-700'
                } text-lg font-medium tracking-wide px-1 py-4 ${
                  openCategory === idx ? 'text-orange-500' : 'text-white'
                } group focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all`}
              >
                <span>{cat.label}</span>
                <span className={`text-3xl transition-transform duration-200 ml-3 group-hover:text-orange-500 ${openCategory === idx ? 'rotate-45' : ''}`}>
                  {openCategory === idx ? '−' : '+'}
                </span>
              </button>
            ))}
          </div>
          {/* FAQ Questions/Answers for the selected category */}
          <div className="md:w-2/3 flex flex-col space-y-6">
            {openCategory !== null &&
              faqCategories[openCategory].faqs.map((faq, fidx) => (
                <div key={fidx} className="rounded-lg bg-slate-900/70 shadow-lg p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold mb-2 text-white">{faq.question}</h3>
                  <p className="text-gray-400 whitespace-pre-line">{faq.answer}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;