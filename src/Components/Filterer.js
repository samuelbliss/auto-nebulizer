import {useState} from "react";


export const Filterer = (props) => {
    /* value={this.state.value} onChange={this.handleChange} */

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")

    return (
        <div className="Car-list-filter" data-testid="car-filter">
            <form>
                <input type="text" aria-label="Make" value={make} onChange={
                    (e) => {setMake(e.target.value)}
                }/>
                <input type="text" aria-label="Model" value={model} onChange={
                    (e) => {setModel(e.target.value)}
                }/>
                <input type="text" aria-label="Year" value={year} onChange={
                    (e) => {setYear(e.target.value)}
                }/>
                { !make && !model && !year ?
                    <button className="search-button" disabled={true}>Search</button>:
                    <button className="search-button">Search</button>}
            </form>
        </div>
    )
}