type Movie = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
};

type SearchResult = {
    Response: string;
    Search: Movie[];
    totalResults: string;
}

export type {
    Movie,
    SearchResult,
}