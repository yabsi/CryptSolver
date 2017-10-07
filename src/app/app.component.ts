import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('command') commandElement;

  handleKeypress (event: any) {
    let command = this.commandElement.nativeElement.value;
    if(event.keyCode == 13){
      alert(command);
    }
  }

}
