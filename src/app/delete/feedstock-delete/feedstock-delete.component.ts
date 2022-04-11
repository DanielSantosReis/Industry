import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedstock } from 'src/app/model/feedstock';
import { FeedstockService } from 'src/app/service/feedstock.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feedstock-delete',
  templateUrl: './feedstock-delete.component.html',
  styleUrls: ['./feedstock-delete.component.css']
})
export class FeedstockDeleteComponent implements OnInit {

  feedstock: Feedstock = new Feedstock()
  idFeedstock: number

  constructor(
    private feedstockService: FeedstockService,
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    this.idFeedstock = this.rout.snapshot.params['id']
    this.findByIdFeedstock(this.idFeedstock)
  }

  findByIdFeedstock(id: number){
    this.feedstockService.getByIdFeedstock(id).subscribe((resp: Feedstock)=>{
    this.feedstock = resp
    })
  }
  delete(){
    this.feedstockService.deleteFeedstock(this.idFeedstock).subscribe(()=>{
    alert('Raw material successfully deleted')
    this.router.navigate(['/feedstock'])
    })
  }
}

