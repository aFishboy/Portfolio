import Cursor from "./components/sections/Cursor";
import Hero from "./components/sections/Hero";
import Nav from "./components/sections/Nav";
import RightSide from "./components/sections/RightSide";
import Socials from "./components/sections/Socials";

const App = () => (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
            <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <Hero />
                <nav className="nav hidden lg:block"><Nav /></nav>
                <Socials />
            </section>
            <section className="flex-1">
                <RightSide />
            </section>
        </div>
        <Cursor />
    </main>
);

export default App;
