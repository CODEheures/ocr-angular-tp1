import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareils: Appareil[]

  public red = 'rgb(202, 69, 69)'
  public green = 'rgb(89, 202, 69)'

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getColor(appareil): string {
    return appareil.state === 'allumé' ? this.green : this.red
  }

  getTextColor(appareil): string {
    return appareil.state === 'allumé' ? 'text-success' : 'text-danger'
  }

  getBgColor(appareil): string {
    return appareil.state === 'allumé' ? 'bg-success' : 'bg-danger'
  }

  onAllumer(index: number) {
    this.appareilService.switchOn(index)
  }

  onEteindre(index: number) {
    this.appareilService.switchOff(index)
  }
}
