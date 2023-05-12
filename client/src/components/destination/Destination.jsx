import React from 'react';
import "./destination.css";
import pokhara1 from "../../assests/pokhara1.jpg";
import pokhara2 from "../../assests/pokhara2.jpg";
import chitwan1 from "../../assests/chitwan1.jpg";
import chitwan2 from "../../assests/chitwan2.jpg";
import { Link } from 'react-router-dom';
function Destination() {
  return (
    <div className="destination">
    
      <h1>Popular Destinations</h1>
      <h3>Tours give you opportunity to see a lot, within a time frame</h3>
      <div className='first-des'>
        <div className='des-text'>
            <h2>Pokhara</h2>
            <p>
            Pokhara is a city in central Nepal, located about 200 km west of Kathmandu. 
            It is known for its stunning natural beauty, including the nearby Himalayan mountains and the famous Phewa Lake. 
            Pokhara is a popular tourist destination, attracting visitors from around the world for activities such as trekking, paragliding, and boating. 
            The city also has a vibrant nightlife, with a variety of restaurants, bars, and music venues.
            In addition to its natural beauty, Pokhara is also home to cultural attractions such as the World Peace Pagoda and the International Mountain Museum. 
            Overall, Pokhara is a must-visit destination for anyone traveling to Nepal, offering a unique blend of adventure, relaxation, and cultural experiences.
            </p>
            <button className='show'><Link to="/" className="link">
         Explore
        </Link>
        </button>
        </div>
        <div className='image'>

            <img alt="img" src={pokhara1}/>
            <img alt="img" src={pokhara2}/>
        </div>
      </div>
      <div className='second-des'>
        <div className='des-text'>
            <h2>Chitwan</h2>
            <p>
            Chitwan is a district located in the southwestern part of Nepal, known for its rich biodiversity and natural beauty.
             It is home to the Chitwan National Park, which is a UNESCO World Heritage Site and one of the best-preserved examples of a natural ecosystem in the Terai region of Nepal.
              The park is home to a variety of wildlife, including Bengal tigers, one-horned rhinoceroses, elephants, and over 500 species of birds.
              Chitwan is also known for its traditional Tharu culture, which is indigenous to the region and has a unique art, music, and dance heritage.
               The district is a popular tourist destination for those interested in wildlife safaris, jungle trekking, and cultural experiences.
</p>
<button className='show'><Link to="/" className="link">
         Explore
        </Link>
        </button>
        </div>
        <div className='image'>
            <img alt="img" src={chitwan1}/>
            <img alt="img" src={chitwan2}/>
        </div>
      </div>
   </div>
    
  );
}

export default Destination;
