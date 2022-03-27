let notes = [
  {
    id: '110',
    title: 'Note 1',
    body: 'Hello this is note 1',
  },
];
export const getNotes = () => {
  return notes;
};
export const deleteNote = (id) => {
  notes = notes.filter((note) => note.id !== id);
};
export const createNotes = (title, body) => {
  notes = notes.concat({
    id: Math.floor(Math.random() * 100000).toString(),
    title,
    body,
  });
};
