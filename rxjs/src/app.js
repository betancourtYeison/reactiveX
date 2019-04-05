import { ExampleCreate } from "./1-observable-creation";
import { ExampleHotObservable }  from "./2-from-events";
import { ExampleSubjects } from "./3-subjects";
import { ExampleOperators } from "./4-operators";

/* First example to subscribe and complete observer */
// const observable$ = ExampleCreate.createObservableWithNumbers();
// observable$.subscribe(
//     data => console.log(data),
//     error => console.error(error),
//     () => {
//         console.log('Observable sent "completed"')
//     }
// )

/* First example to subscribe and unsubscribe */
// const observableUnsuscribe$ = ExampleCreate.createObservableWithNumbersToUnsuscribe();
// observableUnsuscribe$.subscribe(
//     data => console.log(data),
//     error => console.error(error),
//     () => {
//         console.log('Observable sent "completed"')
//     }
// )

// setInterval(() => {
//     observableUnsuscribe$.unsubscribe()
// }, 2000);

/* Second example to subscribe and unsubscribe */
// const observable$ = ExampleHotObservable.testHotObservable();
// observable$.subscribe(
//     data => console.log(data),
//     error => console.error(error),
//     () => {
//         console.log('Observable sent "completed"')
//     }
// )

/* Third example to subscribe and unsubscribe */
// ExampleSubjects.testSubject();
// ExampleSubjects.testBehaviorSubject();
// ExampleSubjects.testReplaySubject();

/* Four example to subscribe and unsubscribe */
ExampleOperators.testFilterOperator();