import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

import * as chartjs from 'chart.js'

@Component({
  selector: 'app-bp-details',
  templateUrl: './bp-details.page.html',
  styleUrls: ['./bp-details.page.scss'],
})
export class BpDetailsPage implements OnInit {

    

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.createLineChart();
    this.createPieChart();
  }

  createLineChart(){
    var Chart = chartjs;
    var ctx = 'linechart';
    var linechart  = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['#00ff00'],
              borderColor: [],
              borderWidth: 1,
          }]
      },
      options: {
      }
  });
  }

  createPieChart(){
    var Chart = chartjs;
    var ctx = 'piechart';
    var piechart  = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue'],
          datasets: [{
              label: '# of Votes',
              data: [50,50],
              backgroundColor: ['#ff00ff', '#8f34ff'],
              borderColor: [],
              borderWidth: 1,
          }]
      },
      options: {
      }
  });
  }

  getLineChartData(){

  }

  getPieChartData(){

  }

}
