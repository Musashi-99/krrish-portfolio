import { LiquidButton } from "@/components/ui/liquid-glass-button";

const skills = ["Python", "FastAPI", "Figma", "Three.js", "AWS"];

export default function SkillsShowcase() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      {skills.map((skill) => (
        <LiquidButton
          key={skill}
          className="text-white text-sm font-medium rounded-full px-6 py-2.5"
        >
          {skill}
        </LiquidButton>
      ))}
    </div>
  );
}
