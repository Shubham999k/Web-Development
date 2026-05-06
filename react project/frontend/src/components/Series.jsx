import seriesdata from "../api/seriesData.json";
const NetflixSeries = () => {
    return (
        <ul>
            {seriesdata.map((curElem) => {
                return(
                <li>
                <div>
                    <img src={curElem.img_url} alt="" height={300} width={400} />
                </div>
                <h2>Name:{curElem.name}</h2>
                <h3>Rating:{curElem.rating}</h3>
                <p>Summary:{curElem.summary}</p>
                <p>Genre:{curElem.genre}</p>
                <p>Cast:{curElem.cast}</p>
                <a href={curElem.watch_url} target="_blank"><button>Watch Now</button></a>

            </li>);
            })}

        </ul>
    )
}
export default NetflixSeries;