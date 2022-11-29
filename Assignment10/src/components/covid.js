import react, {useState, useEffect} from "react";
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

    const formHelper = (event) => {
        setCountry(event.target.value);
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
                <form className="formArea">
                    <input type="text" className="searchInput" onChange={(event) => formHelper(event)}/>
                    <button className="searchBtn">Search</button>
                    <button className="resetBtn">Reset</button><br/>
                    <span className="notice">Note: You can input any countries(such as China, Japan, USA...)</span>
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
            </div>
        </div>
    </>
}

export default Covid;
