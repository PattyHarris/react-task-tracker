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
35.  To show and hide the 'add task' input form fields, added another state ('showAddTask'), which as a bool can be used to show the form:
```
    { showAddTask && <AddTask onAdd={addTask} /> }
```
36.  Static Assets: the instructions given by node tell you to run 'npm run build' to create an optimized production build for deployment.  The results are in /build.  To test, you need the npm package 'serve' and then you run 'serve -s build' - 'serve' is a basic http server.
```
    > sudo npm install -g serve
```
37.  And then to run production on port 8000 (and then check localhost:8000):
```
    > serve -s build -p 8000
```
38. Lastly, json-server is used to write http requests against mock data.  The server is install in this case locally (not globally as instructed on their web page):
```
    > npm install json-server
```
39.  package.json includes a script to run the server - once started, a default db.json file is created (which we will edit) - in a second tab in VSCode, start the dev server (npm start)...
```
    "server": "json-server --watch db.json --port 5000"
    ....
    > npm run server
```
40.  Move the static data in App.js to db.json - the 'useState' will have an empty array as the default.  The data will need to be refactored into correct JSON - keys and strings need double quotes.  json-server will also create ID's - so we won't need the fake ID's anymore..
41.  To simulate a 'get', http://localhost/5000/tasks - shows the tasks we have so far.
42.  To load the data on start, we'll use the 'useEffect' hook, which is used (duh) for handling side effects.  'useEffect' takes a callback function as input - you can't use async on that callback function - you need to use async/await on the 'fetch' - we're also passing in a dependency array - in this case it's empty.
```
    useEffect( () => {
        const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        console.log(data);
        }
        fetchTasks();
    }, [])
```
43.  We don't want to call 'fetchTasks' inside 'useEffect' since you might want to use 'fetchTasks' elsewhere.  So 'fetchTasks' is moved to it's own function and then useEffect is modified as shown:
```
```
44.  The 'await fetch' in the 'deleteTasks' is coded that way since we're not getting return value back.
45.  useEffect: I missed adding the [] as the second parameter.  The result was endless GET requests.  From SO: 
    - Giving it an empty array acts like componentDidMount as in, it only runs once.
    - Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.
    - Giving it an array as second argument with any value inside, eg , [variable1] will only execute the code inside your useEffect hook ONCE on mount, as well as whenever that particular variable (variable1) changes.
46.  Routing: install react router -> npm install react-router-dom
47.  To show how react-router works, we'll use an About page that will be accessed via the main page footer.
48.  Everything we returned from App.js is wrapped in <Router></Router>.  Note that 'Router" is imported as an alias of BrowserRouter.  Then you can use Route to setup the About component.
49.  Route has changed in V6 - see the comments or the updated video https://www.youtube.com/watch?v=k2Zk5cbiZhg.  This code as committed is correct for V6.
50.  Instead of using an 'a' tag to link from the About page back to the main page, use react-router Link (do the same thing in Footer as well) - the pages no longer reload - transition is more smooth.
```
    <a href="/">Go Back</a>

    ... use instead
    <Link to='/'>Go Back</Link>
```
51.  To remove the 'Add' button from the About page, use the 'useLocation' hook from react-router-dom - see Header.

## Update for react-router-dom V6

The instructor updated some of the code and added a bit more to accommodate the update to V6.  In this updated video, TaskDetails was added to show another route that is parameterized.

1. 'TaskDetails' is accessed via a 'Link' in Task.js.  Import 'Link' as done above.
2. In V5 there was a 'Redirect' - that is now called 'Navigate'.  See 'TaskDetails' for usage.
3. A better method is to use the new hook, 'useNavigate'.  With this you can specify the path, but you can also specify a number, e.g. -1, that pops you back one in this case.  -2 pops you back 2...
4. You can also use the 'useLocation' hook to get the pathname - not implemented.  