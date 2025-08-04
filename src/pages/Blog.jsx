import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptoNews = async () => {
    try {
      const res = await fetch(
        'https://cryptocontrol.io/api/v1/public/news', {
          headers: { 'x-api-key': 'pub_ad6fef8d35084e6594c3abc2d826b1f5' }
        }
      );
      const data = await res.json();
      setArticles(data.slice(0, 6)); 
    } catch (err) {
      console.error('Error loading CryptoControl news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center min-h-[50vh]">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Latest Crypto Articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            {art.media && (
              <img
                src={art.media}
                alt={art.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {art.title.length > 70 ? art.title.slice(0, 67) + '...' : art.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {art.description
                  ? art.description.slice(0, 90) + '...'
                  : 'Click below to read the full article.'}
              </p>
              <a
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
