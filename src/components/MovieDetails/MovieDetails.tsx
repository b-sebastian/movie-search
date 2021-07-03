import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams<{ id: string; }>();

    return <h2>Details for movie id: {id}</h2>
}

export default MovieDetails;