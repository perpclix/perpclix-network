export default function TradingTerminal() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Markets
          <h2>124</h2>
        </div>

        <div className="border rounded-xl p-6">
          Open Interest
          <h2>$26.8M</h2>
        </div>

        <div className="border rounded-xl p-6">
          Daily Volume
          <h2>$11.5M</h2>
        </div>

        <div className="border rounded-xl p-6">
          Funding APR
          <h2>8.7%</h2>
        </div>

      </div>

    </section>
  );
}
