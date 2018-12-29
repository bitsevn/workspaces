import { Component, OnInit, Input } from '@angular/core';
import { IClient } from 'src/app/shared/states/clients/clients.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() clients: IClient[];

  constructor() {}

  ngOnInit() {}
}
