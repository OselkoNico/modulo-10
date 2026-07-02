  import { WINNER_COMBOS } from "../constants"
  
  export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos todas las combinaciones ganadoras, para ver si X u O han ganado
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null // Si no hay ganador
  }

  // Revisamos si hay un empate, si no hay más espacios vacíos en el tablero
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }