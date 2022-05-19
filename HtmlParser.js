const ejs = require("ejs")

class HtmlParser {
    static async parser(table) {
        try{
            return await ejs.renderFile("./table.ejs", {reader: table.header, rows: table.rows })
        } catch (error) {
            return undefined
        }
      
    }
}

module.exports = HtmlParser