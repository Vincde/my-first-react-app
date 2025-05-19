import { useState, useEffect, useMemo } from "react";


function App({todos, filter}) {
  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
}


export default App;