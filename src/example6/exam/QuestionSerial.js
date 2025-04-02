import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import ExamContext from "../context/ExamContext";


let QuestionSerial = () => {

    const {questionBank} = useContext(ExamContext);
    const navigate = useNavigate();

    let selectQuestion_click = (_id) => {
        navigate("/exam/question/show/"+_id);
    }

    return (
        <>
            <div className="justify-content-between m-2 p-2 d-inline-flex flex-wrap">
                {questionBank.map(item=>
                    <button className="btn btn-primary m-2 col-3" onClick={()=>selectQuestion_click(item.id)}>{item.id}</button>
                )}
            </div>
        </>
    )
}

export default QuestionSerial;