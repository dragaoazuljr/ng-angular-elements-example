import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'child';
  obj = {name: this.title};
  show = false;

  toggleChild() {
    this.show = !this.show;
  }  

  onChange(e: any) {
    this.title = e?.target?.value;
    this.obj = {name: this.title};
  }
}
