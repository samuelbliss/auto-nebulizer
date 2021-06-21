import {CarItem} from "../CarItem";

export const CarList = (props) => {
    return (
        <ul aria-label="cars" className="non-bulleted-list">
            {props.data.map((car, index) => (
                <li key={index}>
                    <CarItem data={car}/>
                </li>
            ))}
        </ul>
    )
}