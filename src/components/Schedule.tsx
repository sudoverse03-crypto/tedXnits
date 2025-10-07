import { Clock, Coffee, Mic, Users } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    {
      time: "9:00 AM",
      title: "Registration & Welcome",
      description: "Check-in, collect badges, and network with attendees",
      icon: Users,
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and introduction to TEDxNITSILCHAR",
      icon: Mic,
    },
    {
      time: "10:30 AM",
      title: "Session 1: Innovation",
      description: "Inspiring talks on technology and innovation",
      icon: Mic,
    },
    {
      time: "12:00 PM",
      title: "Networking Break",
      description: "Refreshments and connecting with speakers",
      icon: Coffee,
    },
    {
      time: "1:00 PM",
      title: "Session 2: Change",
      description: "Stories of transformation and impact",
      icon: Mic,
    },
    {
      time: "2:30 PM",
      title: "Lunch Break",
      description: "Catered lunch and informal discussions",
      icon: Coffee,
    },
    {
      time: "3:30 PM",
      title: "Session 3: Future",
      description: "Visionary talks about what's next",
      icon: Mic,
    },
    {
      time: "5:00 PM",
      title: "Closing & Networking",
      description: "Final remarks and social gathering",
      icon: Users,
    },
  ];

  return (
    <section id="schedule" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Event <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A full day of inspiring talks, engaging performances, and meaningful connections.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 md:mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex md:grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                    <div className="bg-card p-6 rounded-lg shadow-soft border border-border hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
