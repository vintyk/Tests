///<reference path="Printer.ts"/>
import {Printer} from "./Printer";
import {writeArray, User} from "./WriteArray";

const el = document.getElementById('targetHtml');
const printer = new Printer(el, 'p', 'Привет!!!');


function getMyName(myName: string): string {
    return myName;
}

function getMyAge(myAge: number, prefix: string = ' годиков'): string {
    return myAge + prefix;
}

function wrtInTag(tag: string, msg: string, newLine?: any): string {
    let tagOpen: string = '<' + tag + '>';
    let tagClose: string = '</' + tag + '>';
    if (newLine != undefined) {
        return tagOpen + msg + tagClose + '<br>';
    }
    return tagOpen + msg + tagClose;
}

document.write(wrtInTag('span', getMyAge(40, ' лет мне и это хорошо!'), 1));
document.write(wrtInTag('span', getMyAge(40, ' лет мне и это хорошо!')));
// --------------------------------------------------------------------------

// function writeIt(user: User) {
//     const myTargetElem: HTMLElement = document.getElementById('targetHtml');
//     let result: string = '';
//     for (let i = 0; i < user.getJobs().length; i++) {
//         const printer = new Printer(myTargetElem, 'h1', user.getJobs()[i]);
//     }
// }

// type User = {name: string, age: number, jobs: string[], getJobs: () => string[]};
let user: User = {
    name: 'Vinty',
    jobs: ['a', 'b', 'c'],
    age: 40,
    getJobs(): string[] {
        return this.jobs;
    }
};
let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2', '555', '777'],
    getJobs(): string[] {
        return this.jobs;
    }
};
writeArray(user);
writeArray(user2);


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
