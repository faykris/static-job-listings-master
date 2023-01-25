import { addString, deleteString, clearStrings } from './reducer'

export const addStringAction = (payload:string) => {
  return {
    type: addString.type,
    payload
  }
}

export const deleteStringAction = (payload:string) => {
  return {
    type: deleteString.type,
    payload
  }
}

export const clearStringsAction = () => {
  return {
    type: clearStrings.type
  }
}