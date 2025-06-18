class BeachDestinations {
  destinationType = "Beach holiday";
  getDestinations() {
    //...
  }
}

class CityDestinations {
  destinationType = "City break";
  getDestinations() {
    //...
  }
}

// Create the desired object by using "holidayType" once
const destinationGetter = holidayType === 'beach'
  ? new BeachDestinations()
  : new CityDestinations();

// Easy consumption without needing to be aware of what "holidayType" is
function getDestinations(destinationGetter) {
  return destinationGetter.getDestinations();
}

// In your FE code
<h1>{destinationGetter.destinationType}</h1>
