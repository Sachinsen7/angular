import {
    Component,
    input,
    output,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'app-post',
    imports: [],
    templateUrl: './post.html',
    styleUrl: './post.css',
})
export class Post
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit,
        OnDestroy
{
    postImage = input.required<string>(); // input property decorator
    imageSelected = output<string>(); // output property decorator

    constructor() {
        console.log('constructor()');
    }

    ngOnInit() {
        console.log('ngonInit() called');
    }

    ngOnChanges() {
        console.log('ngOnChanges() called');
        // runs first
    }

    ngDoCheck() {
        console.log('ngDoCheck() called');
        // runs twice
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked()called');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit()called');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked()called');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit()called');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy() called');
    }
}
