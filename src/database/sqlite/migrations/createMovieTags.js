const createMovieTags = `
  CREATE TABLE IF NOT EXISTS movieTags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    note_id INTEGER REFERENCES movieNotes(id),
    user_id INTEGER REFERENCES users(id),
    name INTEGER NOT NULL
  )
`
//module.exports = createMovieTags;