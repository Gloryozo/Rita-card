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
    const pageWidth = 210;
    const pageHeight = 297;
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    const yOffset = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
    pdf.save("wedding_card.pdf");
  };

  return (
    <>
      {/* FONT IMPORTS – REQUIRED */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@400;600&family=Great+Vibes&display=swap');

          .font-heading {
            font-family: 'Cinzel', serif;
          }

          .font-body {
            font-family: 'Cormorant Garamond', serif;
          }

          .couple-script-name {
            font-family: 'Great Vibes', serif;
            font-size: 3.2rem;
            color: #bfa14a;
            line-height: 1.2;
          }

          .couple-script-and {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem;
            color: #bfa14a;
            margin: 0.5rem 0;
          }
        `}
      </style>

      <div className="min-h-screen flex items-center justify-center bg-[#14523a] relative">
        <button
          onClick={exportToPDF}
          className="absolute top-4 right-4 px-4 py-2 bg-[#bfa14a] text-white rounded shadow z-50"
        >
          Export as PDF
        </button>

        <div
          id="card-to-export"
          className="relative w-full max-w-2xl border-[80px] border-white/80 rounded-xl shadow-2xl bg-[#17604b] flex items-center justify-center overflow-visible"
          style={{ minHeight: "900px" }}
        >
          <img src="/flowers/top_flower.png" className="absolute -top-20 -left-20 w-64 z-30" />
          <img src="/flowers/burgundy_flower.png" className="absolute -top-24 -right-24 w-64 z-30 rotate-180" />
          <img src="/flowers/burgundy_flower.png" className="absolute -bottom-24 -left-24 w-64 z-30" />
          <img src="/flowers/top_flower.png" className="absolute -bottom-20 -right-20 w-64 z-30 rotate-180" />

          <div className="relative z-30 flex flex-col items-center justify-center px-10 py-16 text-center w-full" style={{ minHeight: "900px" }}>
            <div className="mb-10">
              <span
                className="text-2xl tracking-widest text-[#bfa14a] font-heading"
                style={{ letterSpacing: "0.15em", textShadow: "0 2px 8px #000, 0 0 2px #000" }}
              >
                THE FAMILIES OF
              </span>
            </div>

            <div className="mb-5 text-white font-body font-semibold" style={{ fontSize: "1.25rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                Late Mr. Everest &amp; Mrs. Victoria Onuoha of<br />
              Umuchie, Ezeagbogu, Ezinihitte Mbaise<br />
              &<br />
              Mr. Christopher & Mrs. Charity Obijaku of<br />
              Ezihe, Uzii, Ideato North<br />
              Both of Imo State
            </div>

            <div className="mt-6 mb-4 text-white font-body" style={{ fontSize: "1.1rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                Request the honour of your presence at the nuptial mass uniting
            </div>

            <div className="couple-names flex flex-col items-center" style={{ margin: "2rem 0" }}>
                <div className="couple-script-name" style={{ textShadow: "0 2px 8px #000, 0 0 2px #000" }}>Nwadimma Rita</div>
                <div className="couple-script-and" style={{ fontSize: "1.2rem", color: "#bfa14a", margin: "0.5rem 0", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>and</div>
                <div className="couple-script-name" style={{ textShadow: "0 2px 8px #000, 0 0 2px #000", whiteSpace: "nowrap" }}>Onyedika Adolphus Emmanuel</div>
            </div>

            <div className="mt-4 mb-2 text-white font-body" style={{ fontSize: "1.1rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                in the sacrament of Holy Matrimony
            </div>

            <div className="mt-6 mb-2 text-white font-body font-semibold" style={{ fontSize: "1.35rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                Saturday, 24th January, 2026<br />
              10:00 AM
            </div>

            <div className="mb-2 text-white font-body" style={{ fontSize: "1.15rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                At Our Lady of Fatima Cathedral, Jos.
            </div>

            <div className="mt-4 mb-2 text-[#bfa14a] text-lg font-body font-semibold" style={{ textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
              Colours of the Day: Emerald Green, Burgundy, Gold
            </div>

            <div className="mt-4 text-white font-body" style={{ fontSize: "1.15rem", textShadow: "0 2px 8px #000, 0 0 2px #000" }}>
                RSVP: 0803 785 6361 | 0816 715 7607
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
