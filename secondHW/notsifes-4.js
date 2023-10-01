function sausageUnpack(goods) {
    let result = '';
    let count = 0;
    for (let i = 0; i < goods.length; i++) {
        const package = goods[i];
        for (let j = 0; j < package.length; j++) {
            const box = package[j];
            if (box[0] === "[" && box[box.length - 1] === "]") {
                let sausage = new Set(box.slice(1, box.length - 1))
                if (sausage.size === 1 && sausage.has(")") || sausage.has(")") || sausage.has("I") || sausage.has("@")) {
                    if (count === 4)
                        count = 0;
                    else {
                        result += ' ' + ((box.slice(1, box.length - 1)).split('').join(' '))
                        count++;
                    }
                }
            }
        }
    }
    return result.trim();
}
console.log(sausageUnpack([["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU",
    "[IlII]"], ["IuI", "[))))]", "x"], []]));