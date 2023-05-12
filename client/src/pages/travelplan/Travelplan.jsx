







// import React, { useState } from 'react';
// import './travelplan.css';

// const TravelPlanner = () => {
//   const [destination, setDestination] = useState('');
//   const [accommodation, setAccommodation] = useState('');
//   const [transportation, setTransportation] = useState('');
//   const [food, setFood] = useState('');
//   const [days, setDays] = useState('');
//   const [guide, setGuide] = useState(false);
//   const [trekking, setTrekking] = useState(false);
//   const [totalBudget, setTotalBudget] = useState(0);

//   const handleDestinationChange = (event) => {
//     setDestination(event.target.value);
//   };

//   const handleAccommodationChange = (event) => {
//     setAccommodation(event.target.value);
//   };

//   const handleTransportationChange = (event) => {
//     setTransportation(event.target.value);
//   };

//   const handleFoodChange = (event) => {
//     setFood(event.target.value);
//   };

//   const handleDaysChange = (event) => {
//     setDays(event.target.value);
//   };

//   const handleGuideChange = (event) => {
//     setGuide(event.target.checked);
//   };

//   const handleTrekkingChange = (event) => {
//     setTrekking(event.target.checked);
//   };

//   const calculateBudget = () => {
//     let budget = 0;
//     if (destination === 'Pokhara') {
//       budget += 1000;
//     } else if (destination === 'Kathmandu') {
//       budget += 800;
//     } else if (destination === 'Chiitwan') {
//       budget += 1500;
//     }
//     if (accommodation === '5-star hotel') {
//       budget += 500;
//     } else if (accommodation === '3-star hotel') {
//       budget += 300;
//     } else if (accommodation === 'guesthouse') {
//       budget += 100;
//     }
//     if (transportation === 'rental car') {
//       budget += 100;
//     } else if (transportation === 'taxi') {
//       budget += 50;
//     } else if (transportation === 'public transport') {
//       budget += 20;
//     }
//     if (food === 'restaurant meals') {
//       budget += 50;
//     } else if (food === 'street food') {
//       budget += 20;
//     } else if (food === 'grocery shopping') {
//       budget += 10;
//     }
//     if (guide) {
//       budget += 200;
//     }
//     if (trekking) {
//       budget += 300;
//     }
//     budget *= days;
//     setTotalBudget(budget);
//   };

//   return (
//     <div className="travel-planner">
//       <h1>Travel Planner</h1>
//       <div>
//         <label htmlFor="destination">Destination:</label>
//         <select id="destination" value={destination} onChange={handleDestinationChange}>
//           <option value="">Please select</option>
//           <option value="Pokhara">Pokhara</option>
//           <option value="Kathmandu">Kathmandu</option>
//           <option value="Chitwan">Chitwan</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="days">Number of days:</label>
//         <input type="number" id="days" value={days} onChange={handleDaysChange} min="1" />
//       </div>
//       <div>
//         <label htmlFor="accommodation">Accommodation:</label>
//         <select id="accommodation" value={accommodation} onChange={handleAccommodationChange}>
//           <option value="">Please select</option>
//           <option value="5-star hotel">5-star hotel</option>
//           <option value="3-star hotel">3-star hotel</option>
//           <option value="guesthouse">Guesthouse</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="transportation">Transportation:</label>
//         <select id="transportation" value={transportation} onChange={handleTransportationChange}>
//           <option value="">Please select</option>
//           <option value="rental car">Rental car</option>
//           <option value="taxi">Taxi</option>
//           <option value="public transport">Public transport</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="food">Food:</label>
//         <select id="food" value={food} onChange={handleFoodChange}>
//           <option value="">Please select</option>
//           <option value="restaurant meals">Restaurant meals</option>
//           <option value="street food">Street food</option>
//           <option value="grocery shopping">Grocery shopping</option>
//         </select>
//       </div>
      
//       <div>
//         <label htmlFor="guide">Guide required:</label>
//         <input type="checkbox" id="guide" checked={guide} onChange={handleGuideChange} />
//       </div>
//       <div>
//         <label htmlFor="trekking">Trekking:</label>
//         <input type="checkbox" id="trekking" checked={trekking} onChange={handleTrekkingChange} />
//       </div>
//       <div className="calculate-budget">
//         <button onClick={calculateBudget}>Calculate Budget</button>
//         <div>Total Budget: {totalBudget}$</div>
//       </div>
//     </div>
//   );
// };
// export default TravelPlanner;


import React, { useState } from 'react';
import './travelplan.css';

const TravelPlanner = () => {
  const [destination, setDestination] = useState('');
  const [transportation, setTransportation] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [food, setFood] = useState('');
  const [activities, setActivities] = useState('');
  const [days, setDays] = useState('');
  const [guide, setGuide] = useState(false);
  const [trekking, setTrekking] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bill, setBill] = useState([]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleActivitiesChange = (event) => {
    setActivities(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleGuideChange = (event) => {
    setGuide(event.target.checked);
  };

  const handleTrekkingChange = (event) => {
    setTrekking(event.target.checked);
  };

  const handleCalculateBudget = (event) => {
    event.preventDefault();

    let totalBudget = 0;
    let billItems = [];

    if (destination === 'Kathmandu') {
      totalBudget += 0;
      billItems.push({
        name: 'Kathmandu',
        price: 0
      });
    } else if (destination === 'Pokhara') {
      totalBudget += 0;
      billItems.push({
        name: 'Pokhara',
        price: 0
      });
    } else if (destination === 'Chitwan') {
      totalBudget += 0;
      billItems.push({
        name: 'Chitwan',
        price: 0
      });
    }

    if (transportation === 'Rental Car') {
      totalBudget += 20;
      billItems.push({
        name: 'Rental Car',
        price: 20
      });
    } else if (transportation === 'Taxi') {
      totalBudget += 30;
      billItems.push({
        name: 'Taxi',
        price: 30
      });
    } else if (transportation === 'Public Transport') {
      totalBudget += 5;
      billItems.push({
        name: 'Public Transport',
        price: 5
      });
    }

    if (accommodation === '5-star hotel') {
      totalBudget += 200;
      billItems.push({
        name: '5-star hotel',
        price: 200
      });
    } else if (accommodation === '3-star hotel') {
      totalBudget += 90;
      billItems.push({
        name: '3-star hotel',
        price: 90
      });
    } else if (accommodation === 'Guesthouse') {
      totalBudget += 50;
      billItems.push({
        name: 'Guesthouse',
        price: 50
      });
    } else if (accommodation === 'Airbnb') {
      totalBudget += 200;
      billItems.push({
        name: 'Airbnb',
        price: 200
      });
    }

    if (food === 'Restaurant Meals') {
      totalBudget += 30;
      billItems.push({
        name: 'Restaurant Meals',
        price: 30
      });
    } else if (food === 'Street Food') {
      totalBudget += 10;
      billItems.push({
        name: 'Street Food',
        price: 10
      });
    } else if (food === 'Grocery Shopping') {
      totalBudget += 12;
      billItems.push({
        name: 'Grocery Shopping',
        price: 12
      });
    }

    if (activities === 'Sightseeing') {
      totalBudget += 300;
      billItems.push({
        name: 'Sightseeing',
        price: 40
      });
    } else if (activities === 'Museum') {
      totalBudget += 200;
      billItems.push({
        name: 'Museum',
        price: 30
      });
    } else if (activities === 'Trekking') {
      totalBudget += 400;
      billItems.push({
        name: 'Trekking',
        price: 80
      });
    }

    if (guide) {
      totalBudget += 500;
      billItems.push({
        name: 'Guide',
        price: 50
      });
    }

    

    setBudget(totalBudget);
    setBill(billItems);
  };

  return (
    <div className="travel-planner1">
    <div className="travel-planner">
      <h1>Plan Your Travel</h1>
      <form onSubmit={handleCalculateBudget}>
        <div className="a">
          <label htmlFor="destination">Destination:</label>
          <select id="destination" name="destination" value={destination} onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Chitwan">Chitwan</option>
          </select>
        </div>
        <div className="a">
          <label htmlFor="transportation">Transportation:</label>
          <div>
            <label>
              <input type="radio" name="transportation" value="Rental Car" checked={transportation === 'Rental Car'} onChange={handleTransportationChange} />
              Rental Car
            </label>
            <label>
              <input type="radio" name="transportation" value="Taxi" checked={transportation === 'Taxi'} onChange={handleTransportationChange} />
              Taxi
            </label>
            <label>
              <input type="radio" name="transportation" value="Public Transport" checked={transportation === 'Public Transport'} onChange={handleTransportationChange} />
              Public Transport
            </label>
          </div>
        </div>
        <div className="a">
          <label htmlFor="accommodation">Accommodation:</label>
          <div>
            <label>
              <input type="radio" name="accommodation" value="5-star hotel" checked={accommodation === '5-star hotel'} onChange={handleAccommodationChange} />
              5-star hotel
            </label>
            <label>
              <input type="radio" name="accommodation" value="3-star hotel" checked={accommodation === '3-star hotel'} onChange={handleAccommodationChange} />
              3-star hotel
            </label>
            <label>
              <input type="radio" name="accommodation" value="Guesthouse" checked={accommodation === 'Guesthouse'} onChange={handleAccommodationChange}
            />
            Guesthouse
          </label>
          <label>
              <input type="radio" name="accommodation" value=" Airbnb" checked={accommodation === ' Airbnb'} onChange={handleAccommodationChange}
            />
            Airbnb
          </label>
          
        </div>
      </div>
      <div className="a">
        <label htmlFor="food">Food:</label>
        <div>
          <select id="food" name="food" value={food} onChange={handleFoodChange}>
            <option value="">Select Food</option>
            <option value="Restaurant Meals">Restaurant Meals</option>
            <option value="Street Food">Street Food </option>
            <option value="grocery">Grocery </option>
          </select>
        </div>
      </div>
      <div className="a">
        <label htmlFor="activities">Activities:</label>
        <div>
          <select id="activities" name="activities" value={activities} onChange={handleActivitiesChange}>
            <option value="">Select Activities</option>
            <option value="Sightseeing">Sightseeing </option>
            <option value="Museum">Museum </option>
            <option value="Trekking">Trekking</option>
          </select>
        </div>
      </div>
      <div className="a">
        <label htmlFor="days">Number of Days:</label>
        <input type="number" id="days" name="days" value={days} min="1" onChange={handleDaysChange} />
      </div>
      <div className="a">
        <label>
          <input type="checkbox" checked={guide} onChange={handleGuideChange} />
          Guide Required 
        </label>
      </div>
     
      <button className="eli" type="submit">Calculate Budget</button>
    </form>
    {budget !== null && (
      <div className="bill">
        <h2>Bill</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bill.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))}
            <tr>
              <td><strong>Total Budget</strong></td>
              <td><strong>${budget}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </div>
  </div>
);

}

export default TravelPlanner




