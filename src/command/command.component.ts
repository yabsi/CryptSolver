import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'command-component',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})

export class CommandComponent {

  @ViewChild('command') commandElement;

  handleKeypress (event: any) {
    let command = this.commandElement.nativeElement.value;
    if(event.keyCode == 13){
      alert(command);
    }
  }

}
