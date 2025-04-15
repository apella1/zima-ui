import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router";
import {
  EMERGENCY_CONTACT,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from "./footer.data";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Links & Info Section */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">
                {EMERGENCY_CONTACT.title}
              </h3>
              <p className="text-muted-foreground">
                {EMERGENCY_CONTACT.description}
                <br />
                <a
                  href={`tel:${EMERGENCY_CONTACT.phone}`}
                  className="font-semibold text-foreground"
                >
                  {EMERGENCY_CONTACT.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zima. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
