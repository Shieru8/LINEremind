import { getColsIndex, getRowsData } from './spreadsheet'
import { sendPushMessage } from './line'
import type { RowsType } from './type'

const remind = () => {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSpreadsheet.getSheetByName('2024')
  if (!sheet) {
    throw new Error('Sheet not found')
  }

  const colsIndex = getColsIndex(sheet)
  const rowsData: RowsType[] = getRowsData(sheet, colsIndex)

  const randomIndex = Math.floor(Math.random() * rowsData.length)
  const { english, japanese } = rowsData[randomIndex]

  sendPushMessage(english)
  sendPushMessage(japanese)
}

export default remind
