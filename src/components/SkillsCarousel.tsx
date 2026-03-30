"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Skill = {
  name: string;
  logo: string;
};

const skills: Skill[] = [
  { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Three.js", logo: "https://cdn.worldvectorlogo.com/logos/threejs-1.svg" },
  { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "GCP", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg" },
];

export default function SkillsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;

    const timer = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [api, isPaused]);

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="relative z-10 py-20 md:py-32 px-0 overflow-hidden">
      <div className="w-full">
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {duplicatedSkills.map((skill, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-0 basis-auto"
                >
                  <div className="group relative px-4">
                    <div 
                      className="liquid-glass rounded-2xl p-4 cursor-default flex flex-col items-center"
                    >
                      <img 
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-xs text-muted-foreground mt-2">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
