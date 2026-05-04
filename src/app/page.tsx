import Hero from "@/components/Hero";
import AISEO from "@/components/AISEO";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { HOME_PAGE_METADATA, BASE_VIEWPORT } from "@/constants/seo.constants";
import { HOMEPAGE_STRUCTURED_DATA } from "@/constants/schema.constants";

export const metadata = HOME_PAGE_METADATA;
export const viewport = BASE_VIEWPORT;

export default function Home() {
  return (
    <>
      <JsonLd data={HOMEPAGE_STRUCTURED_DATA} />
      <Hero />
      <SocialProof />
      <AISEO />
      <Testimonials />
    </>
  );
}
