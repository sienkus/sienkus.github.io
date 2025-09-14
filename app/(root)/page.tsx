import Image from "next/image";

export default function Home() {
  return (
    <section className="pink_container bg-[var(--color-background)] p-8 text-center">
        <h1 className="heading text-[var(--color-raisin-black)]">Welcome to My Website</h1>
        <p className="font-serif text-[var(--color-raisin-black)]">This is a sample paragraph using Noto Serif.</p>
    </section>
  );
}