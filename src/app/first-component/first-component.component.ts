import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

    inputValue: string = '';
    @Input() numberFromParent: number = 0;
    @Output() resultToParent = new EventEmitter<string>();

    doSomething() {
        this.resultToParent.emit(this.inputValue);
    }
}
