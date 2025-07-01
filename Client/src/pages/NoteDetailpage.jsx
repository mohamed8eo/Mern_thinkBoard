import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailpage = () => {
  const [Note, setNote] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Save, setSave] = useState(false)

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => { 
    const FetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data)
      } catch (error) {
        console.log('Error in Fetching Note', error)
        toast.error('Failed to Fetch the Note')
      } finally {
        setLoading(false)
      }
    }
    FetchNote()
  }, [id])


  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${id}`)
      toast.success("Note deleted successfully")
      navigate("/");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  }

  const handleSave = async () => {
    if (!Note.title.trim() || !Note.content.trim()) {
      toast.error('Plase add a title or content')
      return;
    }
    setSave(true)
    try {
      await api.put(`/notes/${id}`, Note)
      toast.success('Note Updated successfully')
      navigate('/')
    } catch (error) {
      console.log("Error in handleSave", error);
      toast.error("Failed to update  note");
    } finally {
      setSave(false)
    }
  }

  if (Loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to='/' className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
          
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4 flex flex-col gap-2.5">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full focus:outline-none"
                  value={Note ? Note.title : ""}
                  onChange={(e) => setNote({...Note,title:e.target.value})}
                />
              </div>

              <div className="form-control mb-4 flex flex-col gap-2.5"> 
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 w-full resize-none focus:outline-none"
                  value={Note ? Note.content : ""}
                  onChange={(e) => setNote({...Note,content:e.target.value})}
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={Save} onClick={handleSave}>
                  {Save ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailpage