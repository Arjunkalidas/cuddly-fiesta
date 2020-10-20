import { Component, OnInit } from '@angular/core';

export class Joke {
  setup: string;
  punchline: string;
  hidden: boolean;

  constructor(setup: string, punchline: string) { 
    this.setup = setup;
    this.punchline = punchline;
    this.hidden = true;
  }

  toggle() {
    this.hidden = !this.hidden;
  }
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {


  ngOnInit(): void {
  }

}
