import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-videolist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public name: string = '';
  public names: Array<string> = ['Sakura','Midoriya','Yamamoto','Togahikomi','Lisa']
  public videoList: any[] = [
    {
      id: 1,
      name: 'Jame'
    },
    {
      id: 2,
      name: 'Sam'
    },
    {
      id: 3,
      name: 'Marry'
    }
  ]
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(res => {
      if(res.hasOwnProperty('id')) this.name = this.videoList.find(v => v.id == res['id']).name
    })
    
  }

  addItems() {
    this.videoList.push({id: this.videoList.length + 1, name: this.names[parseInt((Math.random() * 4).toString())]})
  }

  ngOnInit(): void {

  }

}
