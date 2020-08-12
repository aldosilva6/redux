# redux


A store that holds the state of your application

An action that describes the changes in the state of the application

A reducer which actually carries out the state transition depending on the action


Three Principles

First
"The state of your whole application is stored in an object tree within a single store"

Second
"The only way to change the state is to emit an action, an object describing what happened"

Third
"To specify how the state tree is transformed by actions, you write pure reducers"

*Middleware
Is the suggested way to extend Redux with custom functionality
