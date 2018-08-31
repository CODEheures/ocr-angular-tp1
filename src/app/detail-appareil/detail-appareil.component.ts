import { Component, OnInit } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-appareil',
  templateUrl: './detail-appareil.component.html',
  styleUrls: ['./detail-appareil.component.scss']
})
export class DetailAppareilComponent implements OnInit {

  public appareil: Appareil

  constructor(private appareilsService: AppareilService, private route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id')
    this.appareil = this.appareilsService.getById(+id)
   }

  ngOnInit() {
  }

}
