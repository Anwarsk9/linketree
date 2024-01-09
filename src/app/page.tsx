import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-4 mt-32 max-w-4xl mx-auto">
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
          <input type="text" className="py-4 bg-white" placeholder="username" />
          <button className="py-4 px-6 bg-blue-500 text-white" >Join for free</button>
        </form>

      </section>
    </main>
  );
}
