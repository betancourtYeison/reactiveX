import { from } from "rxjs";
import { filter, map, pluck } from "rxjs/operators";

export class ExampleOperators {
    static testFilterOperator() {
        const observable1$ = from([1,3,-14,4,6,89])
        observable1$
            .pipe(
                filter(number => number % 2 === 0),
                map(number => number ** 2)
            )
            .subscribe(
                number => console.log(number)
            );

        const observable2$ = from(['Yeison', 'Alejandra'])
        observable2$
            .pipe(
                map(name => name.toUpperCase())
            )
            .subscribe(
                name => console.log(name)
            );

        const observable3$ = from([
            {
                id: 1,
                email: 'yeisonbe10@hotmail.com', 
                name: 'Yeison',
            },
            {
                id: 2,
                email: 'alejandra931228@hotmail.com', 
                name: 'Alejandra',
            },
        ])
        observable3$
            .pipe(
                pluck('email'),
                map(email => email.toUpperCase())
            )
            .subscribe(
                email => console.log(email)
            );
    }
}