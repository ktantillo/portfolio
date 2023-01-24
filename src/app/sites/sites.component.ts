import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  name: string = 'Bad Bank';
  url: string  = 'the url';
  description: string = 'A faux banking site. Built in Next.js and using react hooks, also connecting to MongoBD database and utilzing firebase log in security and google intergration' ;
  github: string = 'github repository link';

  name2: string = 'Peaceful Fields';
  url2: string = 'the url';
  description2: string = 'A mock site for a non-profit farm sacutalty, utilizes angular and bootstrap elements'
  github2: string = 'github repository link';

  name3: string = 'Katie Tantillo Portfolio site'
  url3: string = 'the url';
  description3: string = 'The Portfolio site showcasing the work  of Full Stack developer Katie Tantillo. Built in Angular.'
  github3: string = 'github repository link'

  name4: string = 'Normal Games for Normal people';
  url4: string = 'the url';
  description4: string = 'A collection of browser games and quizzes. Created in React and utizing bootstrap assets.';
  github4: string = 'the github repository link'

  name5: string = 'Brain Battle';
  url5: string = 'the url';
  description5: string = 'Fan site for the podcast Knowledge Fight. Features several browser games created in React.'
  github5: string = 'the github repository link';

  name6: string = 'Daily Reflection Journal';
  url6: string = 'the url'
  description6: string = 'A CRUD website made to journal daily mood and goals. Built in Angular.'
  github6: string = 'the github repository link';

  constructor() {}

  ngOnInit(): void {
    
  }
}
