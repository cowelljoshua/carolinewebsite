import BlurText from "./BlurText";

export default function HeroTitle() {
  return (
    <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-navy md:text-7xl">
      <BlurText text="Caroline Thomas" delay={95} className="block text-white" direction="top" />
      <span className="sr-only"> </span>
      <BlurText text="Senior Nursing Student" delay={85} className="block text-teal" direction="bottom" />
    </h1>
  );
}
