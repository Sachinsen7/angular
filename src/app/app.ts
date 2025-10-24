import { Component, signal } from '@angular/core';

@Component({
    // decorators
    selector: 'app-root',
    // template: `<p>Hello World</p>`,  // add only one template
    standalone: true, // that we are not using moduels
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    // styles: [''], // inline css
})
export class App {
    name = signal('Sachin');
    imageUrl = signal('https://picsum.photos/200/300');

    getName() {
        return this.name();
    }

    changeImage(event: KeyboardEvent) {
        this.imageUrl.set((event.target as HTMLInputElement).value); // type assertions
    }
}
