
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HeaderComponent from '../static/Header';
import WelcomeComponent from '../static/Welcome';
import SignupComponent from '../user/SignUp';
import LoginComponent from '../user/Login';
import PageNotFoundComponent from '../static/PageNotFound';
import ExamWindow from '../exam/Index';
import QuestionDisplay from '../exam/QuestionDisplay';

let AppRouter = () => {

    const router = createBrowserRouter(createRoutesFromElements([

        <Route path="" element={<HeaderComponent />}>
            <Route path="" element={<WelcomeComponent />} />,
            <Route path="signup" element={<SignupComponent />} />,
            <Route path="login" element={<LoginComponent />} />,
            <Route path="exam" element={<ExamWindow />}>
                <Route path="question/show/:id" element={<QuestionDisplay />}/>
            </Route>
        </Route>,


        <Route path="*" element={<PageNotFoundComponent />} />



    ]));

    return <RouterProvider router={router} />


}

export default AppRouter;