import Cursor from "./components/sections/Cursor";
import Hero from "./components/sections/Hero";
import Nav from "./components/sections/Nav";
import RightSide from "./components/sections/RightSide";
import Socials from "./components/sections/Socials";

const App = () => (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                    <Hero />
                    <nav className="nav hidden lg:block">
                        <Nav />
                    </nav>
                </div>

                <Socials />
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24">
                <RightSide />
            </main>
        </div>
        <Cursor />
    </div>
);

export default App;
