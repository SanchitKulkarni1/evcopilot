import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Award, Sparkles } from "lucide-react";

const professionalPrograms = [
  {
    title: "PG Certification in Data Analytics with GenAI",
    institute: "IIT Mandi - TIH",
    duration: "6 months",
    badge: "Certification with IIT",
    featured: true,
  },
  {
    title: "Professional Certification in Data Analytics",
    institute: "Vishlesan i-hub, IIT Patna",
    duration: "6 months",
    badge: "Certification with IIT",
  },
  {
    title: "Job Bootcamp - Full Stack Development",
    institute: "Industry Partners",
    duration: "4 months",
    badge: "Job Guarantee",
  },
];

const studentPrograms = [
  {
    title: "Certification in Full Stack Development",
    institute: "IIT Certification",
    duration: "6 months",
    badge: "Certification with IIT",
  },
  {
    title: "Certification in Data Structures & Algorithms",
    institute: "IIT Certification",
    duration: "4 months",
    badge: "Certification with IIT",
  },
  {
    title: "Certification in Generative AI",
    institute: "IIT Certification",
    duration: "3 months",
    badge: "Certification with IIT",
    featured: true,
  },
];

interface ProgramCardProps {
  title: string;
  institute: string;
  duration: string;
  badge: string;
  featured?: boolean;
}

const ProgramCard = ({ title, institute, duration, badge, featured }: ProgramCardProps) => (
  <div className="group flex items-center justify-between rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card">
    <div className="flex-1">
      <div className="mb-2 flex items-center gap-2">
        {featured && <Sparkles className="h-4 w-4 text-primary" />}
        <h4 className="font-medium text-foreground">{title}</h4>
      </div>
      <p className="mb-2 text-sm text-muted-foreground">{institute}</p>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Award className="mr-1 h-3 w-3" />
          {badge}
        </span>
        <span className="inline-flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {duration}
        </span>
      </div>
    </div>
    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
  </div>
);

const ProgramsSection = () => {
  const categories = ["All", "Data Analytics", "Generative AI", "Software Development"];

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

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                index === 0
                  ? "bg-foreground text-background"
                  : "border border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* For Working Professionals */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For Working Professionals</h3>
                <p className="text-sm text-muted-foreground">Upskill while you work</p>
              </div>
            </div>
            <div className="space-y-3">
              {professionalPrograms.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
            <Button variant="outline" className="mt-6 w-full">
              View All Programs
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* For College Students */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For College Students</h3>
                <p className="text-sm text-muted-foreground">Start your tech journey</p>
              </div>
            </div>
            <div className="space-y-3">
              {studentPrograms.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
            <Button variant="outline" className="mt-6 w-full">
              View All Programs
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
