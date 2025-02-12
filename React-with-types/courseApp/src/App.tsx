import {Header} from "./components/Header.tsx";
import {Content} from "./components/Content.tsx";
import {Total} from "./components/Total.tsx";

const App = () => {
    const courseName = "Half Stack application development";
    const courseParts = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14
        }
    ];

    return (
        <div>
            <Header name={courseName} />
            <Content contents={courseParts} />
            <Total contents={courseParts} />
        </div>
    );
};

export default App;