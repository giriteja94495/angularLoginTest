import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  people!: any[];

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/data').subscribe((res: any)=>{
      this.people = res.people;
    }
    )
  }

}
