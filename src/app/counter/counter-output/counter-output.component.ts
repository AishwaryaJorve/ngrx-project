import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { getCounter } from "../state/counter.selectors";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-counter-output",
  templateUrl: "./counter-output.component.html",
  styleUrls: ["./counter-output.component.css"],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number>;

  // here CounterState is interface
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    /**
     * retreiving state data
     * Have to show counter's current value in html so fetch data from
     * store
     */
    this.counter$ = this.store.select(getCounter);
  }
}
