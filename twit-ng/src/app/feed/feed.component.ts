import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets=[
    {text:'hehe donal trump shit man',author:'Subodh',avatars:'D:/ANGULARJS2/twit-ng/randp/avatar/128.jpg'},
    {text:'money money money',author:'Gaurav',avatars:'128(1).jpg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
