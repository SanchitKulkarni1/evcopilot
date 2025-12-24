import { Users, TrendingUp, Award, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1.5 Lac+",
    label: "Learners Enrolled",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: TrendingUp,
    value: "1 Cr+",
    label: "Highest CTC",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Award,
    value: "120%",
    label: "Average Hike",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Briefcase,
    value: "10K+",
    label: "Career Transitions",
    color: "bg-accent/20 text-accent",
  },
];

const StatsSection = () => {
  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            9 years of transforming tech careers
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join thousands of professionals who have accelerated their careers with us
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover-lift"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}>
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="mb-1 text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
