import { PageTitle } from "@/components/page-title/page-title";
import { privacyPolicyData } from "./privacy-policy.data";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageTitle
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information."
      />
      <div className="container py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {privacyPolicyData.lastUpdated}
          </p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          {privacyPolicyData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
