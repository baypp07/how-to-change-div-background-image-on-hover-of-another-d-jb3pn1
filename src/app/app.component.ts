import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  
    texts=[
    {clients:'text : custom1', color:'#AE7FFF'},
    {clients:'text : custom2',color:'#F9A796'},
    {clients:'text : custom3', color:'#FA7FF1'},
    {clients:'text : custom4', color:'#9999FF'},
    {clients:'text : custom5', color:'#F9A796'},
    {clients:'text : custom6', color:'#F999B4'},
  ]

  groups = [{ "id": 1, "name": "pencils", "items": "red pencil", "Status": [{ "id": 1, "name": "green" }, { "id": 2, "name": "red" }, { "id": 3, "name": "yellow" }], "loc": [{ "id": 1, "name": "loc 1" }, { "id": 2, "name": "loc 2" }, { "id": 3, "name": "loc 3" }] }, { "id": 2, "name": "rubbers", "items": "big rubber", "Status": [{ "name": "green" }, { "name": "red" }], "loc": [{ "name": "loc 2" }, { "name": "loc 3" }] }, { "id": 3, "name": "rubbers1", "items": "big rubber1", "Status": [{ "name": "green" }, { "name": "red" }], "loc": [{ "name": "loc 2" }, { "name": "loc 3" }] }];

  
}




/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/