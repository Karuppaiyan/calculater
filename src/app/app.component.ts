import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  const value = "";	
		addValues(){				
			this.result1 = parseFloat(this.value * 0.90 / 100).toFixed(2);
			this.result2 = parseFloat(this.value * 1.00 / 100).toFixed(2);
			this.result3 = parseFloat(this.value * 1.20 / 100).toFixed(2);
		  }
		
  ngOnInit(){}
 
}
