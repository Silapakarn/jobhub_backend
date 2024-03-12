const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isAgent: {
            type: Boolean,
            default: false
        },
        skills: {
            type: Array,
            required: false
        },
        profile: { 
            type: String,
            required: false
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("User", UserSchema);