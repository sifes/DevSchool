function buriedNum(object, num) {
    let result = null;
    for (let key in object) {
        if (typeof object[key] === "object") {
            has = buriedNum(object[key], num)
            if (has !== null) {
                return result = key
            }
        }
        if (typeof object[key] === "number") {
            if (object[key] === num) {
                result = key;
            }
        }
    }
    return result;
}

object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
console.log(buriedNum(object, 250)); // r1n