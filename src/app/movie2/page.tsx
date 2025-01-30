/* eslint-disable @next/next/no-img-element */
"use client"; // เพิ่มบรรทัดนี้

import React, { useState } from "react";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
}

// ฟังก์ชัน getMovies
async function getMovies(): Promise<Movie[]> {
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTkwMjllOTE4M2M0YjMwMGUxMDFhZDdmY2E0NjE3OCIsIm5iZiI6MTczODAzNTc3My4zNCwic3ViIjoiNjc5ODUyM2Q3MDJmNDkyZjQ3OGY2YmRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WwcDFoA0xnDmj8IXCwIL_pietzONqFubhREgGeyNppg`,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.error("Failed to fetch movies:");
            return [];
        }
        const data = await response.json();
        return (data.results as Movie[]) || [];
    } catch (err) {
        console.error("Error fetching movies:", err);
        return [];
    }
}

// Main Component
export default function Page() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    React.useEffect(() => {
        async function fetchMovies() {
            const fetchedMovies = await getMovies();
            setMovies(fetchedMovies);
        }
        fetchMovies();
    }, []);

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    const handleMoreClick = (movie: Movie) => {
        setSelectedMovie(movie); // เปิด Modal และเก็บข้อมูลหนังใน State
    };

    const handleCloseModal = () => {
        setSelectedMovie(null); // ปิด Modal
    };

    return (
        <div className="movie-container">
            <br /><br />
            <h1>Trending Movies</h1>
            <div className="movie-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img
                                src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "/placeholder.jpg"}
                                alt={movie.title || "No title"}
                                className="movie-image"
                            />
                            <div className="movie-details">
                                <h2>{movie.title}</h2>
                                <p>{movie.overview.slice(0, 100)}...</p>
                                <a
                                    onClick={() => handleMoreClick(movie)}
                                    className="button-class2"
                                    style={{ cursor: "pointer" }}
                                >
                                    More
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies available right now.</p>
                )}
            </div>

            {selectedMovie && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{selectedMovie.title}</h2>
                        <img
                            src={
                                selectedMovie.poster_path
                                    ? `${imageBaseUrl}${selectedMovie.poster_path}`
                                    : "/placeholder.jpg"
                            }
                            alt={selectedMovie.title}
                            className="modal-image"
                        />
                        <p>{selectedMovie.overview}</p>
                        <button onClick={handleCloseModal} className="button-class2">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
