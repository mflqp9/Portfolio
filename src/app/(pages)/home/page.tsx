import HeroSection from "@/components/hero/HeroSection";
import Skills from "@/components/skills/Skills";
import { choosenTheme } from "@/components/util/theme";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Skills theme={choosenTheme} />
    </div>
  );
};

export default HomePage;
