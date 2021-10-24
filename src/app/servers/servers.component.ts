import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  server1ID: string = "191.025.333"
  server2ID: string = "191.025.555"
  isButtonEnable: boolean = true
  hasCreateNewServer: string = ""
  serverName: string = ''
  personNameInput: string = ''
  displayItem: boolean = false
  logArray: string[] = []
  constructor() {
    setTimeout(() => {
      this.isButtonEnable = false
    }, 2000)
  }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return 'online'
  }

  createNewServer(): void {
    this.hasCreateNewServer = "We've created new Server :) , the name is: " + this.serverName
  }

  changeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  clearName(): void {
    this.personNameInput = ""
  }

  logAction() {
    this.logArray.push(new Date().getTime().toString())
  }

}
