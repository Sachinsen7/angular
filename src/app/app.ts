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
    imageUrl = signal(
        'https://images.unsplash.com/photo-1761165308297-6aa2e5fb8fe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=1600'
    );

    getName() {
        return this.name();
    }
}
