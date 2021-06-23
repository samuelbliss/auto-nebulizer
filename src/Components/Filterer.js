import React, {useCallback, useState} from "react";


export const Filterer = React.memo((props) => {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")

    const filterFunc = (e) => {
        e.preventDefault();
        props.filterFunc(make, model, year);
    }
    const resetFunc = useCallback(() => {
        props.filterFunc("", "", "");
        setMake("");
        setModel("");
        setYear("");
    }, [props.filterFunc])

    return (
        <div className="Car-list-filter" data-testid="car-filter">
            <form onSubmit={filterFunc}>
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
                    <input type="submit" aria-label="submit" value="Search" className="search-button" disabled={true} />:
                    <input type="submit" aria-label="submit" value="Search" className="search-button" />}
            </form>
            <button aria-label ="reset" className="search-button" onClick={resetFunc}>Reset</button>
        </div>
    )
})