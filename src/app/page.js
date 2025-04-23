import Link from "next/link";
import posts from "@/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">
          Welcome to WellRichLife
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore tips and strategies for a healthy and wealthy lifestyle –
          backed by top ClickBank products.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg border border-gray-100 transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              href={`/posts/${post.slug}`}
              className="flex justify-center text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
