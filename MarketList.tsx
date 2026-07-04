export default function MarketList() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        Live Perpetual Markets
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          BONK-PERP
        </div>

        <div className="border rounded-xl p-6">
          JUP-PERP
        </div>

        <div className="border rounded-xl p-6">
          MEME-PERP
        </div>

      </div>
    </section>
  );
}
