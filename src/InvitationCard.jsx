




export default function InvitationCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14523a]">
      <div className="relative w-full max-w-2xl border-[20px] border-white rounded-xl shadow-2xl bg-[#17604b] flex items-center justify-center" style={{minHeight: '900px'}}>
        {/* Single flower image in top left, overlayed */}
        <img src="/flowers/floral.png" alt="floral" className="absolute top-0 left-0 w-40 -translate-x-8 -translate-y-8 z-10 select-none pointer-events-none" />
        {/* Card content */}
        <div className="relative z-20 flex flex-col items-center justify-center px-10 py-16 text-center w-full" style={{minHeight: '900px'}}>
          <div className="mb-6">
            <span className="text-2xl tracking-widest text-[#bfa14a] font-serif font-semibold" style={{letterSpacing: '0.15em'}}>THE FAMILIES OF</span>
          </div>
          <div className="mb-4 text-white text-lg leading-relaxed font-serif">
            Late Mr. Everest &amp; Mrs. Victoria Onuoha of<br />
            Umuchie, Ezeagbogu, Ezinihitte Mbaise<br />
            ad<br />
            Mr. Christopher &amp; Mrs. Charity Obijiaku of<br />
            Ezihe, Uzii, Ideato North both of Imo
          </div>
          <div className="mt-6 mb-4 text-white text-base tracking-wide font-serif">
            REQUEST THE HONOUR OF YOUR PRESENCE<br />
            AT THE NUPTIAL MASS UNITING
          </div>
          <div className="mb-2">
            <span className="block text-white text-5xl font-serif font-bold">Nwadimma Rita <span className="text-2xl align-top italic">and</span></span>
            <span className="block text-white text-5xl font-serif font-bold mt-2">Onyedika Adolphus Emmanuel</span>
          </div>
          <div className="mt-6 mb-2 text-white text-lg tracking-wider font-serif font-semibold">
            SATURDAY, 24TH JANUARY, 2026<br />
            10AM.
          </div>
          <div className="mt-4 mb-2 text-[#bfa14a] text-lg font-serif font-semibold">
            COLOURS OF THE DAY: EMERADGREEN,<br />
            BURGUNDY, AND GOLD
          </div>
          <div className="mt-4 text-white text-lg font-serif">
            RSVP: 08037856561, 08167157607
          </div>
        </div>
      </div>
    </div>
  );
}
