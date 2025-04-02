

let sample_data = {
    questionBank:[
        {id:1, questionTitle:"Which of the following version of react js is latest in 2024?", options:{a:"16.8.0",b:"17.0.0",c:"18.0.0",d:"19.0.0"}, correctAnswer:"18.0.0"},
        {id:2, questionTitle:"Which of the following is not a react js hook?", options:{a:"useState",b:"useEffect",c:"useFetch",d:"useContext"}, correctAnswer:"useFetch"},
        { id: 3, questionTitle: "What is the purpose of React Router?", options: { a: "To handle routing in a React application", b: "To manage state in a React application", c: "To style components in a React application", d: "To fetch data in a React application" }, correctAnswer: "To handle routing in a React application" },
        { id: 4, questionTitle: "What is the purpose of React Context?", options: { a: "To handle global state in a React application", b: "To manage side effects in a React application", c: "To handle form validation in a React application", d: "To handle asynchronous operations in a React application" }, correctAnswer: "To handle global state in a React application" },
        { id: 5, questionTitle: "What is the purpose of React.memo?", options: { a: "To optimize rendering performance in a React application", b: "To handle form submission in a React application", c: "To handle authentication in a React application", d: "To handle data fetching in a React application" }, correctAnswer: "To optimize rendering performance in a React application" },
        { id: 6, questionTitle: "What is the purpose of React Portal?", options: { a: "To render components outside of the parent component's DOM hierarchy", b: "To manage state in a React application", c: "To handle form validation in a React application", d: "To handle asynchronous operations in a React application" }, correctAnswer: "To render components outside of the parent component's DOM hierarchy" },
        { id: 7, questionTitle: "What is the purpose of React.lazy?", options: { a: "To lazily load components in a React application", b: "To handle routing in a React application", c: "To handle global state in a React application", d: "To optimize rendering performance in a React application" }, correctAnswer: "To lazily load components in a React application" },
        { id: 8, questionTitle: "What is the purpose of React.Fragment?", options: { a: "To render multiple elements without a wrapper element", b: "To manage side effects in a React application", c: "To handle form submission in a React application", d: "To handle data fetching in a React application" }, correctAnswer: "To render multiple elements without a wrapper element" },
        { id: 9, questionTitle: "What is the purpose of React.StrictMode?", options: { a: "To enable strict mode for React components", b: "To handle form validation in a React application", c: "To handle authentication in a React application", d: "To handle asynchronous operations in a React application" }, correctAnswer: "To enable strict mode for React components" },
        { id: 10, questionTitle: "What is the purpose of React.PureComponent?", options: { a: "To optimize rendering performance in a React application", b: "To handle routing in a React application", c: "To handle global state in a React application", d: "To handle data fetching in a React application" }, correctAnswer: "To optimize rendering performance in a React application" }
    ],

    user:[
        {
            id:1, 
            type:"admin",
            email:"admin@admin.com",
            password:"admin"
        },
        {
            id: 2,
            type: "user",
            email: "user1@example.com",
            password: "password1"
        },
        {
            id: 3,
            type: "user",
            email: "user2@example.com",
            password: "password2"
        },
        {
            id: 4,
            type: "user",
            email: "user3@example.com",
            password: "password3"
        }
    ]
};


export default sample_data;