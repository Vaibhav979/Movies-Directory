import { Movie } from '@/types/movie';

const demoMovie: Movie = {
    id: 1,
    title: "Demo Movie",
    poster_path: "/test.jpg",
    release_date: "2024-01-01",
    vote_average: 8.5,
};

export default function Home() {
    return (
        <main className='p-6'>
            <h1 className="">Welcome to the Movie App</h1>
            <div>
                <h2>{demoMovie.title}</h2>
                <img src={demoMovie.poster_path} alt={demoMovie.title} />
                <p>Release Date: {demoMovie.release_date}</p>
                <p>Rating: {demoMovie.vote_average}</p>
            </div>
        </main>
    );
}