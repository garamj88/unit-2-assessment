import mongoose from "mongoose"

const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: {type: String, unique: true}
})

const Book = mongoose.model("Book", bookSchema)

export {
  Book
}