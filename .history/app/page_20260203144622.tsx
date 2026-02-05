import { Movie } from '@/types/movie';
import { Mov}

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
            <div>
                <h2 className="text-2xl font-bold">{demoMovie.title}</h2>
                <p>Rating: {demoMovie.vote_average}</p>
            </div>
        </main>
    );
}