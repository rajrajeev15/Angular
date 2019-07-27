import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingsAll demos';
  userName:any="Rajeeev";
  
 
  /**
   *
   */
  
  reset():any
  {
  
    this.userName = "";
    
  }

}
