function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        const res = [...str].map((curLetter, index) => {
            index = index % key.length;
            const indexOfCurLetter = abc.indexOf(curLetter);
            const numberOfShifts = abc.indexOf(key[index]);
            if (indexOfCurLetter === -1) {
                return curLetter;
            }
            return abc[(indexOfCurLetter + numberOfShifts) % abc.length];
        })
        return res.join('')

    };
    this.decode = function (str) {
        const res = [...str].map((curLetter, index) => {
            index = index % key.length;
            const indexOfCurLetter = abc.indexOf(curLetter);
            const numberOfShifts = abc.indexOf(key[index]);
            if (indexOfCurLetter === -1) {
                return curLetter;
            }
            return abc[(indexOfCurLetter + abc.length - numberOfShifts) % abc.length];
        })
        return res.join('')
    };
}
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"

c = new VigenèreCipher(key, abc);

c.encode('codewars') // 'rovwsoiv'
c.decode('rovwsoiv') // 'codewars'