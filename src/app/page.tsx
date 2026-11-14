import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Commodities } from "@/components/commodities";
import { TradingApproach } from "@/components/trading-approach";
import { MissionVision } from "@/components/mission-vision";
import { CorporateInfo } from "@/components/corporate-info";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div id="home" className="absolute top-0" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Commodities />
        <TradingApproach />
        <MissionVision />
        <CorporateInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
