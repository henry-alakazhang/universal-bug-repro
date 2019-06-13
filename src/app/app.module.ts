import { isPlatformBrowser } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { APP_ID, Inject, NgModule, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { LinkComponent } from "./link/link.component";
import { TextComponent } from "./text/text.component";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "tour-of-heroes" }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LinkComponent,
    TextComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
