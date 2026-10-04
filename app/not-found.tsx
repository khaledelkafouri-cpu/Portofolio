import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-5 py-24 sm:px-8 sm:py-32">
      <p className="eyebrow text-stone">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-stone">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <ButtonLink href="/" iconEnd="arrowRight" className="mt-8">
        Back to home
      </ButtonLink>
    </section>
  );
}
