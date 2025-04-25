export const metadata = {
  title: "Health Tips & Product Reviews | WellRichLife",
  description:
    "Discover powerful health tips, natural remedies, and top-rated ClickBank products to improve your lifestyle and well-being.",
};

export default function HealthCategoryPage() {
  const healthPosts = [
    {
      title: "Top 5 Natural Supplements You Should Try",
      excerpt:
        "Explore natural supplements that promote energy, immunity, and mental clarity...",
      link: "/blog/top-5-natural-supplements",
    },
    {
      title: "Best Weight Loss Programs on ClickBank (2024)",
      excerpt:
        "A detailed review of the most effective weight loss programs available right now...",
      link: "/blog/best-weight-loss-programs",
    },
    {
      title: "How to Boost Immunity with Everyday Foods",
      excerpt:
        "Learn how simple changes in your diet can naturally improve your immune system...",
      link: "/blog/boost-immunity-foods",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Health & Wellness
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Improve your lifestyle with evidence-based health tips, supplement
          reviews, and natural wellness strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {healthPosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="border border-gray-200 hover:shadow-lg rounded-xl p-6 transition hover:bg-green-50"
            >
              <h2 className="text-2xl font-semibold text-green-600 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.excerpt}</p>
              <span className="mt-2 inline-block text-green-500 font-medium">
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
