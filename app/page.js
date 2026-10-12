
const navItems = ["ABOUT", "OUR TEAM", "SPECIALTIES", "METHODS", "FAQS"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#383735]">
      
      <header className="flex min-h-[150px] items-center justify-between px-8 md:px-14 lg:px-[6%]">
        <a href="#" className="leading-none">
          <span className="block font-serif text-3xl tracking-tight md:text-4xl">
            Conejo Valley
          </span>
          <span className="mt-2 block pl-1 text-[10px] tracking-[0.42em] text-[#75b5b8]">
            FAMILY COUNSELING
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs tracking-wider transition-colors hover:text-[#75b5b8]"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-[#777570] px-6 py-3 text-xs tracking-wider hover:bg-[#e9e5dc]"
          >
            CONTACT
          </a>
        </nav>

        <a href="#contact" className="text-xs tracking-widest lg:hidden">
          CONTACT
        </a>
      </header>

      
      <section className="grid min-h-[580px] grid-cols-1 lg:grid-cols-[35%_65%]">
        <div className="min-h-[350px] overflow-hidden lg:min-h-[580px]">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85"
            alt="Family spending time together"
            className="h-full min-h-[350px] w-full object-cover lg:min-h-[580px]"
          />
        </div>

        <div className="relative flex flex-col justify-between px-8 py-10 md:px-16 lg:px-[12%] lg:py-4">
          <p className="max-w-md text-xs leading-6 tracking-[0.13em] md:text-sm">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK
            <br />
            &amp; ACROSS CA
          </p>

          <div className="my-12 lg:my-0">
            <h1 className="font-serif text-4xl leading-[1.35] tracking-tight md:text-5xl xl:text-[56px]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-serif italic text-[#79b6b9]">
                Thrive
              </span>
              .
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#686762] md:text-base">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block border-b border-[#777570] pb-2 text-[11px] tracking-[0.12em] transition-colors hover:text-[#75b5b8]"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>

          <div className="pointer-events-none absolute bottom-8 right-0 hidden h-[48%] w-[17%] overflow-hidden xl:block">
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-20 text-center md:py-28">
        <p className="text-xs tracking-[0.2em] text-[#75aeb0]">
          WE ARE HERE FOR YOU
        </p>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Take the first step toward healing.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#686762]">
          Explore how counseling can help you build stronger relationships
          and create meaningful change.
        </p>
      </section>
    </main>
  );
}
