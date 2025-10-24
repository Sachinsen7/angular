import { Component, signal } from '@angular/core';
import { Post } from './post/post';

@Component({
    // decorators
    selector: 'app-root',
    // template: `<p>Hello World</p>`,  // add only one template
    standalone: true, // that we are not using moduels
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [Post],
    // styles: [''], // inline css
})
export class App {
    name = signal('Sachin');
    imageUrl = signal('https://picsum.photos/id/237/200/300');

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
