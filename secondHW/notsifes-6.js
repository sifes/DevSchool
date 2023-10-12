function landPerimeter(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'X') {
                res += 4;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'X' && arr[i][j + 1] === 'X') {
                res -= 2;
            }
            if (i + 1 < arr.length && arr[i][j] === 'X' && arr[i + 1][j] === 'X') {
                res -= 2;
            }
        }
    }
    return res;
}
console.log(landPerimeter([
    "XOOOXOO",
    "OXOOOOO",
    "XOXOXOO",
    "OXOXXOO",
    "OOOOOXX",
    "OOOXOXX",
    "XXXXOXO"]
)); // 54

console.log(landPerimeter([
    "OOOOXO",
    "XOXOOX",
    "XXOXOX",
    "XOXOOO",
    "OOOOOO",
    "OOOXOO",
    "OOXXOO"]
)); // 40
