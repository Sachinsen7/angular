import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-post',
    imports: [],
    templateUrl: './post.html',
    styleUrl: './post.css',
})
export class Post {
    postImage = input.required<string>(); // input property decorator
    imageSelected = output<string>(); // output property decorator
}
