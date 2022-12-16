import react, {useState, useEffect, useRef} from "react";
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel, ListGroup, ListGroupItem, Form, InputGroup} from 'react-bootstrap';
import { BsFillAwardFill } from "react-icons/bs";

const Covid = () => {
    const [index, setIndex] = useState(0);
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

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
            <Carousel variant="dark" className="carouselArea" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="m-carousel-pic" src={require("./1.png")}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="m-carousel-pic" src={require("./2.png")}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="m-carousel-pic" src={require("./3.png")}/>
                </Carousel.Item>
            </Carousel>
            <div className="countryArea">
                <img className="logo" src={image}/>
                <h3>Country Name: <font color={"red"} size={10}>{country}</font></h3>
            </div>
            <div className="displayArea">
                <Form className="formArea" onSubmit={handleSubmit}>
                    <Form.Control type="text" className="searchInput" ref={searchInputValue}/>
                    <button className="searchBtn" type="submit">Search</button>
                    <button className="resetBtn" onClick={handleReset}>Reset</button><br/>
                    <span className="notice">Note: You can input any countries(such as China, Japan, USA...) or select options.</span>
                </Form>
                <Form className="selectFormArea" onSubmit={handleSubmit}>
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
                </Form>
                <ListGroup className="groupArea">
                    <ListGroupItem><strong>Cases</strong>: {cases}</ListGroupItem>
                    <ListGroupItem><strong>TodayCases</strong>: {todayCases}</ListGroupItem>
                    <ListGroupItem><strong>Deaths</strong>: {deaths}</ListGroupItem>
                    <ListGroupItem><strong>TodayDeaths</strong>: {todayDeaths}</ListGroupItem>
                    <ListGroupItem><strong>Recovered</strong>: {recovered}</ListGroupItem>
                    <ListGroupItem><strong>TodayRecovered</strong>: {todayRecovered}</ListGroupItem>
                    <ListGroupItem><strong>Continent</strong>: {continent}</ListGroupItem>
                </ListGroup>
                <ListGroup className="historyArea">
                    <ListGroupItem>History record list:</ListGroupItem>
                    <ListGroupItem>{histData}</ListGroupItem>
                </ListGroup>
                {/*<div className="historyArea">*/}
                {/*    <span>History record list:</span>*/}
                {/*    <div>{histData}</div>*/}
                {/*</div>*/}
            </div>
        </div>
    </>
}

export default Covid;
