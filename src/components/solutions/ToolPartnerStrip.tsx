import awsLogo from "@/assets/logos/aws.webp.asset.json";
import azureLogo from "@/assets/logos/azure.webp.asset.json";
import databricksLogo from "@/assets/logos/databricks.webp.asset.json";
import datarobotLogo from "@/assets/logos/datarobot.webp.asset.json";
import dockerLogo from "@/assets/logos/docker.webp.asset.json";
import googleCloudLogo from "@/assets/logos/google-cloud.webp.asset.json";
import kubernetesLogo from "@/assets/logos/kubernetes.webp.asset.json";
import openaiLogo from "@/assets/logos/openai.webp.asset.json";
import pythonLogo from "@/assets/logos/python.webp.asset.json";
import sapLogo from "@/assets/logos/sap.webp.asset.json";

type Partner = {
  name: string;
  alt: string;
  src: string;
};

const PARTNERS: Partner[] = [
  { name: "AWS", alt: "Amazon Web Services", src: awsLogo.url },
  { name: "Microsoft Azure", alt: "Microsoft Azure", src: azureLogo.url },
  { name: "Google Cloud", alt: "Google Cloud", src: googleCloudLogo.url },
  { name: "Databricks", alt: "Databricks", src: databricksLogo.url },
  { name: "SAP", alt: "SAP", src: sapLogo.url },
  { name: "Python", alt: "Python", src: pythonLogo.url },
  { name: "Docker", alt: "Docker", src: dockerLogo.url },
  { name: "Kubernetes", alt: "Kubernetes", src: kubernetesLogo.url },
  { name: "DataRobot", alt: "DataRobot", src: datarobotLogo.url },
  { name: "OpenAI", alt: "OpenAI", src: openaiLogo.url },
];

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div
      title={partner.alt}
      className="group flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-foreground/[0.04] px-6 shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--foreground)_10%,transparent)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-foreground/[0.07]"
    >
      <img
        src={partner.src}
        alt={partner.alt}
        className="h-7 w-auto max-w-full object-contain opacity-60 transition-opacity dark:invert duration-300 group-hover:opacity-100"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function ToolsPartnersStrip() {
  return (
    <section
      aria-label="Tools, partners and technology"
      className="border-t border-border bg-background/50 px-6 py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="tech-label shrink-0">Tools, Partner &amp; Technology</h2>

          <div className="relative w-full overflow-hidden md:w-auto md:flex-1">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-16"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-16"
            />

            <div
              className="marquee-track flex w-max animate-marquee items-center gap-5 py-1 hover:[animation-play-state:paused]"
              style={{ willChange: "transform" }}
            >
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <LogoCard key={`${partner.name}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
