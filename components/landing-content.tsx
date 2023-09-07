"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];
const services = [
  {
    name: "Celebrity Personas",
    avatar: "M",
    title:
      "<a href='https://celebritypersonas.com' target='new'>Chat with your favorite celebrity now.</a>",
    description:
      "Ever wanted to chat with your favorite celebrity? Now you can! Kinda...",
  },
  {
    name: "AI Assistant Builders",
    avatar: "J",
    title:
      "<a href='https://tidycal.com/geovanni/15-min-intro-call' target='new'>Book a free introductory call now.</a>",
    description:
      "We craft AI-powered assistants trained on your data that not only answer questions but engage in witty banter too!",
  },
  {
    name: "AI Consultations",
    avatar: "A",
    title:
      "<a href='https://tidycal.com/geovanni/15-min-intro-call' target='new'>Book a free introductory call now.</a>",
    description:
      "Transform your business with tailored AI solutions that evolve as fast as your goals do.",
  },
  {
    name: "Automate & Conquer",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni/15-min-intro-call' target='new'>Book a free introductory call now.</a>",
    description:
      "Let AI streamline your processes, so you can focus on conquering your industry.",
  },
  {
    name: "AI Development",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni/15-min-intro-call' target='new'>Book a free introductory call now.</a>",
    description:
      "Partner with us to turn AI dreams into reality. Outsource your AI development to us. From AI Assistants to custom solutions we can do it all.",
  },
  {
    name: "AI Tools",
    avatar: "M",
    title: "<a href='/sign-up'>Get Started Now For FREE</a>",
    description:
      "Try everything from image, video and music generation to code generation and conversations.",
  },
  {
    name: "Content Creation",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni/15-min-intro-call' target='new'>Book a free introductory call now.</a>",
    description:
      "Have a social media channel and need help generating content? Need more followers or ideas?",
  },
];
const whatWeDid = [
  {
    name: "Integrated Data Center Management",
    avatar: "M",
    title:
      "<a href='https://patents.justia.com/patent/9201702' target='new'>Integrated Data Center Management</a>",
    description:
      "Patent #9201702 granted on the interface that allows enterprises to manage their cloud resources in the browser.",
  },
  {
    name: "Cognitive UI",
    avatar: "M",
    title:
      "<a href='https://www.youtube.com/watch?v=20huYR5o214' target='new'>Demo Video</a>",
    description:
      "Developed a futuristic Cognitive UI display that changes based on a persons proximity and location to the screen.",
  },
  {
    name: "Blockchain Voting",
    avatar: "M",
    title: "",
    description:
      "Created the first voting platform that exceeds current election standards by huge margins flawlessly and securely. Guaranteeing perfect vote count, verifiable votes, instant reporting, etc.",
  },
  {
    name: "YouTube LoFi Music Channel",
    avatar: "M",
    title:
      "<a href='https://www.youtube.com/@MerlinMusic_' target='new'>LoFi Merlin Music</a>",
    description:
      "Our tools are used to create music and video content for this YouTube channel. We can do the same for you.",
  },
];

const bots = [
  {
    name: "Study Guide Assistant",
    avatar: "M",
    title:
      "<a href='https://creator.voiceflow.com/prototype/64e0113d2c78ff8ea562245f' target='new'>Try Now</a>",
    description:
      "Are you a student? Need help studying? This assistant will help you study for your next exam. Are you a teacher and need a new way to teach your students? This assistant will help you teach your students.",
  },
  {
    name: "Sales Rep Assistant",
    avatar: "M",
    title:
      "<a href='https://creator.voiceflow.com/prototype/64dc97bb9f9d270007f8f310' target='new'>Try Now</a>",
    description:
      "Do you need help getting sales or training your sales team? This assistant will help you get more sales and train your sales reps.",
  },
  {
    name: "Real Estate Lead Assistant",
    avatar: "M",
    title:
      "<a href='https://creator.voiceflow.com/prototype/64e004c8c445b8000749fb72' target='new'>Try Now</a>",
    description:
      "Do you need help getting leads for your real estate business? Schedule showings and see availability. Are you a real estate manager and need a new way to train your real estate agents? Tired of getting sales calls all time of the day? Have your assistant handle the calls for you.",
  },
  {
    name: "Personas",
    avatar: "M",
    title:
      "<a href='https://creator.voiceflow.com/prototype/64dc7d089f9d270007f8f194' target='new'>Try Now</a>",
    description:
      "Talk to an online persona trained on data from their social media accounts and public interviews. This persona based on Napheesa Collier's wiki page and interviews.",
  },
];
export const LandingContent = () => {
  return (
    <section className=" bodyGradient">
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-5">
          Buy an AI Assistant
        </h2>
        <h3 className="text-center text-2xl text-white font-bold mb-10">
          Trained on your data. 2 day delivery.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bots.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p
                      className="text-zinc-400 text-sm underline"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p
                      className="text-zinc-400 text-sm underline"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          What We Did
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {whatWeDid.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p
                      className="text-zinc-400 text-sm underline"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
