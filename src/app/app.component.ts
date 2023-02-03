import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'divColor';

  color = 'black';

  colors = ['black', 'red', 'blue', 'green', 'yellow']

  colorFunc(clr:string) {
    this.color = clr;
  }

}
