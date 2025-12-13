import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function InvitationCard() {
  const exportToPDF = async () => {
    const card = document.getElementById("card-to-export");
    if (!card) return;
    const canvas = await html2canvas(card, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });
    // A4 size: 210mm x 297mm
    const pageWidth = 210;
    const pageHeight = 297;
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth; // No margin
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    const yOffset = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
    pdf.save("wedding_card.pdf");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14523a] relative">
      <button
        onClick={exportToPDF}
        className="absolute top-4 right-4 px-4 py-2 bg-[#bfa14a] text-white rounded shadow z-50"
      >
        Export as PDF
      </button>
      <div id="card-to-export" className="relative w-full max-w-2xl border-[80px] border-white/80 rounded-xl shadow-2xl bg-[#17604b] flex items-center justify-center overflow-visible" style={{minHeight: '900px'}}>
        {/* Burgundy flowers at the four corners of the white border */}
        
        <img src="/flowers/top_flower.png" alt="burgundy floral" className="absolute -top-20 -left-20 w-64 z-30 select-none pointer-events-none rotate-0" style={{maxWidth: '100vw'}} />
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -top-24 -right-24 w-64 z-30 select-none pointer-events-none rotate-180" style={{maxWidth: '100vw'}} />
        <img src="/flowers/burgundy_flower.png" alt="burgundy floral" className="absolute -bottom-24 -left-24 w-64 z-30 select-none pointer-events-none rotate-0" style={{maxWidth: '100vw'}} />
        <img src="/flowers/top_flower.png" alt="burgundy floral" className="absolute -bottom-20 -right-20 w-64 z-30 select-none pointer-events-none rotate-180" style={{maxWidth: '100vw'}} />
        {/* Card content */}
        <div className="relative z-30 flex flex-col items-center justify-center px-10 py-16 text-center w-full" style={{minHeight: '900px'}}>
          <div className="mb-10">
            <span className="text-2xl tracking-widest text-[#bfa14a] font-serif font-semibold" style={{letterSpacing: '0.15em'}}>THE FAMILIES OF</span>
          </div>
          <div className="mb-4 text-white text-lg leading-relaxed font-sans font-bold">
            Late Mr. Everest &amp; Mrs. Victoria Onuoha of<br />
            Umuchie, Ezeagbogu, Ezinihitte Mbaise<br />
            &<br />
            Mr. Christopher &amp; Mrs. Charity Obijiaku of<br />
            Ezihe, Uzii, Ideato North both<br />
            Both of Imo State
          </div>
          <div className="mt-6 mb-4 text-white text-base tracking-wide font-serif">
            Request the honour of your presence at the nuptial mass uniting
          </div>
          <div className="mb-2">
            <span className="block text-[#bfa14a] text-3xl font-bold italic" style={{fontFamily: 'cursive'}}>Nwadimma Rita</span>
            <span className="block text-[#bfa14a] text-xl font-bold italic my-1" style={{fontFamily: 'cursive'}}>and</span>
            <span className="block text-[#bfa14a] text-3xl font-bold italic" style={{fontFamily: 'cursive'}}>Onyedika Adolphus Emmanuel</span>
          </div>
          <div className="mt-4 mb-2 text-white text-base tracking-wide font-serif">
            in the sacrament of holy matrimony
          </div>
          <div className="mt-6 mb-2 text-white text-lg tracking-wider font-serif font-semibold">
            SATURDAY, 24TH JANUARY, 2026<br />
            at 10:00 AM
          </div>
          <div className="mb-2 text-white text-lg font-serif">
            At Our Lady of Fatima Cathedral, Jos.<br />
          </div>
          <div className="mt-4 mb-2 text-[#bfa14a] text-lg font-serif font-semibold">
            Colours of the day: Emerald green,<br />
            Burgundy, and Gold
          </div>
          <div className="mt-4 text-white text-lg font-serif">
            RSVP: 08037856561, 08167157607
          </div>
        </div>
      </div>
    </div>
  );
}
