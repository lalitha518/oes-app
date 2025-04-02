import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HeaderComponent from '../static/Header';
import WelcomeComponent from '../static/Welcome';
import SignupComponent from '../user/SignUp';
import LoginComponent from '../user/Login';
import PageNotFoundComponent from '../static/PageNotFound';
import ExamWindow from '../exam/Index';
import QuestionDisplay from '../exam/QuestionDisplay';

let AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <HeaderComponent />, // ✅ This is now the layout
                children: [
                    { path: "", element: <WelcomeComponent /> },
                    { path: "signup", element: <SignupComponent /> },
                    { path: "login", element: <LoginComponent /> },
                    {
                        path: "exam",
                        element: <ExamWindow />,
                        children: [
                            { path: "question/show/:id", element: <QuestionDisplay /> }
                        ]
                    }
                ]
            },
            { path: "*", element: <PageNotFoundComponent /> }
        ],
        { basename: "/oes-app" } // ✅ Fix GitHub Pages routing
    );

    return <RouterProvider router={router} />;
};

export default AppRouter;
