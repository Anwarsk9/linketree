import HeroForm from "@/components/forms/HeroForm";

export default function Home() {
  return (
    <main>
      <section className="mt-12">
        <div className="max-w-xl mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Your one link <br />
            for everything.
          </h1>
          <h2 className="text-base text-gray-400 sm:text-xl mt-6 ">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>

        <HeroForm />
      </section>
    </main>
  );
}
