import { Component, input, output, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    imports: [],
    templateUrl: './post.html',
    styleUrl: './post.css',
})
export class Post implements OnInit {
    postImage = input.required<string>(); // input property decorator
    imageSelected = output<string>(); // output property decorator

    constructor() {
        console.log('constructor()');
    }

    ngOnInit() {
        console.log('ngonInit() called');
    }
}
