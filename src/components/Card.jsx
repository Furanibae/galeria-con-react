const Card = ({ imagen,title,description }) => {

return(
    
    <div className="div">
        <img src={imagen}/>
        <h3>{title}</h3>
        <hr />
        <p>{description}</p>
        </div>
   
);
};

export default Card;