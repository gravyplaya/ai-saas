"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Card2,
  Card2Content,
  Card2Header,
  Card2Title,
} from "@/components/ui/card";

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
    title: "",
    description:
      "Ever wanted to chat with your favorite celebrity? Now you can! Kinda...",
    button: "https://celebritypersonas.com",
  },
  {
    name: "AI Assistant Builders",
    avatar: "J",
    title: "",
    description:
      "We craft AI-powered assistants trained on your data that not only answer questions but engage in witty banter too!",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
  {
    name: "AI Consultations",
    avatar: "A",
    title: "",
    description:
      "Transform your business with tailored AI solutions that evolve as fast as your goals do.",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
  {
    name: "Automate & Conquer",
    avatar: "M",
    title: "",
    description:
      "Let AI streamline your processes, so you can focus on conquering your industry.",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
  {
    name: "AI Development",
    avatar: "M",
    title: "",
    description:
      "Partner with us to turn AI dreams into reality. Outsource your AI development to us. From AI Assistants to custom solutions we can do it all.",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
  {
    name: "AI Tools",
    avatar: "M",
    title: "Get Started Now For FREE",
    description:
      "Try everything from image, video and music generation to code generation and conversations.",
    button: "/sign-up",
  },
  {
    name: "Content Creation",
    avatar: "M",
    title: "",
    description:
      "Have a social media channel and need help generating content? Need more followers or ideas?",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
  {
    name: "Business Process Automation",
    avatar: "M",
    title: "",
    description:
      "Let us automate your business processes so you can focus on what matters most.",
    button: "https://tidycal.com/geovanni/15-min-intro-call",
  },
];
const whatWeDid = [
  {
    name: "Integrated Data Center Management",
    avatar: "M",
    title: "Integrated Data Center Management",
    description:
      "Patent #9201702 granted on the interface that allows enterprises to manage their cloud resources in the browser.",
    button: "https://patents.justia.com/patent/9201702",
  },
  {
    name: "VoiceFlow Template",
    avatar: "M",
    title: "Lead Generation Assistant",
    description:
      "Create dynamic carousels, integrate Calendly, display YouTube and Loom videos, and qualify leads with an interactive quiz.",
    button: "https://www.voiceflow.com/marketplace/dynamic-carousels",
  },
  {
    name: "Cognitive UI Prototype",
    avatar: "B",
    title: "Cognitive UI Design",
    description:
      "Created a cognitive smart display for financial data interaction and privacy, without relying on cameras.",
    button: "https://www.youtube.com/watch?v=20huYR5o214",
  },
  {
    name: "YouTube LoFi Music Channel",
    avatar: "M",
    title: "LoFi Merlin Music",
    description:
      "Our tools are used to create music and video content for this YouTube channel. We can do the same for you.",
    button: "https://www.youtube.com/@MerlinMusic_",
  },
];

const bots = [
  {
    name: "Study Guide Assistant",
    avatar: "M",
    title: "Try Now",
    button: "https://creator.voiceflow.com/prototype/64e0113d2c78ff8ea562245f",
    features: [
      "Use your own lesson plans to teach",
      "Interactive with multimedia questions and answers",
      "Personalized learning experience",
    ],
    description:
      "Are you a student? Need help studying? Are you a teacher and need a new way to teach your students? This assistant will help you learn and teach your students.",
  },
  {
    name: "Sales Rep Assistant",
    avatar: "M",
    title: "Try Now",
    button: "https://creator.voiceflow.com/prototype/64dc97bb9f9d270007f8f310",
    features: [
      "Used for sales and training",
      "Knowledge Base based on website information",
      "Users can submit incident reports via WhatsApp or web.",
    ],
    description:
      "Do you need help getting sales or training your sales team? What about helping customers with product information? This assistant will help you get more sales and train your sales reps.",
  },
  {
    name: "Real Estate Lead Assistant",
    avatar: "M",
    title: "Try Now",
    button: "https://creator.voiceflow.com/prototype/64e004c8c445b8000749fb72",
    features: [
      "Get listings in realtime from the web",
      "Schedule Showings",
      "Agent Training",
      "Manage Sales Calls",
      "Client Onboarding",
      "Reccomendations",
    ],
    description:
      "Need help with lead generation, scheduling showings, agent training, or managing sales calls? Let your assistant handle it all!",
  },
  {
    name: "Custom Personas",
    avatar: "M",
    title: "Try Now",
    button: "https://creator.voiceflow.com/prototype/64dc7d089f9d270007f8f194",
    features: [
      "An online persona trained on social media accounts and public interviews.",
      "Engage in conversations with your favorite celebrity.",
      "Fully customizable.",
    ],
    description:
      "Talk to an online persona trained on data from their social media accounts and public interviews. This persona based on Napheesa Collier's wiki page and interviews.",
  },
];
export const LandingContent = () => {
  return (
    <section className=" bodyGradient">
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-5">
          Get Your AI Assistant Now
        </h2>
        <h3 className="text-center text-2xl text-white font-bold mb-10">
          Trained on your data. Customized for you. Fast delivery.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bots.map((item) => (
            <div
              key={item.description}
              className="block rounded-lg bodyGradient text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-center font-bold text-xl">
                Featured
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50 text-center break-normal">
                  {item.name}
                </h5>
                <p className="mb-4 text-base text-white dark:text-neutral-200">
                  {item.description}
                </p>
                <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="text-sm text-white dark:text-neutral-200">
                    <p>Features</p>
                    <ol className="list-decimal list-inside">
                      {item.features?.map((feature) => (
                        <li key="{feature}">{feature}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                <a
                  href={item.button}
                  className="block rounded bg-primary px-6 pb-2 pt-2.5 text-xs text-center font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  target="new"
                >
                  Try Now
                </a>
              </div>
            </div>
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
              className="bg-[#192339] border-none text-white shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <p className="pb-6">{item.description}</p>
                  <a
                    href={item.button}
                    className="block rounded bg-primary px-6 pb-2 pt-2.5 text-xs text-center font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    target="new"
                  >
                    Book a free Introductory call now
                  </a>
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
              className="bg-[#192339] border-none text-white  shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <p className="pb-6">{item.description}</p>
                  {item.button && (
                    <a
                      href={item.button}
                      className="block rounded bg-primary px-6 pb-2 pt-2.5 text-xs text-center font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      target="new"
                    >
                      Learn More
                    </a>
                  )}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
