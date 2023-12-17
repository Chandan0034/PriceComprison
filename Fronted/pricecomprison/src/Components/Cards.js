import Card from "./Card";
function Cards(props){
    return(
        <div className="CardApp">
           <div>
           <span>Gem Portal</span>
            <div className="FlipkartCardsCollection">
                    {
                        props.gemOutput.map((item)=>{
                            return <Card Data={item}></Card>
                        })
                    }
            </div>
           </div>
           <div>
            <span>Flipkart</span>
            <div className="FlipkartCardsCollection">
                    {
                        props.flipkartOutput.map((item)=>{
                            return <Card Data={item}></Card>
                        })
                    }
            </div>
           </div>
           <div>
            <span>Amazon</span>
            <div className="FlipkartCardsCollection">
                    {
                        props.amazonOutput.map((item)=>{
                            return <Card Data={item}></Card>
                        })
                    }
            </div>
           </div>
        </div>
    );
}
export default Cards;