### References
  * TraversyMedia [https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=802s]
  * https://github.com/bradtraversy/react-crash-2021

### Notes
- ReactJS is a library for building interfaces.
- Gives you a structure for the view layer
- React is the V in the MVC
- JS - Dynamic markup
- Interactive UI's with Virtual DOM
- Performance and testing
- Good handle on data types, variables, functions, loops, promises, async programming, array methods like forEach() & map(), fetch API and making HTTP requests

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
* Components can take in "props" which are attributes
```
<Header title="Sample title">
```
* Components can have states which is an object that determines how a componentt renders and behaves
* "App" or "global" state refers to a state that is available to the entire UI and not just to a single component
* Prior to react 16.8 we had to use class based components to use state. Now, we use functional components with hooks
* React hooks are functions that let us hook into React state and lifecycle features from function components
* * useState - Returns a stateful value and a function to update it
* * useEffect - Perform side effects in function components 


#### Starting a react project
```
$ node -v
$ npm -v (make sure it is greater than 5.x to use npx)
$ npx create-react-app task-tracker
$ cd task-tracker
$ npm start
```
* Chrome extension: React developer tools is a recommendation to view the states/components/props and other variables. If you run the application from the build folder, react dev tools would indicate that you are running the production build

