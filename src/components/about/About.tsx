export {};



export default function About() {
  return (
    <section id="about" className="flex flex-col p-6">
      <h3 className="self-center text-4xl font-bold mb-4">About Zima</h3>
      <div className="p-2">
        <div className="my-4">
          <h4 className="text-xl font-bold mb-2">Our Mission</h4>
          <p className="text-lg mb-2">
            Zima is a platform designed to help raise mental health awareness and provide support to individuals seeking help. We believe that mental health is just as important as physical health and that everyone deserves access to the necessary resources to maintain a healthy mind.
          </p>
          <p className="text-lg mb-2">
            At Zima, we are committed to fostering a safe and supportive environment where people can connect, share their stories, and feel empowered to take control of their mental well-being.
          </p>
        </div>
        <div className="my-4">
          <h4 className="text-xl font-bold mb-2">What We Offer</h4>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Educational articles</li>
            <li className="text-lg mb-2">Daily activity trackers</li>
            <li className="text-lg mb-2">Licensed therapist connections</li>
            <li className="text-lg mb-2">Community of people with shared experiences</li>
          </ul>
        </div>
        <div className="my-4">
          <h4 className="text-xl font-bold mb-2">Our Approach</h4>
          <p className="text-lg mb-2">
            We understand that everyone’s mental health journey is unique, and we aim to provide a personalized experience that caters to each individual’s specific needs. Whether you are seeking professional support, looking for a community to connect with, or simply need some guidance on your mental health journey, Zima is here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
