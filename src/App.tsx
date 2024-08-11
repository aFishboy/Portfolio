import Hero from "./components/sections/Hero";
import RightSide from "./components/sections/RightSide";

const App = () => (
  <main className="lg:flex lg:justify-between lg:gap-4 bg-[#0f172a]">
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <Hero />
    </section>
    <section className="flex-1">
      <RightSide />
    </section>
  </main>
);

export default App;
