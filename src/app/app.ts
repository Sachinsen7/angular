import { Component, signal } from '@angular/core';
import { Post } from './post/post';
// import {
//     TitleCasePipe,
//     DatePipe,
//     CurrencyPipe,
//     DecimalPipe,
//     JsonPipe,
//     NgClass,
// } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
    // decorators
    selector: 'app-root',
    // template: `<p>Hello World</p>`,  // add only one template
    standalone: true, // that we are not using moduels
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [Post, CommonModule],
    // styles: [''], // inline css
})
export class App {
    name = signal('Sachin');
    imageUrl = signal('https://picsum.photos/id/237/200/300');
    images = signal([
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
    ]);
    currentDate = signal(new Date());
    cost = signal(2000);
    temparature = signal(25.3);
    pizza = signal({
        toppings: ['pepperoni', 'mushrooms', 'olives'],
        size: 'large',
    });
    blueClass = signal(false);
    fontSize = signal(16);

    getName() {
        return this.name();
    }

    changeImage(event: KeyboardEvent) {
        this.imageUrl.set((event.target as HTMLInputElement).value); // type assertions
    }

    logImage(event: string) {
        console.log(event);
    }
}
