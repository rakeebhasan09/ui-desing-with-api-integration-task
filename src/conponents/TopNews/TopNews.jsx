import React, { useEffect, useState } from "react";

const TopNews = () => {
	const [topNews, setTopNews] = useState([]);
	useEffect(() => {
		fetch("https://news-server.ubautomation.com/api/v1/home")
			.then((res) => res.json())
			.then((data) => setTopNews(data.data.top_news));
	}, []);

	return (
		<div className="container border-b">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
				{/* Top News 1 */}
				<div className="bg-white p-4 rounded">
					<img
						src={topNews[0]?.image}
						alt=""
						className="w-full h-60 object-cover rounded"
					/>
					<h2 className="text-2xl font-semibold mt-3">
						{topNews[0]?.title}
					</h2>
				</div>

				{/* Top News 2,3 */}
				<div>
					<div className="bg-white p-4 rounded">
						<img
							src={topNews[1]?.image}
							alt=""
							className="w-full h-50 object-cover rounded"
						/>
						<h3 className="text-lg font-semibold mt-2">
							{topNews[1]?.title}
						</h3>
					</div>

					{/* Bottom left news */}
					<div className="bg-white p-4 rounded">
						<h3 className="text-xl font-semibold">
							{topNews[2]?.title}
						</h3>
						<p className="text-gray-600 mt-2">
							{topNews[2]?.summary}
						</p>
					</div>
				</div>

				{/* Top News 4 */}
				<div className="bg-white p-4 rounded">
					<img
						src={topNews[3]?.image}
						alt=""
						className="w-full h-64 object-cover rounded"
					/>
					<h4 className="text-lg font-semibold mt-3">
						{topNews[3]?.title}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default TopNews;
