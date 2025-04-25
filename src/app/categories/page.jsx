export const metadata = {
  title: "Categories | WellRichLife",
  description:
    "Explore categories like Health and Money to discover powerful ClickBank products, expert reviews, and smart tips for a better life.",
};

export default function CategoriesPage() {
  const categories = [
    {
      name: "Health",
      description:
        "Get expert reviews and tips on fitness, supplements, and holistic health products.",
      link: "/categories/health",
    },
    {
      name: "Money",
      description:
        "Learn how to make money online, manage your finances, and explore digital tools that grow your income.",
      link: "/categories/money",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Explore Categories
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.link}
              className="border border-gray-200 hover:shadow-lg rounded-xl p-6 transition hover:bg-blue-50"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {cat.name}
              </h2>
              <p className="text-gray-700">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
