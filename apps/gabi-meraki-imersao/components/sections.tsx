import Image from "next/image";
import {
  CHECKOUT_URL,
  CTA_PRIMARY,
  CTA_SUPPORT,
  SUPPORT_URL,
  about,
  benefits,
  checklist,
  dorMirror,
  footer,
  hero,
  howItWorks,
  materials,
  ovenSection,
  pricing,
  qualification,
  statHighlight,
  supportSection,
  techniques,
  testimonial,
  transition,
} from "@/lib/content";
import { CountdownBar } from "./CountdownBar";
import { CtaButton } from "./CtaButton";
import { CheckIcon, CrossIcon } from "./Icons";
import { Reveal } from "./Reveal";

function SectionShell({
  children,
  tone = "base",
  atmosphere = false,
}: {
  children: React.ReactNode;
  tone?: "base" | "card" | "ink";
  atmosphere?: boolean;
}) {
  const toneClass =
    tone === "card" ? "bg-card" : tone === "ink" ? "bg-ink text-ink-foreground" : "";
  return (
    <section className={`px-6 py-16 sm:py-20 ${toneClass} ${atmosphere ? "atmosphere" : ""}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

export function Header() {
  return (
    <>
      <CountdownBar />
      <header className="sticky top-0 z-10 border-b-2 border-card-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <Image
              src="/images/logo-imersao.webp"
              alt={footer.brand}
              fill
              className="object-contain"
            />
          </div>
          <CtaButton href={CHECKOUT_URL} variant="secondary">
            <span className="sm:hidden">Participar</span>
            <span className="hidden sm:inline">{CTA_PRIMARY}</span>
          </CtaButton>
        </div>
      </header>
    </>
  );
}

export function Hero() {
  const [prefix, suffix] = hero.headline.split(hero.headlineHighlight);
  return (
    <SectionShell atmosphere>
      <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <Reveal>
          <p className="inline-block bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink-foreground">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            {prefix}
            <span className="gradient-text">{hero.headlineHighlight}</span>
            {suffix}
          </h1>
          <p className="mt-6 text-lg text-muted">{hero.subheadline}</p>
          <ul className="mt-6 space-y-2">
            {hero.velocityBullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                <CheckIcon className="h-5 w-5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton href={CHECKOUT_URL} pulse>{CTA_PRIMARY}</CtaButton>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <div className="hard-shadow relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-card-border">
              <Image
                src="/images/aula-ao-vivo.png"
                alt={hero.photoCaption}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="glow-shadow absolute -top-5 -right-5 max-w-[11rem] rounded-lg border-2 border-card-border bg-accent px-4 py-3 text-accent-foreground">
              <p className="font-display text-2xl leading-none">{statHighlight.number}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide leading-tight">
                alunas já pintaram sem saber desenhar
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function StatHighlightSection() {
  return (
    <SectionShell tone="ink">
      <Reveal>
        <div className="text-center">
          <p className="font-display text-6xl sm:text-7xl">
            <span className="gradient-text">{statHighlight.number}</span>
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-ink-foreground/80 sm:text-base">
            {statHighlight.label}
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function DorMirrorSection() {
  return (
    <SectionShell tone="ink">
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-tight">{dorMirror.title}</h2>
      </Reveal>
      <div className="mt-8 space-y-4">
        {dorMirror.bubbles.map((item, index) => (
          <Reveal key={item} delay={index * 80}>
            <div
              className={`max-w-[85%] border border-card-border bg-bubble px-5 py-3 text-foreground shadow-lg ${
                index % 2 === 0 ? "chat-bubble mr-auto" : "chat-bubble--alt ml-auto text-right"
              }`}
            >
              <p className="text-sm sm:text-base">&ldquo;{item}&rdquo;</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function TransitionSection() {
  return (
    <SectionShell>
      <Reveal>
        <p className="text-center font-display text-2xl italic leading-snug sm:text-3xl">
          {transition.text}
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function TechniquesSection() {
  return (
    <SectionShell tone="card">
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-tight">{techniques.title}</h2>
        <p className="mt-4 text-muted">{techniques.intro}</p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {techniques.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 80}>
            <div className="h-full rounded-lg border-2 border-card-border bg-background p-5">
              <p className="font-display text-lg text-gold-text">{item.name}</p>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function OvenSection() {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-tight">{ovenSection.title}</h2>
        <p className="mt-4 text-muted">{ovenSection.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {ovenSection.options.map((option) => (
            <span
              key={option}
              className="rounded-md border-2 border-card-border bg-card px-4 py-2 text-sm font-semibold"
            >
              {option}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{ovenSection.note}</p>
      </Reveal>
    </SectionShell>
  );
}

export function HowItWorksSection() {
  return (
    <SectionShell tone="card">
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-tight">{howItWorks.title}</h2>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {howItWorks.specs.map((spec, index) => (
          <Reveal key={spec.label} delay={index * 80}>
            <div className="rounded-lg border-2 border-card-border bg-background p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{spec.label}</p>
              <p className="mt-1 font-display text-lg">{spec.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 text-muted">{howItWorks.classesNote}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-semibold">{howItWorks.format.title}</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {howItWorks.format.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">{howItWorks.support.title}</p>
            <p className="mt-2 text-sm text-muted">{howItWorks.support.text}</p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function MaterialsSection() {
  return (
    <SectionShell>
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-tight">{materials.title}</h2>
          <p className="mt-4 text-muted">{materials.intro}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {materials.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <div className="hard-shadow relative aspect-square overflow-hidden rounded-lg border-2 border-card-border">
            <Image
              src="/images/kit-meraki.png"
              alt="Kit de materiais Meraki entregue em casa"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function ChecklistSection() {
  return (
    <SectionShell tone="card">
      <Reveal>
        <h2 className="text-center font-display text-3xl uppercase tracking-tight">{checklist.title}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {checklist.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionShell>
  );
}

export function BenefitsSection() {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="font-display text-3xl uppercase tracking-tight">{benefits.title}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {benefits.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionShell>
  );
}

export function QualificationSection() {
  return (
    <SectionShell tone="card">
      <Reveal>
        <h2 className="text-center font-display text-3xl uppercase tracking-tight">{qualification.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border-2 border-card-border bg-accent/10 p-5">
            <p className="font-display text-lg">{qualification.isFor.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {qualification.isFor.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-lg border-2 border-card-border bg-ink/40 p-5">
            <p className="font-display text-lg">{qualification.isNotFor.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {qualification.isNotFor.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CrossIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function TestimonialSection() {
  return (
    <SectionShell tone="ink" atmosphere>
      <Reveal>
        <div className="hard-shadow mx-auto max-w-2xl rounded-lg border-2 border-card-border bg-card p-8 text-foreground">
          <p className="font-display text-2xl leading-snug text-gold-text">&ldquo;</p>
          <p className="-mt-4 font-display text-xl italic leading-snug">{testimonial.quote}</p>
          <p className="mt-4 text-sm text-muted">{testimonial.author}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function PricingSection() {
  return (
    <SectionShell>
      <Reveal>
        <div className="hard-shadow mx-auto max-w-md rounded-lg border-2 border-card-border bg-card p-8 text-center">
          <p className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
            {pricing.scarcityLabel}
          </p>
          <h2 className="mt-4 font-display text-2xl uppercase tracking-tight">{pricing.title}</h2>
          <p className="mt-4 font-display text-5xl">
            <span className="gradient-text">{pricing.installment}</span>
          </p>
          <p className="mt-1 text-muted">ou {pricing.price} à vista</p>
          <p className="mt-4 text-sm text-muted">{pricing.note}</p>
          <div className="mt-6 flex justify-center">
            <CtaButton href={CHECKOUT_URL} pulse>{CTA_PRIMARY}</CtaButton>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function AboutSection() {
  return (
    <SectionShell tone="card">
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl uppercase tracking-tight">{about.title}</h2>
          <ul className="mt-6 space-y-2 text-left text-sm">
            {about.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function SupportSection() {
  return (
    <SectionShell>
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-2xl uppercase tracking-tight">{supportSection.title}</h2>
          <p className="mt-2 text-muted">{supportSection.text}</p>
          <div className="mt-6 flex justify-center">
            <CtaButton href={SUPPORT_URL} variant="secondary">
              {CTA_SUPPORT}
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-footer px-6 py-8 text-center text-xs text-footer-foreground/80">
      <p>
        © {new Date().getFullYear()} {footer.brand}. Todos os direitos reservados.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="/politica-de-privacidade" className="underline">
          Política de Privacidade
        </a>
        <a href="/termos-de-uso" className="underline">
          Termos de Uso
        </a>
      </div>
    </footer>
  );
}
