import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">
        why i decided to build this website
      </h1>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96">
          <Image
            src="/personal-space.png"
            alt="Personal space illustration"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="prose prose-lg max-w-none font-noto-serif text-justify">
            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">1. to tell my own story</h2>
            <p>
              I’ve learned the hard way that if you don’t tell your own story, someone else will, and they may not get it right. I’ve seen people’s lives described in ways that are incomplete, or worse, misleading. It happened to me too: once I was invited by an embassy to meet an ambassador for my academic excellence. A few days later, I found a post about me on their social media. It wasn’t the entire story, it didn’t capture what I deeply care about. It felt like someone else was shaping my story for their own interests.
            </p>
            <p className="py-3">
              I don’t want that. I have values and principles, truth, honesty, integrity, respect, and I want those to guide how my story is told. This website is my way of making sure that what I share with the world is authentic, accurate, and in my own words.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">2. to create a personal space for my thoughts</h2>
            <p>
              It’s hard nowadays to find a space that truly feels yours. Social media is crowded with algorithms, trends, and rules that often bend reality. This website is my own corner of the internet, a place where I can write freely, reflect openly, and share my experiences without filtering them through the lens of an organization, a platform, or anyone else. Here, I get to be myself.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">3. to share knowledge and give back</h2>
            <p>
              I’ve benefited so much from the knowledge freely shared by others, books, talks, blog posts, even strangers on the internet who wrote something that changed my perspective. I feel an obligation to give back. Through this website, I want to share not only what I’ve learned but also the mistakes I’ve made, so maybe others won’t have to repeat them. If even a handful of people find something here that makes their life a little better, it will be worth it.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">4. to hold myself accountable</h2>
            <p>
              I think of my life as a kind of ongoing experiment: I try things, I learn, I adapt, I grow. But experiments need documentation. This website is a way to track my journey, to reflect on progress, and to remind myself of the path I’ve chosen. It’s not about sharing everything, I value privacy, but it is about being honest with myself, and building a record that I (and maybe one day my children) can look back on.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">5. because it’s fun</h2>
            <p>
              Honestly? Building this website was fun. I enjoyed the process, choosing colors, designing the layout, experimenting with tools, and seeing it all come together. It reminded me why I love creating things from scratch. Sometimes, joy itself is a good enough reason.
            </p>

            <h2 className="text-2xl font-montserrat font-semibold mt-8 mb-4">closing thoughts</h2>
            <p>
              This website is many things: my voice, my notebook, my contribution, my accountability tool, and my playground. More than anything, I hope it inspires others, especially the next generation, to take ownership of their stories, to share what they learn, and to build something meaningful for the world.
            </p>
            <p className="py-3">
              At the end of the day, I just want to bring value, to maximize my impact, and to leave behind something that reflects who I really am.
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
