import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    selectedNumber: number = 0;
    finalNumber: number = 0;
    result: string = '';

    stringArray = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9", "string10"];

    submit() {
        this.finalNumber = this.selectedNumber;
    }

    storeResults(event: string) {
        this.result = event;
    }
}
