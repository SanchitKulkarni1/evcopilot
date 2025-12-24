import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto flex min-h-[90vh] items-center px-4 py-20 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up">
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                🚀 Transform Your Career
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Get the career you deserve,{" "}
              <span className="text-gradient">faster</span>
            </h1>

            <p className="animate-fade-up-delay-2 mb-8 max-w-lg text-lg text-muted-foreground md:text-xl">
              Master AI/ML, Full Stack Development, and Data Science with industry experts. Join 10,000+ professionals who transformed their careers.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Explore Programs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <span className="text-lg">🎓</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">10K+</p>
                  <p className="text-xs text-muted-foreground">Placed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">IIT</p>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">4.8/5</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
              
              {/* Dashboard Mockup */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/70" />
                  <div className="h-3 w-3 rounded-full bg-primary/70" />
                  <div className="h-3 w-3 rounded-full bg-accent/70" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-1/2 rounded bg-muted" />
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-secondary p-4">
                      <div className="mb-2 h-8 w-8 rounded-lg bg-primary/30" />
                      <div className="h-3 w-full rounded bg-muted" />
                    </div>
                    <div className="rounded-xl bg-secondary p-4">
                      <div className="mb-2 h-8 w-8 rounded-lg bg-accent/30" />
                      <div className="h-3 w-full rounded bg-muted" />
                    </div>
                  </div>
                  <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-8 -top-8 rounded-xl border border-border bg-card p-4 shadow-xl">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-xl">
                <p className="text-2xl font-bold text-accent">1Cr+</p>
                <p className="text-xs text-muted-foreground">Highest CTC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
