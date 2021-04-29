import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/state/counter.reducer";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./shared/header/header.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { PostReducer } from "./posts/state/post.reducer";
import { appReducer } from "./store/app.state";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from './posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer), //appReducer is main state contain all sub state
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
