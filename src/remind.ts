import { getColsIndex, getRowsData } from './spreadsheet'
import { sendMessage } from './line'
import type { RowsType } from './type'

const sendFromSheet = (sheetName: string) => {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSpreadsheet.getSheetByName(sheetName)
  if (!sheet) {
    throw new Error('Sheet not found')
  }

  const colsIndex = getColsIndex(sheet)
  const rowsData: RowsType[] = getRowsData(sheet, colsIndex)

  const createRandomIndex = (numRows: number) => {
    const randomIndices: number[] = []
    while (randomIndices.length < numRows) {
      const randomIndex = Math.floor(Math.random() * rowsData.length)
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex)
      }
    }
    return randomIndices[numRows - 1]
  }
  const { english: english1, japanese: japanese1 } =
    rowsData[createRandomIndex(1)]

  sendMessage(`■ ${english1}\n□ ${japanese1}`)
}

export const Term = () => {
  sendFromSheet('Term')
}
export const Phrase = () => {
  sendFromSheet('Phrase')
}
export const PenPhrase = () => {
  sendFromSheet('PenPhrase')
}
