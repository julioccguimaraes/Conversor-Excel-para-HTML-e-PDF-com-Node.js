class Processor {
    static process(data) {
        const rows = data.split("\r\n");

        const rowsCols = []
        
        rows.forEach(row => {
            rowsCols.push(row.split(","))
        });

        return rowsCols
    }
}

module.exports = Processor