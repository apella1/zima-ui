import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";
import { homepageFaqs } from "./faq.data";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-muted/50">
      <div className="container space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Find quick answers to common questions about Zima and mental health
            support.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {homepageFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center pt-6">
          <Link
            to="/faq"
            className="text-primary hover:text-primary/90 font-medium"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
