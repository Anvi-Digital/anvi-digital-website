import PageContainer from "./PageContainer";
import ContactLink from "@/components/ContactLink";

export default function Hero() {
  return (
    <PageContainer className="pt-6">
      <div className="mt-auto w-full">
        {/* <div className="mb-8">
          <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
            SEO. PAID MEDIA. PERFORMANCE.
          </span>
        </div> */}

        <h1 className="text-giant font-black uppercase mb-12">
          Stop Buying
          <br />
          <span className="text-primary-container">Leads.</span> Start
          <br />
          Owning <span className="text-secondary">Growth.</span>
        </h1>

        <div className="stagger-grid">
          <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
            <p className="text-base md:text-3xl font-light leading-snug mb-8">
              Build a reliable pipeline with SEO and paid media working
              together, not against each other.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
              <ContactLink className="bg-on-background text-surface px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-secondary text-center inline-block">
                Start Growing
              </ContactLink>
              <a
                href="#ai-seo"
                className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
