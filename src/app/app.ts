import { Component } from '@angular/core';

@Component({
    // decorators
    selector: 'app-root',
    template: `<p>Hello World</p>`,
    standalone: true, // that we are noy using moduels
})
export class App {}
