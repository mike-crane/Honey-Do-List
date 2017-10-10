import { Component, OnInit } from '@angular/core';

import { Request } from '../request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Request[] = [
    new Request('Leaky Faucet', 'The faucet in the guest bathroom is dripping', 'https://c1.staticflickr.com/3/2713/4362261135_a199724297.jpg'), 
    new Request('Leaky Faucet', 'The faucet in the guest bathroom is dripping', 'https://c1.staticflickr.com/3/2713/4362261135_a199724297.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
