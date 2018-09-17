import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
  }

}
