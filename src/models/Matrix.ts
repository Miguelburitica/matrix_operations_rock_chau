class Matrix {
  data: Array<Array<any>>
  columns: number
  rows: number
  dimentions: String

  constructor(columns: number, rows: number = columns) {
    this.columns = columns
    this.rows = rows
    this.dimentions = `${columns}x${rows}`

    const newMatrix = Array(columns)
    this.data = newMatrix.map(() => Array(rows))
  }

  feed(matrix: Array<Array<any>>) {
    if (matrix.length >= this.columns || matrix[0].length >= this.rows) return false
    
    this.data = matrix
    return true
  }

  getColumn(index: number) {
    if (index > this.columns) return []
    const column = this.data[index]

    return column
  }

  getRow(index: number) {
    if (index > this.rows) return []
    const row: Array<any> = []
    
    this.data.map(column => {
      column.map((element, i) => {
        if (i === index) row.push(element)
      })
    })

    return row
  }

  getElement(m: number, n: number) {
    if (m > this.columns || n > this.rows) return []
    let response = this.getColumn(m)[n]

    return response
  }

  additon(matrix: Matrix) {
    if (this.columns !== matrix.columns || this.rows !== matrix.rows) return false
    
    const matrixResult = this.data.map((column, i) => {
      return column.map((element, j) => {
        return element = element + matrix.data[i][j]
      })
    })

    this.data = matrixResult
    
    return matrixResult
  }
}