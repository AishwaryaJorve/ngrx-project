import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { decrement, increment, reset } from "../state/counter.action";
import { CounterState } from "../state/counter.state";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.css"],
})
export class CounterButtonsComponent implements OnInit {
  /**
   * AppState contain substates
   * @param store
   */
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onIncrement() {
    // this.increment.emit();

    //calling action
    this.store.dispatch(increment());
  }

  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
