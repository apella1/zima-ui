import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

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
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/conditions"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Mental Health Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/therapists"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Find a Therapist
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/terms"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Emergency Contact</h3>
              <p className="text-muted-foreground">
                If you're in crisis, please call our 24/7 helpline:
                <br />
                <a
                  href="tel:1-800-273-8255"
                  className="font-semibold text-foreground"
                >
                  1-800-273-8255
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zima. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/zima"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/zima"
                className="text-muted-foreground hover:text-foreground"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/zima"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
