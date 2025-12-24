const experts = [
  { name: "Paul Hunkin", title: "Founder & CEO", avatar: "PH" },
  { name: "Amit Agarwal", title: "Director of Analytics", avatar: "AA" },
  { name: "Shivram Krishnan", title: "Head of Analytics", avatar: "SK" },
  { name: "James Maby", title: "Performance Analyst", avatar: "JM" },
  { name: "Dhiraj Naik", title: "Head of AI/ML", avatar: "DN" },
  { name: "Arjun Malhotra", title: "Co-founder", avatar: "AM" },
  { name: "Deepak Chandani", title: "Chief Data Officer", avatar: "DC" },
  { name: "Parikshit Nag", title: "Head of Engineering", avatar: "PN" },
];

const ExpertsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            CXO Cafe • Tech Conference
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Industry Expert Sessions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn directly from leaders at top tech companies
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-lg font-bold text-foreground ring-4 ring-border transition-all group-hover:ring-primary/30">
                {expert.avatar}
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground md:text-base">
                {expert.name}
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">{expert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
