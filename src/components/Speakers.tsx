import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Speaker applications opening soon",
      role: "Be part of our journey",
      bio: "We're looking for passionate speakers with ideas worth spreading.",
    },
  ];

  return (
    <section id="speakers" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the brilliant minds who will share their groundbreaking ideas and inspiring stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-hero flex items-center justify-center">
                  <Mic className="w-24 h-24 text-white/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-primary font-medium mb-3">{speaker.role}</p>
                  <p className="text-muted-foreground">{speaker.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-soft border border-border animate-fade-in-up text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Share Your Ideas?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            We're looking for passionate speakers with innovative ideas, inspiring stories, and unique 
            perspectives. If you have an idea worth spreading, we want to hear from you!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold text-lg px-8">
            Apply as Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
