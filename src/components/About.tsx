import { Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Ideas Worth Spreading",
      description: "TEDx is a program of local, self-organized events that bring people together to share TED-like experiences.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with innovative thinkers, creators, and change-makers from across the region and beyond.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To spark conversation, connection, and community through thought-provoking talks and performances.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary">TEDx</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events 
            that bring people together to share a TED-like experience. At a TEDx event, TED Talks video 
            and live speakers combine to spark deep discussion and connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-hero text-white p-8 md:p-12 rounded-2xl shadow-elegant animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">TEDxNITSILCHAR</h3>
          <p className="text-lg leading-relaxed mb-6">
            TEDxNITSILCHAR is an independently organized TED event bringing together brilliant minds, 
            inspiring speakers, and curious individuals from the National Institute of Technology Silchar 
            and beyond. Our event aims to foster innovation, spark creativity, and build a community 
            dedicated to ideas that can change the world.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on <strong>February 12, 2026</strong>, as we explore groundbreaking ideas across 
            technology, science, design, and human potential. Be part of a movement that celebrates 
            curiosity, challenges conventions, and inspires action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
