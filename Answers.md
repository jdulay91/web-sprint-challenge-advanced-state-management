1. What problem does the context API help solve?
prop drilling


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store holds the global state of the application, it basically 'store's the state for redux

actions does actions, usually this is where posts,gets and all that happens. they are the actions that change the state of your app

reducers
reducers are pure functions. they are set up to take an action and a previous state. and they are the ones that handle and reduce prevstate + action into current or new state


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?


application state is basically state that is accessible through your whole application, and Component state is available to a specific component

it is best to use application state, when that particular slice of state needs to be accessible throughout your app. and it is best to do component state when only a specific component needs it. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a type of middleware meaning before a state or a component renders it passes through a thunk function and returns the state, or does not return the state. 
i belive the thunk middleware returns a function from an action creator instead of an action object


1. What is your favorite state management system you've learned and this sprint? Please explain why!

i think redux is good if i get the hang of it. but in terms of being the easiest to do i would have to go with either context api or just basic prop-drilling