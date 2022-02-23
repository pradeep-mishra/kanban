import { derived, writable } from 'svelte/store'
import data from '../data/board'
export const searchStr = writable('')
export const boards = writable(data)
export const filtered = derived([searchStr, boards], ([$search, $boards]) => {
  const search = $search.toLowerCase()
  if (!search) return $boards
  let filterData = $boards.map((board) => {
    let item = { ...board }
    item.tickets = board.tickets.filter(({ title, assignee }) => {
      return (
        title.toLowerCase().includes(search) ||
        assignee.toLowerCase().includes(search)
      )
    })
    return item
  })
  return filterData
})
