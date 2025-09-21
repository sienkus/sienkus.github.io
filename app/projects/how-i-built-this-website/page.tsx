import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">
        how I built this website: a Sunday, free tools, and a lot of learning
      </h1>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96">
          <Image
            src="/this-website.png"
            alt="How I built this website illustration"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="prose prose-lg max-w-none font-noto-serif text-justify">
            <p className="py-3">
              It started with a single thought on a slow Saturday: I should have a place where I can tell my story, share what I learn, and build things the way I want. What followed was one of those small projects that turned into a joyful obsession.
            </p>
            <p>
              That Sunday I sketched the ideas, argued about fonts and colors with my wife for a few minutes, and then just started. The first draft of the homepage was up before dinner. It felt like making a model from scratch, fast, messy, and somehow satisfying.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">the design: mockups in Canva, polish with free tools</h2>
            <p className="py-3">
              I began with a simple wireframe in Canva, hero image, short intro, and blocks for projects and posts. Canva made it quick to try layouts, swap images, and test typography, their free tier gives you plenty of features, and elements to get moving.
            </p>
            <p>
              Once the layout was set, I wanted a profile image that felt personal, not stock. I edited the portrait in GIMP (crop, color-correct, remove background), which is completely free and surprisingly powerful for simple photo work. Nothing paid, just time, patience, and a few tutorial videos.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">why Next.js + Tailwind? (short technical reasoning)</h2>
            <p className="py-2">
              I tried a couple of builders and stacks before landing on Next.js with Tailwind CSS. The reasons were practical:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Developer experience & flexibility:</strong> Next.js is a React framework that gives you everything you need to build interactive pages and scale later, routing, fast refresh, and options for static or server rendering. That let me start simple and still keep the door open for dynamic features.</li>
              <li><strong>Performance and deployment options:</strong> Next.js supports static site generation and incremental/static rendering patterns, which help pages load fast and scale cheaply. That matched my goal of a lightweight, responsive personal site.</li>
              <li><strong>Design speed with control:</strong> Tailwind is utility-first CSS, so I could build a clean, original look without fighting a framework. It keeps styles in HTML (so I see changes faster) and makes small UI effects easier to iterate on. The Tailwind + Next.js setup is straightforward to follow.</li>
            </ul>
            <p>
              In short: Next.js gave me structure and performance; Tailwind gave me design speed and fine control.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">tools & software I used (all free / low-cost)</h2>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Design & mockups:</strong> Canva (free tier).</li>
              <li><strong>Image editing:</strong> GIMP (free, open-source).</li>
              <li><strong>Code editor:</strong> Visual Studio Code (free, extensions for React/TS).</li>
              <li><strong>Framework & starter:</strong> Next.js (create-next-app) to bootstrap the project quickly.</li>
              <li><strong>Styling:</strong> Tailwind CSS (installed via the official Next.js guide).</li>
              <li><strong>Version control:</strong> Git + GitHub (free repos for public projects).</li>
            </ul>
            <p>
              Everything I used was free or offered a useful free tier, the only cost was my time.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">a short "how I built it" that you can copy</h2>
            <ol className="list-decimal list-inside mb-4">
              <li>Mock up in Canva: layout blocks, pick a color palette, export assets.</li>
              <li>Bootstrap site: npx create-next-app@latest my-site (or use the CLI) to get a Next.js starter.</li>
              <li>Install Tailwind: follow the Next.js + Tailwind guide to wire up Tailwind config and utility classes.</li>
              <li>Edit images in GIMP: crop, remove background, export optimized PNG/JPEG for the web.</li>
              <li>Develop pages: home, about, projects, blog. Keep components small and reusable.</li>
            </ol>
            <p>
              If you want, I can turn that into a separate step-by-step tutorial with commands and screenshots.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">why I did it all from scratch</h2>
            <p>
              Two reasons:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Learning'</strong> Building from the ground up forces you to learn every layer, from layout decisions to build configuration. The mistakes you make teach you faster than copy-pasting templates.</li>
              <li><strong>Creative freedom'</strong> When you own everything, you can experiment with small, original touches, a subtle hover, a layout quirk, an effect that feels personal. Tailwind made those experiments low-friction.</li>
            </ul>
            <p>
              There's real joy in iterating until something feels right.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">how satisfied I am, and why I'll keep iterating</h2>
            <p>
              I'm happy with the result: the site is fast, clean, and mine. But it's also a living project. As I learn new UI patterns or discover better performance tricks, I'll iterate, add a11y improvements, progressive images, small animations, or richer project pages. The playground is open.
            </p>
            <p className="py-3">
              ✌🏾 ~S.D.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
