import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import ThreeDShowcase from "@/components/sections/ThreeDShowcase";
import WhoWeAre from "@/components/sections/WhoWeAre";
import AiNativeServices from "@/components/sections/AiNativeServices";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
import NotTypicalAgency from "@/components/sections/NotTypicalAgency";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConversionCta from "@/components/ai-services/ConversionCta";
import AiDevelopmentProcess from "@/components/sections/AiDevelopmentProcess";
import Services from "@/components/sections/Services";
import TechStackTable from "@/components/sections/TechStackTable";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import LetsGrowTogether from "@/components/sections/LetsGrowTogether";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Native Company | Webnox Digital",
  description:
    "Webnox Digital is an AI native company building AI agents, generative AI and enterprise AI software for 2,570+ clients in 20+ countries.",
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full bg-[#fdfaf6]">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Hero & Measurable AI Productivity */}
        <ThreeDShowcase />

        {/* 2. AI-Native Engineering Built on 15+ Years & The Numbers Behind Our Journey */}
        <WhoWeAre />
{/* 10. We Don’t Just Build for Clients. We Build Our Own Products. */}
        <Services />
        {/* 3. AI-Native Services Across Technology and Digital Growth */}
        <AiNativeServices />

        {/* 4. AI-Native Systems We Build & Operate */}
        <Solutions />

        {/* 5. What Businesses Say About Webnox AI Solutions */}
        <Testimonials />

        {/* 6. AI-Native Company vs. Traditional AI Company */}
        <NotTypicalAgency />

        {/* 7. Why Choose Webnox as Your AI-Native Partner */}
        <WhyChooseUs />

        {/* 8. Build, Launch and Grow With an AI-Native Partner */}
        <ConversionCta />

        {/* 9. From Business Requirement to Delivery Our Process */}
        <AiDevelopmentProcess />

        {/* 10. We Don’t Just Build for Clients. We Build Our Own Products. */}
        <Services />

        {/* 11. Technologies Powering Our AI and Software Solutions */}
        <TechStackTable />

        {/* 12. AI-Native Solutions for Every Industry */}
        <IndustrySolutions />

        {/* 13. Build Your Next AI Product with Webnox Digital */}
        <LetsGrowTogether />

        {/* 14. Frequently Asked Questions In Our AI Native Company */}
        <Faq />

        {/* 15. Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
