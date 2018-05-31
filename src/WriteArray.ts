import {Printer} from "./Printer";

export type User = {name: string, age: number, jobs: string[], getJobs: () => string[]};

export function writeArray(user: User) {
    const myTargetElem: HTMLElement = document.getElementById('targetHtml');
    let result: string = '';
    for (let i = 0; i < user.getJobs().length; i++) {
        const printer = new Printer(myTargetElem, 'h1', user.getJobs()[i]);
    }
}