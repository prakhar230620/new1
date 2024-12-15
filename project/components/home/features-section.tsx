import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Innovation First",
    description: "We leverage cutting-edge technology to deliver innovative solutions.",
  },
  {
    title: "Expert Team",
    description: "Our team of experts brings years of industry experience.",
  },
  {
    title: "Client Success",
    description: "Your success is our priority, with dedicated support every step of the way.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}