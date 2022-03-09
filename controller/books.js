import { Book } from "../models/book.js"

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      title: 'Book List',
      books
    })
  })
}

function newBook(req, res) {
  res.render('books/new', {
    title: "Add a book"
  })
}

function create(req, res) {
  Book.create(req.body)
  .then(() => {
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/books')
  })
}

export {
  index,
  newBook as new,
  create,
  deleteBook as delete,
}