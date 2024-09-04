import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../messaging/message.service';

@Component({
    selector: 'app-second-component',
    templateUrl: './second-component.component.html',
    styleUrl: './second-component.component.css'
})
export class SecondComponentComponent implements OnInit {

    constructor(
        private messageService: MessageService
    ) { }

    @Input() valueFromParent: string = '';
    message: string = '';

    ngOnInit(): void {
        this.messageService.currentMessage.subscribe(message => this.message = message);
    }
}
