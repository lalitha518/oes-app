import { useParams } from "react-router-dom";
import sample_data from "../data";


let QuestionDisplay = () => {
    const { id } = useParams();
    const question = sample_data.questionBank.find(q => q.id === parseInt(id))|| sample_data.questionBank[0];
    
    return (
        <>
            <h3 className="bg-light text-dark ps-2 my-3">{question.questionTitle}</h3>

            <ul className="list-group">
            {Object.entries(question.options).map(([key, value], index) => (
                    <li key={index} className="list-group-item list-group-item-action my-3 shadow rounded">
                        <input type="radio" className="form-check-input me-2" id={`op${index}`} name="option" />
                        <label htmlFor={`op${index}`}>{value}</label>
                    </li>
                ))}
            </ul>

            <div className="bg-secondary mt-3">
                <button className="btn btn-secondary m-4 float-end fw-bold">Save Answer</button>
            </div>
        </>
    )
}


export default QuestionDisplay;