# **Redux**

Code is written using = https://redux-toolkit.js.org/tutorials/quick-start

**Redux** is a **state management library** for JavaScript apps, commonly used with **React**. It helps you manage the **state** (data) of your entire app in a predictable and organized way. Let’s break it down step-by-step:

### What Problem Does Redux Solve?

Imagine your app as a tree of components, each with its own data or state. As your app grows, passing data between components can get complicated. You might have a situation where **one component needs data from another** component far away in the tree. In this case, **managing state manually becomes tricky**, which is where **Redux** comes to the rescue!

Redux provides a **centralized place** (called a **store**) where the state of your entire app is kept. All components can **get** or **update** this state in a controlled way.

### Basic Concepts of Redux

1. **Store**: This is a special place where all the state (data) of your app is stored. Think of it as a giant box holding all the information of your app.

2. **Action**: An **action** is an instruction that tells Redux **what happened**. It’s just a plain JavaScript object with a `type` property, like `{ type: 'INCREMENT' }`. It describes **what you want to change**.

3. **Reducer**: A **reducer** is a function that takes the **current state** and an **action** and returns the **new state**. Imagine a reducer as a person in charge of the "box" (store) who decides what to do based on the action given.

4. **Dispatch**: This is how you **send an action** to the store. Think of it like placing an order to update the state.

5. **Subscribe**: Allows a component to **listen** to state changes, so it gets updated automatically when the state changes.

### How Redux Works Step-by-Step

1. **Store** is the centralized box holding the app’s state (data).
2. **Actions** are sent (dispatched) to the store describing what needs to change.
3. The **reducer** looks at the action and decides how to update the store’s state.
4. The store then **notifies** all parts of the app that the state has changed.
5. Components **access** the new state from the store.

### Visual Example: Counter App with Redux

Let’s say you have a simple app with a counter:

1. The **store** has a piece of state called `count` with a value of `0`.
2. You click a button to increase the count. You **dispatch an action** like `{ type: 'INCREMENT' }`.
3. The **reducer** sees this action and increases the `count` value by `1`.
4. The **store** now holds the new state where `count` is `1`.
5. Your component automatically sees the change and updates the display.

### Key Advantages of Redux

- **Centralized state**: All your app’s data is in one place.
- **Predictable updates**: With reducers, state changes in a consistent, clear manner.
- **Debugging and testing**: Actions and state changes are predictable and easy to trace.

### Summary in Simple Words

Think of Redux as a **library that organizes and manages your app’s data** in a central place (the store). Components can access or update this data through clear rules and functions. This organization helps you build more consistent and maintainable apps, especially as your app grows.

In short:
- **Actions** tell the store **what happened**.
- **Reducers** decide **how to update** the state.
- **Store** is the central place where all the app’s state is kept.

That’s Redux in a nutshell! 😊