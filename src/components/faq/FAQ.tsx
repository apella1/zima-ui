import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Link } from "react-router";
import { homepageFaqs } from "./faqData";

export default function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-16">
      <div className="container space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Find quick answers to common questions about Zima and mental health
            support.
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
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

        <div className="pt-6 text-center">
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
