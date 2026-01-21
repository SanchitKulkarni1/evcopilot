import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Check } from "lucide-react";

interface Program {
  title: string;
  description: string;
  duration: string;
  price: string;
  tags: { text: string; type: "default" | "weekend" }[];
  keyOutcomes: string[];
  buildsOn?: string;
}

const professionalPrograms: Program[] = [
  {
    title: "3-Day Intro Sprint",
    description: "Quick AI mindset reset for busy professionals. Perfect for testing the waters.",
    duration: "3 Days",
    price: "₹ 999",
    tags: [{ text: "Beginner", type: "default" }, { text: "Weekend-Only", type: "weekend" }],
    keyOutcomes: [
      "Prompt journal with 10+ refined prompts",
      "Personal AI action plan",
      "Basic understanding of AI agents"
    ]
  },
  {
    title: "14-Day Builder Kickstart",
    description: "Build basic AI prototypes with hands-on agent training. Learn to ship, not just study.",
    duration: "14 Days (2 Weekends)",
    price: "₹ 4,999",
    tags: [{ text: "Beginner", type: "default" }, { text: "Weekend-Only", type: "weekend" }],
    keyOutcomes: [
      "Mini AI prototype (chatbot or automation)",
      "Understanding of agent workflows",
      "Problem-framining toolkit"
    ],
    buildsOn: "3-Day Intro Sprint"
  },
];

const ProgramCard = ({ program }: { program: Program }) => (
  <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md h-full">
    <div>
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2">
          {program.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`rounded-full px-3 py-1 text-xs font-medium ${tag.type === "weekend"
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                }`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{program.description}</p>

      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{program.duration}</span>
        </div>
        <div className="font-semibold text-foreground">{program.price}</div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Key Outcomes</h4>
        <ul className="space-y-2">
          {program.keyOutcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div>
      {program.buildsOn && (
        <div className="mb-4 rounded-lg bg-yellow-50 px-4 py-2 text-xs text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
          <span className="font-medium">Builds on:</span> {program.buildsOn}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full">
          View Syllabus
        </Button>
        <Button className="w-full">
          Enroll Now
        </Button>
      </div>
    </div>
  </div>
);

const ProgramsSection = () => {
  return (
    <section id="programs" className="bg-secondary/20 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Programs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Industry-aligned courses designed to fast-track your career
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:max-w-5xl mx-auto">
          {professionalPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
