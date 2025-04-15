import React from "react";

const sampleListings = [
  {
    id: 1,
    title: "🔥 $75 - Gray Sectional",
    price: "$75",
    timestamp: "11:42 PM",
    image: "https://via.placeholder.com/300x200.png?text=Sectional+1",
    url: "https://facebook.com/marketplace/item/123"
  },
  {
    id: 2,
    title: "⚠️ $40 - Leather Recliner",
    price: "$40",
    timestamp: "11:39 PM",
    image: "https://via.placeholder.com/300x200.png?text=Recliner+2",
    url: "https://facebook.com/marketplace/item/456"
  },
  {
    id: 3,
    title: "🛋️ $120 - Modular Sofa",
    price: "$120",
    timestamp: "11:33 PM",
    image: "https://via.placeholder.com/300x200.png?text=Sofa+3",
    url: "https://facebook.com/marketplace/item/789"
  }
];

export default function CouchSniperDashboard() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Couch Sniper Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleListings.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-600">Seen at {item.timestamp}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:underline text-sm"
              >
                View on Facebook
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}