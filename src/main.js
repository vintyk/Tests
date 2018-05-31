function getMyName(myName) {
    return myName;
}
function getMyAge(myAge, prefix = ' годиков') {
    return myAge + prefix;
}
function wrtInTag(tag, msg, newLine) {
    let tagOpen = '<' + tag + '>';
    let tagClose = '</' + tag + '>';
    if (newLine != undefined) {
        return tagOpen + msg + tagClose + '<br>';
    }
    return tagOpen + msg + tagClose;
}
document.write(wrtInTag('span', getMyAge(40, ' лет мне и это хорошо!'), 1));
document.write(wrtInTag('span', getMyAge(40, ' лет мне и это хорошо!')));
// --------------------------------------------------------------------------
class Printer {
    constructor(targetElement, typeOfTag, myText) {
        this.tag = document.createElement(typeOfTag);
        this.tag.innerText = myText;
        targetElement.appendChild(this.tag);
    }
}
export function writeIt(user) {
    const myTargetElem = document.getElementById('targetHtml');
    let result = '';
    for (let i = 0; i < user.getJobs().length; i++) {
        const printer = new Printer(myTargetElem, 'h1', user.getJobs()[i]);
    }
}
let user = {
    name: 'Vinty',
    jobs: ['a', 'b', 'c'],
    age: 40,
    getJobs() {
        return this.jobs;
    }
};
let user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2', '555', '777'],
    getJobs() {
        return this.jobs;
    }
};
writeIt(user);
writeIt(user2);
// const el2: HTMLElement = document.getElementById("htmlEnterPoint");
// const tag: string = "h2";
// const myText: string = "РАБОТА ПРИНТЕРА...";
//
// const printer = new Printer(el2, tag, myText);
// let numArray: number[] = [1, 3, 7];
// let numArray2: Array<number> = [1, 3, 7];
//
// let strArray: string[] = ['1', '55'];
// let strArray2: Array<string> = ['1', '55'];
//
// let boolArray: boolean[] = [true, false];
// let boolArray2: Array<boolean> = [true, false];
//
// let array: [number, number, number, string] = [1, 3, 77, '99'];
//# sourceMappingURL=main.js.map