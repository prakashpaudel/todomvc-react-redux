# TodoMVC with React and Redux


## Work Flow
  - Add presentational components
    - Have callbacks for actions
    - Link with todomvc CSS
    - Test components
  - Redux
    - Actions and Reducers
      - Test action and reducers
    - Add Provider in root
    - Add container components
  - Check functionality
    - Initial check on browser
    - Write tests for container components
    - Full app (not sure how yet, let's see)
      - Browser testing?

## Structure

**Components**

    - TodoApp
      - AddTodo
      - TodoList
        - Todo
          - TodoInput
      - Footer
        - Filter

**State**

    - Todos (array)
      - Todo (object)
        - id, text, complete
    - Filter (string)
      - all, completed, active
      
**Actions**
  
    - Todo
      - add, complete, edit, delete
    - Filter
      - set filter
