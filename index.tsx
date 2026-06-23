import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">🌾 KisanSetu</h1>
          <p className="text-center mt-2">Connecting Farmers to Markets</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8">Welcome to KisanSetu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-stop platform for crop prices, market updates, and farmer community.
          </p>
        </div>

        {/* Add more sections as needed */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">📊 Market Prices</h3>
            <p>Real-time crop prices from mandis</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">🌱 Weather Updates</h3>
            <p>Localized weather for better planning</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-3">🤝 Community</h3>
            <p>Connect with other farmers</p>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-8 text-center">
        <p>&copy; 2026 KisanSetu. Built with ❤️ for Indian Farmers.</p>
      </footer>
    </div>
  );
}
