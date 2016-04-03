import 'babel-es6-polyfill/polyfill';

export default class Hello {
    constructor(message = '') {
        this.message = message
    }

    say() {
        console.log(this.message)
    }

    later() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000)
        })
    }
}

var hello = new Hello('Hello');
hello.say();
hello.later().then(() => hello.say());
