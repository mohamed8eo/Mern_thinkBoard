import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'

import { useState } from 'react'
import { useEffect } from 'react'

import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'
import NotesNoteFound from '../components/NotesNoteFound'

const Homepage = () => {
  const [isRateLimited, setisRateLimited] = useState(false);
  const [Note, setNote] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() =>{
    const Fetchnotes = async () => {
      try {
        const res = await api.get('/notes')
        setNote(res.data)
        console.log(res.data)
        setisRateLimited(false)
      } catch (error) {
        console.log('Error Fetching Data', error)
        if (error.response.status === 429) {
          setisRateLimited(true)
        } else {
          toast.error('Falid to Load more Notes')
        }
      } finally {
        setisLoading(false)
      }
    }
      Fetchnotes();
  },[])
  return (
    <div className='min-h-screen'> 
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {isLoading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {Note.length === 0 && !isRateLimited && <NotesNoteFound/>}
        {Note.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Note.map((note) => (
              <div>
                <NoteCard key={note._id} note={note} setNote={setNote} />
              </div>
            )) }
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage
