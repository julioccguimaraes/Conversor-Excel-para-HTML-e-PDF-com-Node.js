class Table {
    constructor(arr) {
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }

    get rowCount() { // get transforma o método em atributo virtual podendo ser acessado por table.rowCount, sem o '()'
        return this.rows.length
    }

    get columnCount() {
        return this.header.length
    }
}

module.exports = Table