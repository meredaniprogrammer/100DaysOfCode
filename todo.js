// A Todo App

let todos = [
    {
      text: "Order cat food",
      completed: false
    },
    {
      text: "Clean kitchen",
      completed: true
    },
    {
      text: "Buy food",
      completed: true
    },
    {
      text: "Do work",
      completed: false
    },
    {
      text: "Exercise",
      completed: true
    }
  ];

  const filters = {
    searchText: ''
  }

  const renderedTodos = function(todos, filter){
    const filteredTodos = todos.filter(function(todo){
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function(todo){
      return !todo.completed
    })
    document.querySelector('#todos').innerHTML = '' 
  
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
  
    filteredTodos.forEach(function(mytodo){
      const p = document.createElement('p')
      p.textContent = mytodo.text
      document.querySelector('#todos').appendChild(p)
    })
  }
    renderedTodos(todos, filters)

  document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
  })

  document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.text.value)
    todos.push({
      text: e.target.elements.text.value,
      completed: false
    })
    renderedTodos(todos, filters)
    e.target.elements.text.value = ''
  })
