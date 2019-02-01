1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- map() - Map, maps over a given array and returns a new array after a specified action has been done to each item of the previous array.
- filter() - filters an array and returns a new array based on a defined "filter"/parameter and will only return items that match that.
-assign()- receives an object, and will copy the values within the obj and create/return a new object with the previous objects values and whatever we add. 



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: Actions are objects built by action creators that basically are the “hype men” of redux. What I mean by that Is a user’s event on our web app starts the party, but our action then man the DJ booth and starts blasting music to get our reducers shaking and moving. In more technical terms this relationship is an action creator dispatching an action (an object with a type and payload) to our reducer which will allow the reducer to set our state based on the defined type and payload. Using middleware we can then set our multiple actions throughout one action creator, which allows us to do fun stuff like loading animations and error messaging.

Reducers: are in my mind are the crux of redux. They are what define our state and allow us to create unique interfaces based on that moment in time. The “state-keepers” are the data control center of our redux apps and are critical to our success.

Store: Our Store holds the whole state tree for our application *Gulps*. In order to update our store we must use actions to dispatch to it. But our store is exactly what is sounds like, the storage center for our app. While actions and reducers interact and update the Store just responds to those actions and updates/rerenders accordingly. We use connect in our components to pull our “stored” state into our apps as props. 
It can be referred to as the center of truth because it holds the state for the entirety of our application... no pressure tho :P 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state, is like our store, responsible for the state of the entire application, the "global scope". Whereas Component state is the state set within a single component. Using component state is create when adding a new character or search item so that we can store the response locally and then pass it to our app state to be rendered and stored. Application state is great for managing the enterity of our project and making sure data is going to the right components throughout. 


1.  What is middleware?
- Middleware allows us to create async actions within our actions. This is awesome beacuse it allows us to create actions for stuff like loading screens or error messages.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-Redix thunk is a middleware package to be used in our action creators. Much like mentioned above is allows us to dispatch multiple action types throughout a function allowing us to do fun stuff like load pages, error messaging etc. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
- the usage of link was a nice way to avoid using the word connect. But connect is the method that allows us to map our state to props and connect our components to our state&store ! 
