class Solution {
  /**
   * @param {string} cell
   * @param {Map<number, Set<string>>} this_map
   * @return { number} objIndex
   */
  helper(
    cell: string,
    this_map: Map<number, Set<string>>,
    objIndex: number,
  ): boolean {
    if (!this_map.has(objIndex)) {
      this_map.set(objIndex, new Set<string>());
    }
    const cObjIndex = this_map.get(objIndex);
    if (cObjIndex.has(cell)) {
      return false;
    }
    cObjIndex.add(cell);
    return true;
  }
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

        if (!this.helper(cell, row_map, row)) {
          return false;
        }
        // if (!col_map.has(col)) {
        //   col_map.set(col, new Set<string>());
        // }
        // const cCol = col_map.get(col);
        // if (cCol.has(cell)) {
        //   return false;
        // } else {
        //   cCol.add(cell);
        //   col_map.set(col, cCol);
        // }

        if (!this.helper(cell, col_map, col)) {
          return false;
        }

        const boxRow = Math.floor(row / 3);
        const boxCol = Math.floor(col / 3);

        const block = boxRow * 3 + boxCol;

        if (!this.helper(cell, grid_map, block)) {
          return false;
        }

        // if (!grid_map.has(block)) {
        //   grid_map.set(block, new Set<string>());
        // }
        // const cBlock = grid_map.get(block);
        // if (cBlock.has(cell)) {
        //   return false;
        // } else {
        //   cBlock.add(cell);
        //   grid_map.set(block, cBlock);
        // }
      }
    }
    return true;
  }
}

const sol = new Solution();

