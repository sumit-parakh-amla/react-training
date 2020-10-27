import { Add, Subtract } from './calc';

export const sayHello = () =>  {
    document.body.append("Hello World");
    document.body.append('Sum = ' + Add(1,2));
    document.body.append('Subtraction = ' +Subtract(1,2));

    const obj = {a: 1};
    console.log('Hi!', {...obj});
}

sayHello();