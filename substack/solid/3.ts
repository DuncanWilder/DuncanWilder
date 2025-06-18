function getDestinations(holidayType) {
  if (holidayType === 'beach') {
    fetch('/api/beach-destinations')
  } else {
    fetch('/api/city-destinations')
  }
}

// In your FE code
<h1>{holidayType === 'beach' ? 'Beach holiday' : 'City Break'}</h1>
