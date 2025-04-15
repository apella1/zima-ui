import { faqData } from "@/components/faq/faq.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Find answers to common questions about Zima's mental health resources,
          community support, and professional services.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(faqData).map(([key, section]) => (
          <div key={key} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.questions.map((faq, index) => (
                <AccordionItem key={index} value={`${key}-${index}`}>
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
        ))}
      </div>
    </div>
  );
}
