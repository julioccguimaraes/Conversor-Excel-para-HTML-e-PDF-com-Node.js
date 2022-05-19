const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PdfWriter = require("./PdfWriter")

const reader = new Reader()
const writer = new Writer()

async function main() {
    const data = await reader.read("./users.csv")
    
    const rowsCols = Processor.process(data)
    
    const users = new Table(rowsCols)
    
    const html = await HtmlParser.parser(users)

    writer.writer("index.html", html)

    PdfWriter.writepdf("index.pdf", html)
}

main()
