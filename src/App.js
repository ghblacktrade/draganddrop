import './App.css';
import {useState} from "react";


const App = () => {
    const [board, setBoard] = useState([
        {id: 1, title: 'Todo', items: [{id:1, title: 'visit to market'},{id:2, title: 'throw out rhe trash'}, {id: 3, title: 'Eat'}]},
        {id: 1, title: 'Check', items: [{id:1, title: 'REACT KOD'},{id:2, title: 'REACT TASKS'}, {id: 3, title: 'EAT'} ]},
        {id: 1, title: 'Done', items: [{id:1, title: 'Go to gym'},{id:2, title: 'Cleaning in the room'}, {id: 3, title: 'Eat'} ]}
    ])

function dragOverHandler(e, board, item) {
    e.preventDefault()
    
}

function dragLeaveHandler(e) {
    
}

function dragStartHandler(e) {
    
}

function dropHandler(e, board, item) {
    e.preventDefault()
}

  return (
      <div className='App'>
          {board.map(board =>
          <div className='board'>
              <div className='board__title'>
              {board.title}

              </div>
          {board.items.map(item =>
              <div className='item'
              onDragOver={(e) => dragOverHandler(e, board, item)}
                   onDragLeave={e => dragLeaveHandler(e)}
                   onDragStart={(e) => dragStartHandler(e)}
                   onDrop={(e) => dropHandler(e, board, item)}
                   className='todo'
                   draggable={true}
              >
                  {item.title}

              </div>
              )}
          </div>
          )}
      </div>
  )
}
export default App;
