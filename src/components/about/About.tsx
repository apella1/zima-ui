import { LucideIcon } from "lucide-react";
import { aboutContent } from "./about.data";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center p-6 space-y-4 text-center rounded-lg bg-card">
    <div className="p-3 rounded-full bg-primary/10">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h4 className="text-xl font-semibold">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function About() {
  const { hero, features, mission, approach } = aboutContent;

  return (
    <section className="py-16 space-y-12">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {hero.title}
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          {hero.description}
        </p>
      </div>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{mission.title}</h3>
            <p className="text-muted-foreground">{mission.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{approach.title}</h3>
            <p className="text-muted-foreground">{approach.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
