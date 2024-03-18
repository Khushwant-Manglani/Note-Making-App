import { useState } from 'react';
import { AppContext } from '../context/context'
import { Header } from '../components/Header';
import { NoteForm } from '../components/NoteForm';
import { Notes } from '../components/Notes';

export const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider value={{ toggle, setToggle }} >    
      <div className={`min-h-screen flex flex-col gap-20 bg-gray-${!toggle ? '800' : '50'}`}>
        <Header />
        <NoteForm />
        <Notes />
      </div>
    </AppContext.Provider>
  )
}