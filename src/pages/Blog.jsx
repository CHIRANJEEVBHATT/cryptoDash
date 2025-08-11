import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCryptoNews = async (pageNum = 1) => {
    try {
      const res = await fetch(
        `https://cryptopanic.com/api/developer/v2/posts/?auth_token=d177ff7f620259fe1ea9ab406a86806e4f0b79c8&public=true&page=${pageNum}&currencies=BTC,ETH&regions=en&kind=news`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setArticles((prev) => [...prev, ...data.results]);
        setHasMore(true);
      } else {
        setHasMore(false); // No more articles
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCryptoNews(nextPage);
  };

  if (loading && articles.length === 0) {
    return (
      <div className="grid place-items-center min-h-[50vh]">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Latest Crypto News
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {art.title.length > 70 ? art.title.slice(0, 407) + '...' : art.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {new Date(art.published_at).toLocaleDateString()}
              </p>
              {art.url ? (
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 transition"
                >
                  Read More
                </a>
              ) : (
                <span className="text-gray-400 text-sm">No URL available</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-500 transition"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
