const db = require("./dbconfig");

const getList = async () => {
    console.log("GetList : ")
    let connection
    try {

        connection = db.getConnection();
        if (!connection) {
            return { "message": "No connection found" }
        }
        console.log("we have connection")
        const [result] = await db.query("SELECT * FROM users");
        if (result.length === 0) {
            return { "message": "No data found" }
        }
        return { result }
    } catch (error) {
        return { "message": error.message }
    }
}

module.exports = { getList }