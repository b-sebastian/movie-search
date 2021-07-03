import {useParams} from "react-router-dom";
import { useQuery } from 'react-query'
import config from  '../../config/env.json';
import type { SearchResult } from './Results.types';
import ResultsTable from "./components/ResultsTable";

const Results = () => {
    const { search } = useParams<{search: string}>();
    const { isLoading, error, data } = useQuery<SearchResult>(['searchMovie', search], () => {
            const params: Record<string, string> = {
                apikey: config.apiKey,
                s: search,
                type: 'movie'
            }
            const query = Object.keys(params).reduce((query, paramName) => `${paramName}=${params[paramName]}&${query}`, '');

            return fetch(`https://www.omdbapi.com/?${query}`).then(res => res.json());
        }
    )

    return (
        <>
            { isLoading && <h3>LOADING</h3>}
            { error && <h3>There was a problem. Please try again later.</h3>}
            { data && data.Response === 'False' && <h3>Movie not found</h3>}
            { data && data.Response === 'True' && <ResultsTable data={data.Search}/>}
        </>
    );
}

export default Results;