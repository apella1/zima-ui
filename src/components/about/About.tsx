import { LucideIcon } from "lucide-react";
import { aboutContent } from "./aboutData";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-card flex flex-col items-center space-y-4 rounded-lg p-6 text-center">
    <div className="bg-primary/10 rounded-full p-3">
      <Icon className="text-primary h-6 w-6" />
    </div>
    <h4 className="text-xl font-semibold">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function About() {
  const { hero, features, mission, approach } = aboutContent;

  return (
    <section className="space-y-12 py-16">
      <div className="container space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {hero.title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
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
