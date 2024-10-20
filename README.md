---

# React Native Examples

Welcome to the **React Native Examples** repository! This repository contains a collection of basic examples to help you get started with React Native. Each example is designed to cover a fundamental concept in React Native development. Whether you’re new to mobile development or already familiar with React, these examples will help you understand the core concepts and get up to speed.

## Table of Contents

1. [React Native Roadmap](#react-native-roadmap)
2. [React Native in Detail](#react-native-in-detail)
3. [How React Works](#how-react-works)
4. [Setting Up Your Development Environment](#setting-up-your-development-environment)
5. [Creating Your First React Native App](#creating-your-first-react-native-app)
6. [Understanding Components and State](#understanding-components-and-state)
7. [Conclusion and Further Resources](#conclusion-and-further-resources)

---

## React Native Roadmap

React Native is a framework that allows you to build mobile applications using JavaScript and React. It’s essential to understand the core concepts and the development process before jumping into writing code.

Here’s a **[Roadmap to learn React Native](https://roadmap.sh/react-native)**:  

### Key Topics from the Roadmap:
- **Core React Native concepts**: Learn about JSX, Components, Props, State, and the basic structure of React Native apps.
- **Platform-specific code**: Understand how to write code that can target both iOS and Android.
- **APIs and Libraries**: Explore built-in APIs and how to integrate third-party libraries for added functionality.
- **Native Modules**: Learn how to write native code in Java/Kotlin for Android or Objective-C/Swift for iOS, to extend React Native’s capabilities.
  
For more details on the roadmap, visit the **[Roadmap.sh React Native page](https://roadmap.sh/react-native)**.

### Learning Resources:
- [React Native Official Docs](https://reactnative.dev/docs/getting-started)
- [React Native Express](http://www.reactnative.express/)
- [React Native School](https://www.reactnativeschool.com/)

---

## React Native in Detail

React Native’s architecture can be a little complex, but once you understand how it works under the hood, you can leverage it to build highly performant mobile apps.

Check out this in-depth article: **[How does React Native Work?](https://medium.com/front-end-weekly/how-does-react-native-work-understanding-the-architecture-d9d714e402e0)**

Here’s a high-level overview of how React Native functions:

- **Bridge Architecture**: React Native uses a "bridge" to communicate between JavaScript and the native layers (Java/Objective-C). The UI is rendered using native components, but the business logic is handled in JavaScript.
  
  ![React Native Bridge](https://miro.medium.com/max/875/1*aTMB5THRE3CaX_wTygIbmA.png)
  
- **JavaScript Thread**: This is where your React code runs, including components and logic.
- **Native Thread**: Manages the rendering of native UI components.
- **Bridge Thread**: Acts as a mediator that handles communication between JavaScript and Native threads asynchronously.

This **bridge** allows React Native to offer a high level of performance while maintaining flexibility for developers to write JavaScript.

---

## How React Works

React Native is built on top of React, which means that understanding how React works will help you understand React Native better.

Here’s a detailed breakdown of React’s behind-the-scenes workings: **[How React Works](https://medium.com/@navnit0707/how-react-works-behind-the-scene-a-detailed-explanation-of-loading-a-ui-on-screen-by-react-ccd62e27f631)**.

### Key Concepts:
- **Virtual DOM**: React uses a Virtual DOM to keep track of changes in the UI. It compares the new virtual DOM with the old one (a process called "diffing") and only updates the real DOM where changes are detected.
- **Reconciliation**: This is how React updates the UI. When state or props change, React re-renders the component and updates the UI efficiently.
  
  ![React Reconciliation](https://miro.medium.com/max/875/1*xU9hUXGm0bE6cURBo5j3eg.gif)

---

## Setting Up Your Development Environment

To develop with React Native, you’ll need to set up your environment correctly. Here are the steps:

1. **Install Node.js**: This is required to run JavaScript on your development machine. You can download it from [nodejs.org](https://nodejs.org/).
2. **Install Expo CLI**: Expo provides a set of tools to quickly get started with React Native development. Use the following command to install:
   ```bash
   npm install -g expo-cli
   ```
3. **Install Android Studio**: If you plan on developing for Android, install Android Studio to set up an Android emulator.

More details on setting up your environment can be found in the **[official React Native documentation](https://reactnative.dev/docs/environment-setup)**.

---

## Creating Your First React Native App

Let’s create your first React Native app using Expo:

1. Run the following command to create a new project:
   ```bash
   expo init MyFirstApp
   ```
2. Navigate to the project folder:
   ```bash
   cd MyFirstApp
   ```
3. Start the development server:
   ```bash
   expo start
   ```

You can now open the app in the Expo Go app on your mobile device or run it in an emulator.

---

## Understanding Components and State

React Native, like React, is built around **components**. Components are the building blocks of your application. They manage their own **state** and use **props** to communicate between each other.

### Components:
- **Functional Components**: Simple, stateless components.
- **Class Components**: Components with state and lifecycle methods (though with React hooks, class components are now less common).

### State and Props:
- **State**: Represents data that changes over time.
- **Props**: Immutable data passed from parent to child components.

Here’s an example of a functional component with state:
```js
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

---

## Conclusion and Further Resources

React Native is a powerful tool for building cross-platform mobile apps using JavaScript and React. With these examples and the provided resources, you should be well on your way to mastering the basics.

### Additional Learning Resources:
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Express](http://www.reactnative.express/)

---

This README provides a walkthrough and key concepts to help you understand how React Native works. Feel free to explore the examples in this repository to get a hands-on feel for mobile development with React Native!

---
