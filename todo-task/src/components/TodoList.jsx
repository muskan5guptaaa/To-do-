import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i class="uil uil-search">
        onClick={e=>{
            props.deleteItem(props.index)
        }}</i>
        </span>
    </li>
  )
}

export default Todolist