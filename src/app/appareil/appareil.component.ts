import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareils

  public red = 'rgb(202, 69, 69)'
  public green = 'rgb(89, 202, 69)'

  constructor() { }

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
}
