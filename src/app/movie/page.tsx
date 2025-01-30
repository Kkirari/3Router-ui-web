/* eslint-disable @next/next/no-img-element */
interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
}

async function getMovies(): Promise<Movie[]> {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTkwMjllOTE4M2M0YjMwMGUxMDFhZDdmY2E0NjE3OCIsIm5iZiI6MTczODAzNTc3My4zNCwic3ViIjoiNjc5ODUyM2Q3MDJmNDkyZjQ3OGY2YmRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WwcDFoA0xnDmj8IXCwIL_pietzONqFubhREgGeyNppg`,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.error('Failed to fetch movies:', response.status, response.statusText);
            return [];
        }
        const data = await response.json();
        return (data.results as Movie[]) || [];
    } catch (err) {
        console.error('Error fetching movies:', err);
        return [];
    }
}

export default async function Page() {
    const movies = await getMovies();
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="movie-container">
            <br /><br />
            <h1>Trending Movies</h1>
            <div className="movie-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img
                                src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : '/placeholder.jpg'}
                                alt={movie.title || 'No title'}
                                className="movie-image"
                            />
                            <div className="movie-details">
                                <h2>{movie.title}</h2>
                                <p>{movie.overview || 'No description available.'}</p>
                            </div>

                            <a className="button-class2">More</a>

                        </div>
                    ))
                ) : (
                    <p>No movies available right now.</p>
                )}
            </div>
        </div>
    );
}
