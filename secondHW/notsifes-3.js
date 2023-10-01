function groupAnagrams(arr) {
    const res = []
    arr.sort((a, b) => a.length - b.length);
    arr = arr.map(el => el.split(''));
    while (arr.length) {
        const firstElement = arr[0];
        const group = [];
        for (let i = 0; i < arr.length; i++) {
            if (firstElement.length === arr[i].length) {
                if ([...firstElement].sort().join('') === [...arr[i]].sort().join('')) {
                    group.push(arr[i].join(''));
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
        if (group.length) res.push(group);
    }
    return res
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));