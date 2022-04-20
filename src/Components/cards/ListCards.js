
import './cards.css';

function ListCard(profiles) {
console.log(profiles)
        return (
            <div className='list'>
            {profiles.profile.map((elm)=>
                <div key={elm.name} className='card'>
                <a href={elm.profile}>
                  <div> <img className='image' src={elm.image} alt={elm.name}/> </div>
                  <ul>
                    <li>{elm.name}</li>
                    <li><strong>{elm.job}</strong></li>
                    <li><small>{elm.description}</small></li>
                 </ul>
                 </a>
              </div>
            )}
            </div>
             
        
        );
}
export default ListCard;