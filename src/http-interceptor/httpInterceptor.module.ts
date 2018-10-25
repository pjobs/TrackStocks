import { NgModule, ModuleWithProviders } from "@angular/core";
import { UrlInterceptor } from "./urlInterceptor";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule]})
export class HttpInterceptorsModule { static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpInterceptorsModule,
      providers: [UrlInterceptor]
    };
  }
}
