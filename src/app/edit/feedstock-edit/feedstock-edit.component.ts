import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedstock } from 'src/app/model/feedstock';
import { FeedstockService } from 'src/app/service/feedstock.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feedstock-edit',
  templateUrl: './feedstock-edit.component.html',
  styleUrls: ['./feedstock-edit.component.css']
})
export class FeedstockEditComponent implements OnInit {
  
  feedstock: Feedstock = new Feedstock();

  constructor(
    private feedstockService: FeedstockService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/feedstock']);
    }
    let id = this.route.snapshot.params['id'];
    this.findByIdFeedstock(id);
  }
  findByIdFeedstock(id: number) {
    this.feedstockService.getByIdFeedstock(id).subscribe((resp: Feedstock) => {
      this.feedstock = resp;
    });
  }
  update(){
    this.feedstockService.putFeedstock(this.feedstock).subscribe((resp: Feedstock)=>{
      this.feedstock = resp
      alert('Raw material successfully updated')
      this.router.navigate(['/feedstock'])
    })
  }

}

