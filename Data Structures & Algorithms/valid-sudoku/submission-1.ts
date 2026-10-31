class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board: string[][]): boolean {
    const row_map = new Map<number, Set<string>>();
    const col_map = new Map<number, Set<string>>();
    const grid_map = new Map<number, Set<string>>();

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        const cell = board[row][col];
        if (cell == ".") {
          continue;
        }
        if (!row_map.has(row)) {
          row_map.set(row, new Set<string>());
        }
        const cRow = row_map.get(row);
        if (cRow.has(cell)) {
          return false;
        } else {
          cRow.add(cell);
          row_map.set(row, cRow);
        }

        if (!col_map.has(col)) {
          col_map.set(col, new Set<string>());
        }
        const cCol = col_map.get(col);
        if (cCol.has(cell)) {
          return false;
        } else {
          cCol.add(cell);
          col_map.set(col, cCol);
        }

        const boxRow = Math.floor(row / 3);
        const boxCol = Math.floor(col / 3);

        const block = boxRow * 3 + boxCol;
        if (!grid_map.has(block)) {
          grid_map.set(block, new Set<string>());
        }
        const cBlock = grid_map.get(block);
        if (cBlock.has(cell)) {
          return false;
        } else {
          cBlock.add(cell);
          grid_map.set(block, cBlock);
        }
      }
    }
    return true;
  }
}
