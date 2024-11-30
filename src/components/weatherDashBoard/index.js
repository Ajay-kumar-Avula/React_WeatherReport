import {useState} from 'react'
import './index.css'
import SearchBar from '../SearchBar'
import WeatherCard from '../WeatherCard'

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState('')
  const [unit, setUnit] = useState('C')
  const [savedCities, setSavedCities] = useState(
    JSON.parse(localStorage.getItem('savedCities')) || [],
  )

  const fetchWeather = async city => {
    try {
      const apiKey = '5301ab7b12d949b784654538243011'
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
      )
      if (!response.ok) throw new Error('City not found or API error')

      const data = await response.json()
      setWeatherData(data)
      setError('')
      console.log(data)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    }
  }

  const handleUnitToggle = () => {
    setUnit(prevUnit => (prevUnit === 'C' ? 'F' : 'C'))
  }

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>

      <SearchBar
        fetchWeather={fetchWeather}
        savedCities={savedCities}
        setSavedCities={setSavedCities}
      />

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <WeatherCard
          weatherData={weatherData}
          unit={unit}
          handleUnitToggle={handleUnitToggle}
        />
      )}
    </div>
  )
}

export default WeatherDashboard
