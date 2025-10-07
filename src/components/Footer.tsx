const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      { label: "About TEDx", href: "#about" },
      { label: "Speakers", href: "#speakers" },
      { label: "Schedule", href: "#schedule" },
      { label: "Tickets", href: "#tickets" },
    ],
    resources: [
      { label: "FAQ", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Sponsor Us", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Code of Conduct", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">TEDx</span>NITSILCHAR
            </h3>
            <p className="text-background/70 mb-4">
              Ideas worth spreading. Join us on February 12, 2026 for an inspiring day of innovation and connection.
            </p>
            <p className="text-sm text-background/60">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Event</h4>
            <ul className="space-y-2">
              {footerLinks.event.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-bold mb-4 text-center">Our Partners & Sponsors</h4>
          <p className="text-center text-background/60 text-sm">
            Interested in partnering with us?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {currentYear} TEDxNITSILCHAR. All rights reserved. | This independent TEDx event is operated under
            license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
