import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../messaging/message.service';

@Component({
    selector: 'app-first-component',
    templateUrl: './first-component.component.html',
    styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

    constructor(
        private messageService: MessageService
    ) { }

    inputValue: string = '';
    message: string = '';

    @Input() numberFromParent: number = 0;
    @Output() resultToParent = new EventEmitter<string>();

    doSomething() {
        this.resultToParent.emit(this.inputValue);
    }

    sendMessage() {
        this.messageService.newMessage(this.message);
        console.log(this.message);
    }
}
