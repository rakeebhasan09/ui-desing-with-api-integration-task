import React, { useEffect, useState } from "react";

const TrendingNews = () => {
	const [trendingNews, setTrendingNews] = useState([]);
	useEffect(() => {
		fetch("https://news-server.ubautomation.com/api/v1/home")
			.then((res) => res.json())
			.then((data) => setTrendingNews(data.data.trending_news));
	}, []);
	return (
		<div className="container">
			<div className="border-t">
				<h2 className="pt-6 text-3xl font-bold">
					Trending News {trendingNews.length}
				</h2>
			</div>
		</div>
	);
};

export default TrendingNews;
