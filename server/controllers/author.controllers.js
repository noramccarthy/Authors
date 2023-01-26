const Author = require('../models/author.models');

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong with Author.create()",
                    error: err
                })
            )
    },

    getAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => {
                console.log(allAuthors)
                res.json(allAuthors)
            })
            .catch((err) => 
                res.status(400).json({
                    message: "Something went wrong with Author.find()",
                    error: err
                })
            )
    },

    getOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(author=> res.json(author))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong with Author.findById()",
                    error: err
                })
            );
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong with Author.findByIdAndUpdate()",
                    error: err
                })
        );
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch((err) => 
                res.status(400).json ({
                    message: "Something went wrong with Author.findByIdAndDelete",
                    error: err
                })
        );
    }
};