import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../api.service';
import { apiGraphDetails, apiUrl } from '../common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-graph',
  templateUrl: './manage-graph.component.html',
  styleUrls: ['./manage-graph.component.css']
})
export class ManageGraphComponent implements OnInit {

  chart: Chart;
  chartTypes: any = [{ name: "Expence ratio in Bar", value: "bar" }, { name: "Expence ration in Line", value: "line" }]
  reportTypes: any = [{ name: "Month", value: "MONTH" }, { name: "Year", value: "YEAR" }]
  selectedChartType: any = this.chartTypes[0].value;
  selectedReportType: any = this.reportTypes[0].value;
  lables: any = []
  points: any = []
  selectedMonth: any=new Date().getMonth()+1;
  selectedYear: any= new Date().getFullYear();

  constructor(private apiService: ApiService,public userService:UserService,public router:Router) {

  }

  ngOnInit(): void {
    if (!this.userService.isLogInUser) {
      this.router.navigateByUrl("/login");
    }
  }

  destroyChartData() {
    try {
      if (this.chart) {
        this.chart.destroy();
      }
    } catch (error) {
      console.log(error);
    }
  }
  createChart() {
    this.destroyChartData();
    const canvas: any = document.getElementById("barChart");
    const ctx = canvas.getContext('2d');
    const data = {
      labels: this.lables,
      datasets: [{
        label: `my ${this.selectedReportType} expense ratio`.toUpperCase(),
        data: this.points,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }]
    };
    Chart.register(...registerables);
    this.chart = new Chart(ctx, {
      type: this.selectedChartType,
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    })
  }


  loadGraphTypeWise() {
    this.loadExpenseGraphInfo();
    this.createChart();
  }


  loadExpenseGraphInfo() {
    try {
      let url = apiUrl + apiGraphDetails;
      let body = {
        'month': this.selectedMonth,
        'year':this.selectedYear
      }
      this.apiService.doPostCall(url, body).subscribe((response) => {
        let status = response['status'];
        if (status != undefined && status['error-code'] == "000") {
          response['graph-details'].map((e) => {
            this.lables.push(e.label);
            this.points.push(e.value);
          })
        } else {

        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
