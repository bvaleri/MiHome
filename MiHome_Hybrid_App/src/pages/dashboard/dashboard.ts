import { Component ,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Chart } from 'chart.js';
import { DatePicker } from 'ionic2-date-picker';
//declare var Chart: any;

//@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers:[ DatePicker ]
})
export class DashboardPage {

  @ViewChild('temphun') temphunCanvas;
  temphun: any;

  @ViewChild('co2voc') co2vocCanvas;
  co2voc: any;

  @ViewChild('pressureUV') pressureUVCanvas;
  pressureUV: any;

  @ViewChild('IRlight') IRlightCanvas;
  IRlight: any;

  constructor(public viewController:ViewController,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public userServiceProvider:UserServiceProvider,public datePicker: DatePicker) {

    this.datePicker = new DatePicker(<any>this.modalCtrl, <any>this.viewController);
    this.datePicker.onDateSelected.subscribe((date) => { console.log(date); });

  }

  showCalendar() {
    this.datePicker.showCalendar();
  }

  ionViewDidLoad() {

    this.temphun = new Chart(this.temphunCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Temperature",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "#6977c6",
                        borderColor: "#6977c6",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#6977c6",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    },
                    {
                        label: "Humidity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,1)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [25, 19, 50, 31, 16, 25, 30],
                        spanGaps: false,
                    }
                ]
            }

        });



        this.co2voc = new Chart(this.co2vocCanvas.nativeElement, {

                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "CO2",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "#6977c6",
                            borderColor: "#6977c6",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "#6977c6",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                            spanGaps: false,
                        },
                        {
                            label: "VOC",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,1)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [25, 19, 50, 31, 16, 25, 30],
                            spanGaps: false,
                        }
                    ]
                }

            });



            this.pressureUV = new Chart(this.pressureUVCanvas.nativeElement, {

                    type: 'line',
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "Pressure",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "#6977c6",
                                borderColor: "#6977c6",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "#6977c6",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [65, 59, 80, 81, 56, 55, 40],
                                spanGaps: false,
                            },
                            {
                                label: "UV",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,1)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [25, 19, 50, 31, 16, 25, 30],
                                spanGaps: false,
                            }
                        ]
                    }

                });




                this.IRlight = new Chart(this.IRlightCanvas.nativeElement, {

                        type: 'line',
                        data: {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [
                                {
                                    label: "Light",
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: "#6977c6",
                                    borderColor: "#6977c6",
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "#6977c6",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                    pointHoverBorderColor: "rgba(220,220,220,1)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: [65, 59, 80, 81, 56, 55, 40],
                                    spanGaps: false,
                                },
                                {
                                    label: "IR",
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: "rgba(75,192,192,1)",
                                    borderColor: "rgba(75,192,192,1)",
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "rgba(75,192,192,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                    pointHoverBorderColor: "rgba(220,220,220,1)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: [25, 19, 50, 31, 16, 25, 30],
                                    spanGaps: false,
                                }
                            ]
                        }

                    });

  }

  test() {
    var token = this.userServiceProvider.getToken().then((token) => {
      console.log(token);
    });
  }

}