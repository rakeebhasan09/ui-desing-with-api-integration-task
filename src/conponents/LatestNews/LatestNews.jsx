import React, { useEffect, useState } from "react";

const LatestNews = () => {
	const [latestNews, setLatestNews] = useState([]);
	useEffect(() => {
		fetch("https://news-server.ubautomation.com/api/v1/home")
			.then((res) => res.json())
			.then((data) => setLatestNews(data.data.latest_news));
	}, []);
	return (
		<div className="container">
			<div className="py-10 md:py-14 xl:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{latestNews.slice(0, 4).map((news) => (
						<div key={news.id} className="border p-4 rounded">
							<img
								className="w-full mb-2"
								src={news.image}
								alt={news.title}
							/>
							<h2 className="font-semibold mb-1.5">
								{news.title}
							</h2>
							<p>{news.summary}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestNews;
