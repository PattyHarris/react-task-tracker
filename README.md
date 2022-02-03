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
20.  You can manage state with Redux or the context API, but this course is not going to go into that.  Instead, we'll move the 'state' to App.js so it's available to other components.
21.  Installed react icons (in lieu of using something like Font Awesome) - for example, the 'delete' icon will be from this package - you need to restart the dev server as well:
```
    npm install react-icons
    ....
    ....
    import {FaTimes} from 'react-icons/fa'

    export const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>
                {task.text} <FaTimes />
            </h3>
            <p>{task.day}</p>
        </div>
    )
    };

    export default Task;
```
22.  When the user clicks the 'x', we want to delete the task.  We don't have access to this state from Task (since we're not using Redux or the context API).  Instead, we'll pass down a function as a prop that can be used to delete the item.  The prop is passed from App.js to Tasks and then to Task.  Note that the 'onClick' handler in Task there's a {' '} following the 'h3' tag - not sure why this space is needed since it doesn't seem to make much of a difference whether it's there or not. 
23.  To pass in the actual task ID, we need to call the onDelete prop directly as a function and pass in the task ID:
```
            <h3>
                {task.text}{' '}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                    onClick={ () => onDelete(task.id) }/>
            </h3>

            ...instead of onClick={onDelete}

```
24.  Like 'map', use 'filter' with a function that returns a list that excludes the task that will be deleted.  To alter the 'state', we use setTasks as mentioned above - that was defined as part of the 'useState' hook.
25.  To refine the delete code a bit further, check for no more tasks (App.js):
```
        <div className="container">
        <Header title="Task Tracker"/>
        { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : 
            ( 'No tasks available.')}
        </div>

```
26.  Reminder: when the user double-clicks the task, the true/false of the reminder will be turned to the opposite of what it is set.  This will use the CSS task.reminder class that sets a border to green.
27.  React developers console: you may need to use the top >> menu item to see the 'Components' menu.  If you click on the 'App' component, the right pane will show 'props'.  Double-click on a task and you can see the reminder state change.  Pretty cool.
28.  To show the green border, change the class on the task 'div' - note the back-ticks and the ${} for adding JS.
```
    <div className={ `task ${task.reminder ? 'reminder' : ''}`}     
```
29.  Add a task: each input will have its own piece of state - component level state, not app level state.  So again, we need to import 'useState'.  Here again as well, as for tasks, 'text' is the state, and 'setText' is the function used to modify state - similarly for each of the other inputs:
```
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
```
30.  For the 'text' input, we set the initial value to the state 'text', not to be confusing...and then use the 'setText' state modifier function to change it's state to the event value (and similarly for the other 2 inputs):
```
            <div className="form-control">
                <label>Task</label>
                <input type="text" 
                placeholder="Add Task"
                value={text}
                onChange={ (e) => setText(e.target.value)}
                />
```
31.  To verify that the input changes are working, use the React-Dev tools by examining the current state of the inputs.  As you type in the input or check/uncheck the box, the states will change accordingly.
32.  The 'onSubmit' takes as input the event 'e' so that we can prevent submission to the default page:
```
    e.preventDefault();
```
33.  We also want to perform some validation of the input.
34.  To add the task, we need to add our own ID since we're using static data.  The instructor doesn't take into account the existing IDs...I think a better hack is to just use the next number available...
35.  