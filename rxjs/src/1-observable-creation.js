import { Observable } from "rxjs";

export class ExampleCreate {
    static createObservableWithNumbers() {
        const observable$ = Observable.create(function subscribe(observer){
                // observer.next(1);
                // observer.next(2);
                // observer.next(3);
                // observer.next(4);
                // observer.complete();
                let number = 1;
                setInterval(() => {
                    try {
                        observer.next(number);
                        number++;
                        if (number > 5) throw new Error()
                    } catch (error) {
                        observer.complete();
                        // observer.error('Error!!!');
                    }
                }, 1000);
            
        });
        return observable$;
    }

    static createObservableWithNumbersToUnsuscribe() {
        const observable$ = Observable.create(function subscribe(observer){
                let number = 1;
                setInterval(() => {
                    observer.next(number);
                    number++;
                }, 1000);
            
        });
        return observable$;
    }
}