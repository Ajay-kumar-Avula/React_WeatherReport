import {useState} from 'react'

const SearchBar = props => {
  const {fetchWeather, savedCities, setSavedCities} = props
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    if (searchInput) fetchWeather(searchInput)
  }

  const handleSaveCity = () => {
    if (searchInput && !savedCities.includes(searchInput)) {
      const updatedCities = [...savedCities, searchInput]
      setSavedCities(updatedCities)
      localStorage.setItem('savedCities', JSON.stringify(updatedCities))
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      <button type="submit" onClick={handleSaveCity}>
        Save
      </button>

      <div className="saved-cities">
        <h3>Saved Cities</h3>
        <ul>
          {savedCities.map(city => (
            <li key={city} onClick={() => fetchWeather(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
