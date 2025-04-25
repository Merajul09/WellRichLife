export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          About WellRichLife
        </h1>

        <p className="text-lg mb-4">
          <strong>WellRichLife</strong> is a blog platform that guides you
          towards health and financial prosperity. Our main goal is to improve
          your lifestyle through accurate information, effective tips, and
          reliable product reviews.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
          📌 Our content:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Health Tips & Natural Remedies</li>
          <li>Fitness & Diet Strategies</li>
          <li>Financial Freedom & Earning Ideas</li>
          <li>Best Product Reviews from ClickBank</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
          🛍️ How we work?
        </h2>
        <p className="text-gray-700 mb-4">
          We review various <strong>ClickBank</strong> products that are working
          and are performing well in the market. In each post, we clearly
          explain the product details, benefits, and where to buy it.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
          🤝 Our goal
        </h2>
        <p className="text-gray-700 mb-4">
          To be a trusted online source where people can gain knowledge about
          health and finances and easily find the products they need. We believe
          — that wellness and prosperity can go hand in hand.
        </p>

        <p className="mt-8 text-gray-600 text-sm">
          ✉️ If you want to contact us, visit{" "}
          <a href="/contact" className="text-blue-500 underline">
            Contact Page
          </a>
          ।
        </p>
      </div>
    </main>
  );
}
