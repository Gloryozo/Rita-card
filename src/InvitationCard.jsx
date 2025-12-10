import html2canvas from "html2canvas";
import jsPDF from "jspdf";

  const exportToPDF = async () => {
    const card = document.getElementById("card-to-export");
    if (!card) return;
    const canvas = await html2canvas(card, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("wedding_card.pdf");
  };


export default function InvitationCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14523a] relative">
      <button
        onClick={exportToPDF}
        className="absolute top-4 right-4 px-4 py-2 bg-[#bfa14a] text-white rounded shadow z-50"
      >
        Export as PDF
      </button>
      <div id="card-to-export" className="relative w-full max-w-2xl border-[80px] border-white rounded-xl shadow-2xl bg-[#17604b] flex items-center justify-center overflow-visible" style={{minHeight: '900px'}}>
        {/* Burgundy flowers at the four corners of the white border */}
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -top-24 -left-24 w-48 z-30 select-none pointer-events-none" style={{maxWidth: '40vw'}} />
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -top-24 -right-24 w-48 z-30 select-none pointer-events-none rotate-0" style={{maxWidth: '50vw'}} />
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -bottom-24 -left-24 w-48 z-30 select-none pointer-events-none -rotate-10" style={{maxWidth: '40vw'}} />
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -bottom-24 -right-24 w-48 z-30 select-none pointer-events-none rotate-10" style={{maxWidth: '40vw'}} />
        {/* Card content */}
        <div className="relative z-30 flex flex-col items-center justify-center px-10 py-16 text-center w-full" style={{minHeight: '900px'}}>
          <div className="mb-10">
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
            <span className="block text-white text-3xl font-serif font-bold">Nwadimma Rita</span>
            <span className="block text-white text-xl italic font-serif font-bold my-1">and</span>
            <span className="block text-white text-3xl font-serif font-bold">Onyedika Adolphus Emmanuel</span>
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
