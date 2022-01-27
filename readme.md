# React Crash Course by Traversy

### References
  * TraversyMedia [https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=802s]
  * https://github.com/bradtraversy/react-crash-2021
  * Spread operator vs Rest operator [https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/]


### What you will learn in the project
  * How to create components, reuse components with different props
  * How to pass properties and destructure the object
  * How to set propTypes
  * How to create defaultProps

### Notes
- ReactJS is a library for building interfaces. It is a front-end framework.
- Gives you a structure for the view layer
- React is the V in the MVC
- JSX - Dynamic markup (Javascript Syntax Extension). Javascript written as HTML (syntax looks like HTML, a syntactic sugar)
- Interactive UI's with Virtual DOM. You can make use of resuable components.
- Performance and testing benefits. Much easier to work on project with teams. All states are mutable.
- Good handle on data types, variables, functions, loops, promises, async programming, array methods like forEach() & map(), fetch API and making HTTP requests
- "STATE" gets passed DOWN and "ACTION" gets passed UP. Reusable components with their own state.

#### Difference between class and function component styles
```
export const Header = () => {
    return (
        <div>
          <h1>Sample Header</h1>
        </div>  
    )
}

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Sample Class Header</h1>
            </div>
        )
    }
}
```

#### Components and State
* Components can be classes or functions
* Components can take in "props" which are attributes 
```
<Header title="Sample title">
```
* Components can have states which is an object that determines how a component renders and behaves
* "App" or "global" state refers to a state that is available to the entire UI and not just to a single component
* Prior to react 16.8 we had to use class based components to use state. Now, we use functional components with hooks
* React hooks are functions that let us hook into React state and lifecycle features from function components
* * useState - Returns a stateful value and a function to update it
* * useEffect - Perform side effects in function components 
* There are some naming conventions that you need to be aware of when writing attributes to JSX elements such as "className" for "class", "htmlFor" for "for" etc.
* If you do not want to have a grouping of elements inside div for JSX element, you can just use fragment or empty angle brackets as in <> ... </>

#### Starting a react project
```
$ node -v
$ npm -v (make sure it is greater than 5.x to use npx)
$ npx create-react-app task-tracker
$ cd task-tracker
$ npm start
```
* Chrome extension: React developer tools is a recommendation to view the states/components/props and other variables. If you run the application from the build folder, react dev tools would indicate that you are running the production build
* If Emmet doesn't work, go to the bottom of vscode editor and change javascript to javascript react
* To cleanup the code, remove logo.svg/app.css/app.test.js/setuptests.js
* In vscode, search for and setup ES7 React/Redux/GraphQL/React-Native snippets plugin. It has a bunch of snippets/components which makes it a quick start. It has snippets for component syntax For e.g. rafce
* PropTypes are used to make your code robust and to catch errors 
* You can use Style Components for styling react components
* 
```
rafce (component)
impt (to import prop types)
rfce

```

* Flow of ReactJS app
-- public/index.html
---- src/index.js (has reference to root app component which gets replaced)
----


* Writing the app.js in function and class style
```javascript

// Function style
import Header from './components/Header'

const App = () => {
  const appTitle = "My Tasker!";
  return (
    <div className="container">
      <Header />
     <h1>{appTitle}</h1>
     <h1>Welcome to ReactJS Beginner!</h1>
    </div>
  );
}
export default App;


// Class style
import React from 'react'
import Header from './components/Header'
class App extends React.component{
  render(){
    const appTitle = "My Tasker!";
    return (
      <div className="container">
        <Header />
      <h1>{appTitle}</h1>
      <h1>Welcome to ReactJS Beginner!</h1>
      </div>
    );
  }
}

export default App;
```

###### Props, defaultProps and PropTypes
* You can pass props to components. Props are nothing but attributes that are set to elements. You can also define default prop values.
```javascript
const Header = (props) => {
    return (
        <header>
        <h2>Hello {props.title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: "Track Tasks!"
}

export default Header
```

* Prop Types is something similar to setting property types. It makes your code robust.
```javascript
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
        <h2>Hello {props.title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: "Track Tasks!"
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
```

##### Styling in Components
* CSS within react can be done using stylesheets or using style components or by using direct css inline within components
* For inline CSS, you will use style={{ color: 'red', backgroundColor:'black'}}
* Notice the above line to see how the CSS property names exclude usage of hyphens and instead use camel casing for naming inside react
* Or use a variable in the component with the above values and use a single curly braces and have this variable called in the relevant place as in 
```javascript

<header style={headingStyle}>
</header>
...

const headingStyle ={
    color: 'red',
    backgroundColor: 'black'
}
```

```javascript
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return <button style={{backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    text: "Add",
    color: "steelBlue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button

```

* Simple component using map to parse through an array
```javascript
const tasks = [
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Jan 1st at 1:40am',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Mar 1st at 2:40pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Apr 1st at 5:40pm',
        reminder: false
    }
]

const Tasks = () => {
    return (
        <>
          {tasks.map((t) => (
              <h3 key={t.id}>{t.text}</h3>
          ))}  
        </>
    )
}

export default Tasks
```
-- You can use fontawesome or install react icons ($ npm i react-icons) which allows you to use multiple icon sets
```javascript
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
          {tasks.map((t) => (
              <Task key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Tasks

```
```javascript
import {FaTimes} from 'react-icons/fa'

function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}<FaTimes style={{ color: 'red', cursor: 'hand' }} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```
* for build, stop the server and run 
$ npm run build (this will create a build folder)

* for production build to run the application from the build folder
$ npm i -g serve (basic http server)
$ serve -s build -p 8000 

* to mock data you can make use of json server
$ npm i json-server
When you inspect the React component in the browser, you will notice that the message would have changed to show that the build is off of production server (icon will be blue color)


Modify package.json to include the below line
"server": "json-server --watch db.json --port 5000"

** You can also try using https://jsonplaceholder.typicode.com/ if you do not want to setup json server

$ npm run server (from installation folder to start json server)
$ npm start (to start react dev server)

Now try to move the tasks array into db.json. Make sure to have double quotes around key value pairs. Json Server as such would generate ID's for the records that gets created. 

Now, you can see the tasks array in the json server when you type in http://localhost:5000/tasks


# useEffect - for creating side effects


```javascript
```

```javascript
```



# 

$ npm i react-router-dom

In app.js, we are returning a container div class. We will create new file Footer.js