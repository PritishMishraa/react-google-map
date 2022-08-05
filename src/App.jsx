import './App.css';
import Header from './components/Header';

import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useRef, useState } from 'react';

function App() {
  const center = { lat: 28.6448, lng: 77.2167 }

  const [directionResponse, setDirectionResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [originLoc, setOriginLoc] = useState('Mumbai')
  const [destinationLoc, setDestinationLoc] = useState('Nodia')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) {
    return <h1>Loading</h1>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setOriginLoc(originRef.current.value)
    setDestinationLoc(destinationRef.current.value)
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className="input-area">
          <div className="box">
            <div className="origin h">
              <span className='label'>Origin</span>
              <Autocomplete>
                <input className='originInput' type="text" placeholder='Mumbai' ref={originRef} />
              </Autocomplete>
            </div>
            <div className="btn-wrapper h">
              <button className='button' onClick={calculateRoute}>Calculate</button>
            </div>
            <div className="origin h">
              <span className='label'>Destination</span>
              <Autocomplete>
                <input className='originInput' type="text" placeholder='Delhi' ref={destinationRef} />
              </Autocomplete>
            </div>
            <div className="distance-box h">
              <span className='distance'>Distance</span>
              <span className='distance-no'>{distance}</span>
            </div>
            <div className="result h">
              <span className="res">The distance between <b>{originLoc}</b> and <b>{destinationLoc}</b> is <b>{distance} kms</b>.</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="google-map-view">
            {/* Google map box */}
            <GoogleMap center={center} zoom={5} mapContainerStyle={{ width: '100%', height: '100%' }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false
              }}>
              {directionResponse && (
                <DirectionsRenderer directions={directionResponse} />
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
