import Note from "../models/Note.js";
import mongoose from "mongoose";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // sosort({createdAt: -1}) => make the newest be the first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error on getAllNotes Controlle", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteByid = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error on getNoteByid Controlle", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newnote = new Note({ title, content });
    await newnote.save();
    res.status(201).json({ message: "Create new Note successfully!" });
  } catch (error) {
    console.error("Error on createNote Controlle", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const UpdateNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!UpdateNote) return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note Updated successfully!" });
  } catch (error) {
    console.error("Error on Updating Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid note ID" });
    }
    const deleted = await Note.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};