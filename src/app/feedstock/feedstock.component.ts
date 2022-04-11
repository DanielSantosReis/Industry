import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedstock } from '../model/feedstock';
import { FeedstockService } from '../service/feedstock.service';

@Component({
  selector: 'app-feedstock',
  templateUrl: './feedstock.component.html',
  styleUrls: ['./feedstock.component.css']
})
export class FeedstockComponent implements OnInit {

  feedstock: Feedstock = new Feedstock()
  listFeedstock: Feedstock[]


  constructor(
    private router: Router,
    private feedstockService: FeedstockService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.feedstockService.refreshToken()
    this.findAllFeedstock()
  }

  findAllFeedstock(){
    this.feedstockService.getAllFeedstock().subscribe((resp: Feedstock[]) => {
      this.listFeedstock = resp
    })
  }

  register() {
    this.feedstockService.postFeedstock(this.feedstock).subscribe((resp: Feedstock) => {this.feedstock = resp
      alert('Category registered successfully')
    this.findAllFeedstock()
    this.feedstock = new Feedstock()
    })
  }

  

}
