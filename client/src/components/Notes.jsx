import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import axios from 'axios'

const Note = (props) => {
  const { toggle } = useContext(AppContext);

  return (
    <div className={`w-96 h-96 rounded border-2 border-gray-${!toggle ? '50' : '800'} `}> 
      <div>
        <textarea type="text" className={`w-full h-20 px-4 py-3 text-xl text-center border-none box-border text-gray-${!toggle ? '800' : '50'} bg-gray-${!toggle ? '50' : '800'} `} value={props.note.title} />
      </div>
      <div>
        <textarea className={`w-11/12 m-4 px-4 py-2 h-52 border text-base rounded border-none box-border text-gray-${!toggle ? '800' : '50'} bg-gray-${!toggle ? '50' : '800'} `} value={props.note.description} />
      </div>
      <div className="flex flex-row justify-around">
        <button className={`px-8 py-2 rounded border-2 border-gray-${!toggle ? '50' : '800'} text-gray-${!toggle ? '50' : '800'} bg-gray-${!toggle ? '800' : '50'} `} onClick={() => {
          
        }}>Delete</button>
        <div className={`px-8 py-2 rounded border-2 border-gray-${!toggle ? '50' : '800'} text-gray-${!toggle ? '50' : '800'} bg-gray-${!toggle ? '800' : '50'} `} >
          Date - {props.note.date}
        </div>
      </div>
    </div>
  )
}

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/api/notes/')
    setNotes([...response.data]);
  }, []);

  console.log(notes);

  let renderNotes = notes.map((note) => {
    return <Note key={note._id} note={note} />
  }) 

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-36 flex-wrap">
      {renderNotes}
    </div>
  )
}