import {
  CHECKOUT_URL,
  CTA_PRIMARY,
  CTA_SUPPORT,
  SUPPORT_URL,
  about,
  benefits,
  checklist,
  footer,
  hero,
  howItWorks,
  materials,
  ovenSection,
  painPoints,
  pricing,
  supportSection,
  techniques,
  testimonial,
} from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { CheckIcon } from "./Icons";
import { ImagePlaceholder } from "./ImagePlaceholder";

function SectionShell({
  children,
  tone = "base",
}: {
  children: React.ReactNode;
  tone?: "base" | "card";
}) {
  return (
    <section
      className={`px-6 py-16 sm:py-20 ${tone === "card" ? "bg-card" : ""}`}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-card-border bg-background/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <span className="font-display text-lg">{footer.brand}</span>
        <CtaButton href={CHECKOUT_URL} variant="secondary">
          {CTA_PRIMARY}
        </CtaButton>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <SectionShell>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg text-muted">{hero.subheadline}</p>
        <div className="mt-8 flex justify-center">
          <CtaButton href={CHECKOUT_URL}>{CTA_PRIMARY}</CtaButton>
        </div>
      </div>
    </SectionShell>
  );
}

export function PainPointsSection() {
  return (
    <SectionShell tone="card">
      <h2 className="font-display text-3xl">{painPoints.title}</h2>
      <p className="mt-4 text-muted">{painPoints.intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {painPoints.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-card-border bg-background px-4 py-3"
          >
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function TechniquesSection() {
  return (
    <SectionShell>
      <h2 className="font-display text-3xl">{techniques.title}</h2>
      <p className="mt-4 text-muted">{techniques.intro}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {techniques.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-card-border bg-card p-5"
          >
            <p className="font-display text-lg text-accent">{item.name}</p>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function OvenSection() {
  return (
    <SectionShell tone="card">
      <h2 className="font-display text-3xl">{ovenSection.title}</h2>
      <p className="mt-4 text-muted">{ovenSection.intro}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {ovenSection.options.map((option) => (
          <span
            key={option}
            className="rounded-full border border-card-border bg-background px-4 py-2 text-sm"
          >
            {option}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">{ovenSection.note}</p>
    </SectionShell>
  );
}

export function HowItWorksSection() {
  return (
    <SectionShell>
      <h2 className="font-display text-3xl">{howItWorks.title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {howItWorks.specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl border border-card-border bg-card p-4"
          >
            <p className="text-xs uppercase tracking-wide text-muted">
              {spec.label}
            </p>
            <p className="mt-1 font-display text-lg">{spec.value}</p>
          </div>
        ))}
      </div>
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
    </SectionShell>
  );
}

export function MaterialsSection() {
  return (
    <SectionShell tone="card">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <div>
          <h2 className="font-display text-3xl">{materials.title}</h2>
          <p className="mt-4 text-muted">{materials.intro}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {materials.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder
          label="Foto do kit de materiais (Drive Gabi Meraki)"
          className="aspect-square"
        />
      </div>
    </SectionShell>
  );
}

export function ChecklistSection() {
  return (
    <SectionShell>
      <h2 className="text-center font-display text-3xl">{checklist.title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {checklist.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function PricingSection() {
  return (
    <SectionShell tone="card">
      <div className="mx-auto max-w-md rounded-3xl border border-card-border bg-background p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {pricing.scarcityLabel}
        </p>
        <h2 className="mt-3 font-display text-2xl">{pricing.title}</h2>
        <p className="mt-4 font-display text-5xl">{pricing.price}</p>
        <p className="mt-1 text-muted">{pricing.installment}</p>
        <p className="mt-4 text-sm text-muted">{pricing.note}</p>
        <div className="mt-6 flex justify-center">
          <CtaButton href={CHECKOUT_URL}>{CTA_PRIMARY}</CtaButton>
        </div>
      </div>
    </SectionShell>
  );
}

export function BenefitsSection() {
  return (
    <SectionShell>
      <h2 className="font-display text-3xl">{benefits.title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {benefits.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function TestimonialSection() {
  return (
    <SectionShell tone="card">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <ImagePlaceholder
          label="Foto da aluna"
          className="mx-auto h-24 w-24 shrink-0 rounded-full sm:mx-0"
        />
        <div>
          <p className="font-display text-xl italic">“{testimonial.quote}”</p>
          <p className="mt-3 text-sm text-muted">{testimonial.author}</p>
        </div>
      </div>
    </SectionShell>
  );
}

export function AboutSection() {
  return (
    <SectionShell>
      <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
        <ImagePlaceholder
          label="Foto da Gabi Meraki"
          className="aspect-[4/5]"
        />
        <div>
          <h2 className="font-display text-3xl">{about.title}</h2>
          <ul className="mt-6 space-y-2 text-sm">
            {about.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function SupportSection() {
  return (
    <SectionShell tone="card">
      <div className="text-center">
        <h2 className="font-display text-2xl">{supportSection.title}</h2>
        <p className="mt-2 text-muted">{supportSection.text}</p>
        <div className="mt-6 flex justify-center">
          <CtaButton href={SUPPORT_URL} variant="secondary">
            {CTA_SUPPORT}
          </CtaButton>
        </div>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border px-6 py-8 text-center text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {footer.brand}. Todos os direitos
        reservados.
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
