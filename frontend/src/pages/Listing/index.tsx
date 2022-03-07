import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";

function Listing(){

    return(

        <>
        <Pagination></Pagination>

        <div className="container">
            <div className="row">
                <div className="col">
                <MovieCard></MovieCard>
                </div>
                <div className="col">
                <MovieCard></MovieCard>
                </div>
                <div className="col">
                <MovieCard></MovieCard>
                </div>
                <div className="col">
                <MovieCard></MovieCard>
                </div>
            </div>
        </div>
        </>
    );
}

    export default Listing;