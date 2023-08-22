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
    name: "Bot Builders",
    avatar: "J",
    title:
      "<a href='https://tidycal.com/geovanni' target='new'>Book a free introductory call now.</a>",
    description:
      "We craft AI-powered chatbots trained on your data that not only answer questions but engage in witty banter too!",
  },
  {
    name: "AI Evolution",
    avatar: "A",
    title:
      "<a href='https://tidycal.com/geovanni' target='new'>Book a free introductory call now.</a>",
    description:
      "Transform your business with tailored AI solutions that evolve as fast as your goals do.",
  },
  {
    name: "Automate & Conquer",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni' target='new'>Book a free introductory call now.</a>",
    description:
      "Let AI streamline your processes, so you can focus on conquering your industry.",
  },
  {
    name: "AI Futurists",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni' target='new'>Book a free introductory call now.</a>",
    description:
      "Partner with us to turn AI dreams into reality, pushing boundaries without fearing feathers ruffled.",
  },
  {
    name: "AI Tools",
    avatar: "M",
    title: "<a href='/dashboard'>Get Started Now For FREE</a>",
    description:
      "Try everything from image, video and music generation to code generation and conversations.",
  },
  {
    name: "Content Creation",
    avatar: "M",
    title:
      "<a href='https://tidycal.com/geovanni' target='new'>Book a free introductory call now.</a>",
    description:
      "Have a social media channel and need help generating content? Need more followers or ideas?",
  },
];
export const LandingContent = () => {
  return (
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
                    className="text-zinc-400 text-sm"
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
  );
};
