import { useContext } from 'react';
const TrendingNow = () => {
    const trendingMovies = [
        { title: 'Avatar: The Way of Water', poster: 'https://i.ibb.co/Bg4Mw5d/avatar-PNG9.png' },
        { title: 'Spider-Man: No Way Home', poster: 'https://i.ibb.co/1sPg15h/avatar.jpg' },
        { title: 'Dune', poster: 'https://i.ibb.co/T0GwqP4/dune.jpg' },
    ];


    return (
        <div className=''>
            <div className="rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Trending Now</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingMovies.map((movie, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center p-4  dark:bg-gray-900 dark:text-white border bg-slate-100 text-black rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-32 h-48 object-cover rounded-lg transition duration-300 hover:opacity-80"
                            />
                            <p className="mt-2 text-lg font-semibold text-center transition duration-300 hover:text-blue-500 dark:hover:text-blue-300">
                                {movie.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingNow;
