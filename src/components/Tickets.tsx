import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const Tickets = () => {
  const ticketTiers = [
    {
      name: "General Admission",
      price: "₹499",
      features: [
        "Full day access to all talks",
        "Morning tea and lunch included",
        "Event materials and badge",
        "Access to networking sessions",
      ],
      featured: false,
    },
    {
      name: "VIP Pass",
      price: "₹999",
      features: [
        "All General Admission benefits",
        "Premium seating in front rows",
        "Meet & greet with speakers",
        "Exclusive VIP networking lounge",
        "Event merchandise package",
      ],
      featured: true,
    },
    {
      name: "Student Pass",
      price: "₹299",
      features: [
        "Valid student ID required",
        "Full day access to all talks",
        "Lunch included",
        "Event badge and materials",
      ],
      featured: false,
    },
  ];

  return (
    <section id="tickets" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Your <span className="text-primary">Tickets</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at TEDxNITSILCHAR. Limited seats available!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden animate-fade-in-up ${
                tier.featured
                  ? "border-primary shadow-elegant scale-105 md:scale-110"
                  : "border-border shadow-soft"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Popular
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-black text-primary mb-2">{tier.price}</div>
                <p className="text-sm text-muted-foreground">per person</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-8">
                <Button
                  className={`w-full font-semibold ${
                    tier.featured
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            Early bird pricing available until December 31, 2025
          </p>
          <p className="text-sm text-muted-foreground">
            All ticket sales are final. By purchasing a ticket, you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
