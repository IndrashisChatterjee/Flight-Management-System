import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights:Observable<Flight[]>;
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.viewAllFlight();
  }
  removeFlight(flightNo: number)
  {
    this.flightService.removeFlight(flightNo)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
  }
  flightDetails(flightNo:number)
  {
    this.router.navigate(['details',flightNo]);
  }
  modifyFlight(flightNo: number)
  {
    this.router.navigate(['update',flightNo]);
  }
}
