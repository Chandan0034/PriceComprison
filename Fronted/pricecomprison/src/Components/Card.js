function Card(props){
    const truncateTitle = (title, limit) => {
        return title.length > limit ? `${title.slice(0, limit)}...` : title;
    };
    return (
        <div>
            <div className="Cards">
           <div>
            <img className="image"src={props.Data.Image}></img>
           </div>
           <div className="DetailsProduct">
            <span>{truncateTitle(props.Data.Name,50)}</span>
            <span>Price :{props.Data.Price}</span>
            <span>Rating :{props.Data.Rating}</span>
            {/* <span>{truncateTitle(props.Data.Description,60)}</span> */}
           </div>
        </div>
    </div>
    );
}
export default Card;