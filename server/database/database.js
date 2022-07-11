require("dotenv").config()
module.exports = {
    db: `mongodb://localhost:27017/${process.env.DATABASE}`
}