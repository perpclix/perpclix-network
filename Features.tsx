const features = [
  "Permissionless Perpetual Markets",
  "Launch in 60 Seconds",
  "Leverage Trading",
  "Funding Rate Engine",
  "Liquidity Pools",
  "Fully On-Chain Settlement"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div
            key={item}
            className="border rounded-xl p-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
