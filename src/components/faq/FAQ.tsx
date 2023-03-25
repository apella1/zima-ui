export {};

export default function FAQ() {
  return (
    <section id="faq" className="flex flex-col p-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-center text-gray-900 sm:text-3xl title-font">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto text-lg leading-relaxed xl:w-2/4 lg:w-3/4">
            The most commonly asked questions related to mental wellbeing and
            other related conditions.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                What are some common signs of a mental health issue?{" "}
              </summary>

              <span>
                Some common signs of a mental health issue include changes in
                mood, behavior, or personality, social withdrawal, difficulty
                sleeping or concentrating, changes in appetite or weight, and
                feeling overwhelmed or hopeless.{" "}
              </span>
            </details>
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                What are some of the ways I improve my mental health?
              </summary>

              <span>
                There are several ways to improve your mental health, including
                getting enough sleep, exercising regularly, eating a healthy
                diet, reducing stress, practicing mindfulness and relaxation
                techniques, and seeking professional help if needed.{" "}
              </span>
            </details>
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                Is it normal when sometimes I feel anxious over an issue or even
                depressed?
              </summary>

              <span>
                Yes, it is normal to experience feelings of anxiety or
                depression from time to time. However, if these feelings persist
                and begin to interfere with your daily life, it may be a sign of
                a more serious mental health issue.{" "}
              </span>
            </details>
          </div>
          <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                How can I support a loved one with a mental health issue?
              </summary>

              <span className="px-4 py-2">
                Supporting a loved one with a mental health issue involves being
                a good listener, encouraging them to seek professional help,
                being patient and understanding, and offering practical support
                such as helping them find resources or attending appointments
                with them.
              </span>
            </details>
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                What are some common treatments for mental health issues?
              </summary>

              <span className="px-4 py-2">
                Common treatments for mental health issues include therapy,
                medication, and lifestyle changes such as exercise and dietary
                adjustments. The best treatment plan varies from person to
                person and should be determined by a mental health professional.
              </span>
            </details>
            <details className="mb-4">
              <summary className="px-4 py-2 font-semibold bg-gray-200 rounded-md">
                How can I reduce the stigma surrounding mental health issues?{" "}
              </summary>

              <span className="px-4 py-2">
                You can reduce the stigma surrounding mental health issues by
                speaking openly and honestly about mental health, challenging
                negative stereotypes and myths, educating yourself and others
                about mental health issues, and supporting those who are
                affected by mental health challenges.
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
