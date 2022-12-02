import react, {useState, useEffect, useRef} from "react";
import '../style.css'

const Covid = () => {
    const [country, setCountry] = useState("usa")
    const [image, setImage] = useState("");
    const [cases, setCases] = useState(0);
    const [todayCases, setTodayCases ] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [todayDeaths, setTodayDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [todayRecovered, setTodayRecovered] = useState(0);
    const [continent, setContinent] = useState("");
    const [histData, setHistData] = useState("");
    let searchInputValue = useRef(null)

    const getCovid = async () => {
        let response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        let result = await response.json();
        setCountry(result.country)
        setImage(result.countryInfo.flag)
        setCases(result.cases)
        setTodayCases(result.todayCases)
        setDeaths(result.deaths)
        setTodayDeaths(result.todayDeaths)
        setRecovered(result.recovered)
        setTodayRecovered(result.todayRecovered)
        setContinent(result.continent)
    }

    const handleSubmit = (event) => {
        setCountry(searchInputValue.current.value);
        event.preventDefault();
    }

    const handleReset = (event) => {
        setCountry("usa");
        setHistData("");
        event.preventDefault();
    }

    const handleAdd = (event) => {
        setHistData(histData +
            "country: " + country +  "  " +
            "Cases: " + cases + "  " +
            "TodayCases: " + todayCases + "  " +
            "Deaths: " + deaths + "  " +
            "TodayDeaths: " + todayDeaths + "  " +
            "Recovered: " + recovered + "  " +
            "TodayRecovered: " + todayRecovered + "  " +
            "Continent: " + continent + "\n");
        // console.log(histData);
        event.preventDefault();
    }

    const selectHelper = (event) => {
        setCountry(event.target.value);
        event.preventDefault();
    }

    useEffect(() => {
        getCovid();
    }, [country])

    return <>
        <div className="container">
            <h1 className="title"><strong>Country COVID-19 Epidemic Development</strong></h1>
            <div className="countryArea">
                <img className="logo" src={image}/>
                <h3>Country Name: <font color={"red"} size={10}>{country}</font></h3>
            </div>
            <div className="displayArea">
                <form className="formArea" onSubmit={handleSubmit}>
                    <input type="text" className="searchInput" ref={searchInputValue}/>
                    <button className="searchBtn" type="submit">Search</button>
                    <button className="resetBtn" onClick={handleReset}>Reset</button><br/>
                    <span className="notice">Note: You can input any countries(such as China, Japan, USA...) or select options.</span>
                </form>
                <form className="selectFormArea" onSubmit={handleSubmit}>
                    <select className="selectInput" onChange={(event) => selectHelper(event)}>
                        <option value="America">USA</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                        <option value="England">England</option>
                        <option value="Canada">Canada</option>
                        <option value="Russia">Russia</option>
                        <option value="Greece">Greece</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Germany">Germany</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                        <option value="India">India</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Chile">Chile</option>
                        <option value="Australia">Australia</option>
                        <option value="Angola">Angola</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Denmark">Denmark</option>
                    </select>
                    <button className="addBtn" onClick={handleAdd}>Add</button><br/>
                </form>
                <ul className="ulArea">
                    <li>Cases: {cases}</li>
                    <li>TodayCases: {todayCases}</li>
                    <li>Deaths: {deaths}</li>
                    <li>TodayDeaths: {todayDeaths}</li>
                    <li>Recovered: {recovered}</li>
                    <li>TodayRecovered: {todayRecovered}</li>
                    <li>Continent: {continent}</li>
                </ul>
                <div className="historyArea">
                    <span>History record list:</span>
                    <div>{histData}</div>
                </div>
            </div>
        </div>
    </>
}

export default Covid;
