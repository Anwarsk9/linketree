export default function Home() {
  return (
    <main>
      <section className="mt-32">
        <div className="max-w-xl mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br /> for everything.
          </h1>
          <h2 className="text-gray-400 text-xl mt-6 ">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>

        <form className="inline-flex items-center shadow-lg shadow-gray-700/40">
          <span className="py-4  pl-4 bg-white">linklist.to/</span>
          <input
            type="text"
            className="py-4 bg-white outline-none"
            placeholder="username"
          />
          <button className="py-4 px-6 bg-blue-500 text-white">
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}
