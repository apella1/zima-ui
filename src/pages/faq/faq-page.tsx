import { faqData } from "@/components/faq/faqData";
import { PageTitle } from "@/components/page-title/page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <>
      <PageTitle
        title="Frequently Asked Questions"
        description="Find answers to common questions about Zima's mental health resources and services."
      />
      <div className="container space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Find answers to common questions about Zima's mental health
            resources, community support, and professional services.
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
    </>
  );
}
