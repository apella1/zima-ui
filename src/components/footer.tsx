import { Link } from "react-router";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ContactForm } from "./footer/contact-form";
import {
  EMERGENCY_CONTACT,
  FOOTER_SECTIONS,
  SOCIAL_LINKS
} from "./footer/footer.data";

const ScrollToTopLink = ({
  to,
  children,
  className
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default function Footer() {
  useScrollTop();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm />

          {/* Links & Info Section */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <ScrollToTopLink
                          to={link.href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {link.label}
                        </ScrollToTopLink>
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
                  className="text-foreground font-semibold"
                >
                  {EMERGENCY_CONTACT.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
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
