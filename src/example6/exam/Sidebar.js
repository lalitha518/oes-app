import QuestionDisplay from "./QuestionDisplay"
import QuestionSerial from "./QuestionSerial"


let SidebarComponent = () => {
    return (
        <>
            <div className="row g-3">
                <div className="col-lg-3 border">
                    <QuestionSerial />
                </div>

                <div className="col-lg-9 border">
                    <QuestionDisplay />
                </div>
            </div>
        </>
    )
}

export default SidebarComponent;