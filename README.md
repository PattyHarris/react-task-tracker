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
13.  