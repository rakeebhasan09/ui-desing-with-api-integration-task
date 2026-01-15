import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TrendingNews = () => {
	const [trendingNews, setTrendingNews] = useState([]);
	useEffect(() => {
		fetch("https://news-server.ubautomation.com/api/v1/home")
			.then((res) => res.json())
			.then((data) => setTrendingNews(data.data.trending_news));
	}, []);
	return (
		<div className="container">
			<div className="border-t pb-20 relative">
				<h2 className="pt-6 text-3xl font-bold mb-4">
					Trending News {trendingNews.length}
				</h2>
				{/* Left Arrow */}
				<button className="custom-prev cursor-pointer absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full">
					<FaAngleLeft size={20} />
				</button>

				{/* Right Arrow */}
				<button className="custom-next cursor-pointer absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full">
					<FaAngleRight size={20} />
				</button>
				<Swiper
					modules={[Navigation]}
					navigation={{
						prevEl: ".custom-prev",
						nextEl: ".custom-next",
					}}
					loop={true}
					spaceBetween={20}
					breakpoints={{
						320: { slidesPerView: 1 },
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 5 },
					}}
					className="mySwiper"
				>
					{trendingNews.map((news) => (
						<SwiperSlide key={news.id}>
							<div className="relative">
								<img
									className="w-full h-120 object-cover"
									src={news.image}
									alt=""
								/>
								{/* Overlay */}
								<div className="absolute w-full h-full bg-black/40 top-0 left-0"></div>
								<p className="absolute top-[50%] text-white px-4">
									{news.title.length > 60
										? `${news.title.slice(0, 60)}...`
										: news.title}
								</p>
								<p className="absolute top-[62%] text-white px-4">
									{news.category.name}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TrendingNews;
