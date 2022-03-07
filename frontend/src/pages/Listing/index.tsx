import MovieCard from "components/MovieCard";
import MovieScore from "components/MovieScore";
import Pagination from "components/pagination";

function Listing(){

    return(

        <>
        <Pagination></Pagination>
        <MovieCard></MovieCard>
        </>
    );
}

    export default Listing;