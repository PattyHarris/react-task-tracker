# React Crash Course

This is a task list built with React.  See https://www.youtube.com/watch?v=w7ejDZ8SWv8.
My plan is to revisit all the basics (again) and follow this up with a more extensive lesson on React.
This README will contain notes that won't make sense to anyone except me :)

1. After running npx create-react-app, you need to start cleaning up some of the file.  In particular, narrow App.js down to the following:
```
    function App() {
    return (
        <div className="App">
        <h1>Hello From React</h1>
        </div>
    );
    }
```
2.  Similarly, clean up index.html to just the following:
```
      <body>
        <div id="root"></div>
       </body>
```
3.  Using this extension - ES7+ React/Redux/React-Native snippets -- you can just type, for example, "rafce" on a blank JS file (e.g. Header.js), and it will fill out the function and export for that component.  Sweet.  The one exception to the code that's created, is that you don't need (any longer) the "import React from 'react';" at the top.
4.  For information purposes, if you were to use a class instead of a function:
```
    class App extends React.Component {
        render() {
            return <h1>Hello from a class</h1>
        }
    }
```
5. Props: you can pass in props to the functions in a couple of ways - here props is used directly. 
```
    function App() {
        return (
            <div className="container">
            < Header title="Task Tracker"/>
            </div>

        );
    }

    const Header = (props) => {
        return <header>
                <h1>{props.title}</h1>
            </header>;
    };
```
6. Props: You can also deconstruct props and just use 'title' directly:
```
    const Header = (title) => {
        return <header>
                <h1>{title}</h1>
            </header>;
    };
```
7.  Default props: If no props are passed into Header, the default props is used:
```
    Header.defaultProps = {
        title: "Default Task Tracker Title"
    }
```
8.  Prop Types: First you need to import them (type 'impt' and the ES7 extension will add this automatically). These make your code more robust (essentially setting type specifications on the props) - this can also be accomplished with Typescript.  
```
    Header.prototypes = {
        title: PropTypes.string,
    }
``` 
9.  To specify that the field is required:
```
    Header.prototypes = {
        title: PropTypes.string.isRequired,
    }
``` 

10.  Style: You can style using CSS, but you can also you components like Style Components or inline - note that the style is specified in double {}:
```
    const Header = ({title}) => {
    return <header>
            <h1 style={{color: 'red'}} >{title}</h1>
        </header>;
    };
```
11.  Style: You also use an object, in which case it's single {}.  Note that it's not background-color, but backgroundColor (for CSS in JS):
```
    const Header = ({title}) => {
    return <header>
            <h1 style={headingStyle} >{title}</h1>
        </header>;
    };

    const headingStyle = {
        color: 'red',
        backgroundColor: 'blue'
    }
```
12.  The CSS is pulled from the tutorial github file.  
13.  Flexbox is used for the 'grid' styling.
14.  The click even on the Add button is a prop since the click even for all buttons are generally not going to be the same.  Interesting.
15.  Console.log - pass in the event:
```
    const onClick = (e) => {
        console.log(e);
    }

```
16. Tasks component: temporarily added some dummy tasks - the first 2 of these are from the db.json file in the git repository for this course - this was added about the Tasks function definition.
```
    // Temporary...
    const tasks = [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Food shopping",
            "day": "Feb 5th at 2:30pm",
            "reminder": false
        }  
    ]

const Tasks = () => { .... }

```
17.  Use the map method to create a list.  The map method takes an arrow function.  Each child in the list needs a unique key prop - otherwise, you'll get a warning about it.
```
    const Tasks = (props) => {
    return (
        <>
        {tasks.map( (task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
};
```
18.  Instead of the tasks array, we want to use a hook.  In this case, we're using the 'useState' hook, since it's a 'state' type of list.  
```
    import {useState} from 'react'
```
19.  Using the hook: in the following, 'tasks' is the state and 'setTasks' is the function.  In 'useState', we pass in the default, which is the temporary array we used above.  If you want to change any part of the state, you use 'setTasks'.
```
const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Food shopping",
            "day": "Feb 5th at 2:30pm",
            "reminder": false
        }  
    ])

    return .....
}
```
20.  You can manage state with Redux, but this course is not going to go into that.  Instead, we'll move the 'state' to App.js so it's available to other components.