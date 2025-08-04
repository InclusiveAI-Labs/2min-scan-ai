import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Impact />
      <CallToAction />
    </main>
  );
};

export default Index;
