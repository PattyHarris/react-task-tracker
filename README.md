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
