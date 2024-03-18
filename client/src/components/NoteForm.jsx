import { useContext } from "react"
import { AppContext } from "../context/context"
import axios from "axios"

export const NoteForm = () => {
  const { toggle } = useContext(AppContext);
  let title = "", description="";

  return (
    <div className="w-6/12 h-1/2 mx-auto" >
        
        <div className={`flex flex-col gap-10 px-20 py-10 text-2xl font-light text-gray-${!toggle ? '50' : '800'} border-2 border-gray-${!toggle ? '50' : '800'} rounded`}>
          <div className="flex flex-row gap-28">
            <label for="title" >Title: </label>
            <input type="text" name="title" id="title" className={`w-9/12 text-gray-${!toggle ? '800' : '50'} bg-gray-${!toggle ? '50' : '800'} border-none`} placeholder="Enter the title..." onChange={(e) => {
              title=e.target.value
            }} />
          </div>
          <div className="flex flex-row gap-10">
            <label for="desc" >Description: </label>
            <textarea name="desc" id="desc" cols="42" rows="4" className={`text-gray-${!toggle ? '800' : '50'} bg-gray-${!toggle ? '50' : '800'} border-none`} placeholder="Enter the description..." onChange={(e) => {
              description=e.target.value
            }} />
          </div>
          <div>
            <button className={`text-center ml-3 px-60 border-2 border-gray-${!toggle ? '50' : '800'} rounded hover:bg-gray-${!toggle ? '900' : '100'} transition-all`} onClick={async () => {
              try {
                await axios.post('http://localhost:3000/api/notes/', {
                  title: title,
                  description: description 
                })
              } catch(err) {
                console.log(err);
              }
            }}>Add Note</button>
          </div>
        </div>
    </div>
  )
}