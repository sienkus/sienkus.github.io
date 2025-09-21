import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-left">
        why I decided to work on AI safety (and why you might too)
      </h1>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96">
          <Image
            src="/future.png"
            alt="Future illustration"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="prose prose-lg max-w-none font-noto-serif text-justify">
            <p className="py-3">
              I grew up in Chad, a country many people can’t find on a map. Electricity was unreliable, internet even more so, but hope was abundant in our little household. My father, a scientist at heart and a farmer by necessity, believed in one thing above all: education.
            </p>
            <p className="py-3">
              He used to tell us stories of Japan and Singapore, how these once-struggling nations rose through science and technology. “STEM is the way forward,” he’d say, “the only way to change our future.” He sold what little he had, even his job security, so we could study, sometimes abroad. To him, knowledge was the greatest inheritance.
            </p>
            <p>
              That belief stuck with me. As a kid, I would tinker with broken radios and scrap metal, building small contraptions that probably amused other people more than they impressed them. But for me, it was magic, this feeling that technology could create something out of nothing.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-2">when everything changed</h2>
            <p className="py-3">
              In April 2022, my phone rang late at night. It was my sister, calling internationally. I knew before answering that it was bad news.
            </p>
            <p className="py-3">
              My father and my brother had suffered a terrible motorbike accident on a broken bridge, coming home from the fields. My father was airlifted to the capital city. I flew back from Niger, where I was working on AI for smart farming, ironically, research designed to help people like him.
            </p>
            <p className="py-3">
              I spent weeks at his bedside, mostly sleep-deprived. He survived, but he was left permanently disabled. That experience shook me. I kept asking myself: What’s the point of building technology if it can’t protect the people we love? If it doesn’t prevent these kinds of tragedies?
            </p>
            <p className="py-3">
              Shorlty before that time, a very brilliant person told me about existential risks from AI. At first, I dismissed it. But the more I thought about my father’s accident, the more it made sense. This wasn’t just about one bridge, one broken system. It was about the tools we build, the technologies we unleash, and whether they truly serve us, or harm us in ways we can’t undo.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-2">AI is already here</h2>
            <p className="py-3">
              For many people, AI feels abstract, futuristic. But look around, it’s already woven into our lives.
            </p>
            <ul className="list-disc list-inside mb-3">
              <li>When you unlock your phone with your face, that’s AI.</li>
              <li>When Netflix decides what you’ll binge next, that’s AI.</li>
              <li>Farmers in Kenya and Nigeria already use AI apps to detect crop diseases.</li>
              <li>Banks use it to block fraud, governments to track citizens, and militaries to target enemies.</li>
            </ul>
            <p className="py-3">
              Every time you check Google Maps, take a photo, or even scroll TikTok or Facebook, etc., AI is there, quietly shaping your choices.
            </p>
            <p className="py-3">
              It’s in our homes, our hospitals, our workplaces, and our schools. Our loved ones use it every single day. And it’s spreading fast.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-2">why i became concerned</h2>
            <p className="py-3">
              Here’s the thing that kept me up at night: many of the people building these systems, the experts closest to the breakthroughs, believe there’s a non-zero chance AI could cause catastrophic harm.
            </p>
            <p className="py-3 font-bold text-[var(--color-bittersweet)]">
              Non-zero.
            </p>
            <p className="py-3">
              It sounds small, but think about it this way: If your doctor said there’s a non-zero chance the vaccine in their hand was mislabeled, would you still take it?
            </p>
            <p className="py-3">
              That’s what experts are saying: we don’t fully understand these systems, and there’s a real possibility, maybe small, but not zero, that if we get it wrong, the damage could be irreversible. Not just bugs in a program. Not just one bad headline. But risks to economies, societies, and even the future of human life.
            </p>
            <p className="py-3">
              That’s not a chance I’m willing to ignore.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-2">choosing a different path</h2>
            <p className="py-3">
              Most harm doesn’t come from malice. My father’s accident wasn’t caused by anyone’s evil intent, it was neglect, poor planning, infrastructure that failed when it mattered most. AI harm may look the same: systems deployed too fast, with too little oversight, shaping lives before anyone realizes the consequences.
            </p>
            <p className="py-3">
              In 2023, I made a choice. I quit my job to work full-time on AI safety. Since then, I’ve been doing research on deceptive AI behavior, helping others build the skills they need, and working to create pathways so that more people can shape AI responsibly.
            </p>
            <p className="py-3">
              Because the truth is simple: AI is global. If we don’t shape its trajectory together, it will be shaped without us.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-2">a future worth fighting for</h2>
            <p className="py-3">
              I want children one day. And I don’t want them growing up in a world broken by the very technology we hoped would save us.
            </p>
            <p className="py-3">
              This isn’t about rejecting AI or fearing progress. It’s about care, responsibility, and courage. It’s about asking not only what’s possible, but what’s safe, and who gets to decide.
            </p>
            <p className="py-3">
              If you care about your future, your kids, your community, then you should care about how this story unfolds.
            </p>
            <p className="py-3">
              Because the future of AI isn’t written yet. And together, we have a chance to make sure it’s one we can live with, and be proud of.
            </p>
            <p className="py-3">
              Your story, your skills, your advocacy, these matter. Don’t just watch from the sidelines. Take part in shaping what comes next. I’ve chosen to dedicate my work to this. But you don’t need to be a researcher to make a difference. Whether you code, write, organize, or simply start conversations in your community, your contribution matters. Think about the world you want your children, or your future self, to inherit. Then take one step, however small, to help build it.
            </p>
            <p className="py-1">
              ✌🏾 ~S.D.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
