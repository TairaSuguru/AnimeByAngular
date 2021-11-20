import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anime-head',
  templateUrl: './anime-head.component.html',
  styleUrls: ['./anime-head.component.less']
})
export class AnimeHeadComponent implements OnInit {
  public text:any = "Hi baby"
  public suc:string = "OK"
  public userlist = [
    {id: 1,name: 'Mary',age: 16},
    {id: 2,name: 'Tommy',age: 18},
    {id: 3,name: 'Sam',age: 21}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
