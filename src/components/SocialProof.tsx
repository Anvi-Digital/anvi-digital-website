import PageContainer from "./PageContainer";

const clients = [
  "GlobalOne",
  "NexTech",
  "Lumina",
  "AuraPay",
  "Vertex",
  "Stratos",
  "EonCloud",
  "PulseAI",
];

export default function SocialProof() {
  return (
    <PageContainer className="border-y border-surface-variant">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-5xl font-black uppercase">
            Trusted by 70+ Businesses
          </h2>
          <p className="text-on-surface-variant mt-4">
            From growing teams to established brands, we focus on what actually
            drives results.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-40 grayscale">
          {clients.map((client) => (
            <div
              key={client}
              className="h-12 flex items-center justify-center font-bold text-xl uppercase tracking-widest"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
