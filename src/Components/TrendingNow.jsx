const TrendingNow = ({theme}) => {
    const trendingMovies = [
        { title: 'Avatar: The Way of Water', poster: 'https://via.placeholder.com/150' },
        { title: 'Spider-Man: No Way Home', poster: 'https://via.placeholder.com/150' },
        { title: 'Dune', poster: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="p-6 mb-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingMovies.map((movie, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-32 h-48 object-cover rounded shadow"
                        />
                        <p className="mt-2 text-lg font-semibold">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default TrendingNow;
