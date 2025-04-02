import { useEffect, useState } from "react";
import ExamContext from "../context/ExamContext";
import SidebarComponent from "./Sidebar";
import sample_data from "../data";

let ExamWindow = () => {
    const setTime = 60*60;
    const [timeLeft, setTimeLeft] =useState(setTime)

    useEffect(()=>{
        let timer = setInterval(()=>{
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        },1000)
       return ()=>{
        clearInterval(timer);
       }

    },[])
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    let [questionBank,setQuestionBank] = useState(sample_data.questionBank);

    return (
        <>
            <div className="border border-3 border-secondary m-4 p-2">
                <p className="m-0 py-3 bg-info text-white fw-bold ps-3">
                    Total Exam Duration : 60 Minutes | Total Marks : 1 each question | Passing Percentage : 60%
                    <span className="float-end mx-2">{formatTime(timeLeft)}</span>
                </p>

                <ExamContext.Provider value={{questionBank, setQuestionBank}}>
                    <SidebarComponent />
                </ExamContext.Provider>

            </div>
        </>
    )
}


export default ExamWindow;