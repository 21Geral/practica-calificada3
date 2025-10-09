import React from "react";
import { ThumbsUp, Eye } from "lucide-react";

const posts = [
  {
    category: "Article",
    title: "How do you use social media for growing traffic and sales?",
    author: "Jessica Parker",
    date: "May, 2020",
    readTime: "5 mins read",
    likes: 34,
    views: 203,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    category: "Lifestyle",
    title: "Health & fitness for busy people during times of stress",
    author: "Jason Bourne",
    date: "April, 2020",
    readTime: "10 mins read",
    likes: 39,
    views: 604,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    category: "CEO/ Office",
    title: "QR codes - innovative ways to use them in small business",
    author: "Wanda Maximoff",
    date: "March, 2020",
    readTime: "7 mins read",
    likes: 26,
    views: 436,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#f2f3fd] py-16 px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-4xl font-semibold mb-3">Blog post</h2>
        <p className="text-gray-600">
          Blogs are a great method to increase traffic and generate leads. Make a profit. <br />
          Get compensated for your efforts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-lg border-2 border-white rounded-2xl p-6  hover:shadow-lg transition">
            <span className="text-sm text-indigo-600 font-medium">{post.category}</span>
            <hr className="my-2 border-indigo-100" />
            <h3 className="text-lg font-semibold mb-4">{post.title}</h3>

            <div className="flex items-center gap-3 mb-4">
              <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-medium text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-500">
                  {post.date} • {post.readTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
