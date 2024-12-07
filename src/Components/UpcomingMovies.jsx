const UpcomingMovies = ({theme}) => {
    const upcomingMovies = [
        { title: 'The Marvels', releaseDate: '2024-02-15', poster: 'https://i.ibb.co.com/CHgYpzf/marvel.jpg' },
        { title: 'Aquaman and the Lost Kingdom', releaseDate: '2024-03-17', poster: 'https://i.ibb.co.com/bRSvhPY/lost.jpg' },
        { title: 'Mission: Impossible – Dead Reckoning Part Two', releaseDate: '2024-05-28', poster: 'https://i.ibb.co.com/n3dzpXn/mission.webp' },
    ];

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-black' : 'bg-white text-black'}`}>
        <div className="p-6  bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingMovies.map((movie, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-32 h-48 object-cover rounded shadow"
                        />
                        <p className="mt-2 text-lg font-semibold">{movie.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Release Date: {movie.releaseDate}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default UpcomingMovies;
