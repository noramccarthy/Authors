const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author's name is required"],
            minLength: [3, "Author's name must be at least 3 characters"]
        }
    },
    {timeseries: true}
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;