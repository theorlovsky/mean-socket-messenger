import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ChatService } from './chat/chat.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RegexService } from './regex/regex.service';
import { FormValidationService } from './form-validation/form-validation.service';
import { UserService } from './user/user.service';
import { TranslateModule } from '@ngx-translate/core';
import { GuestGuard } from './auth/guest.guard';
import { SocketService } from './socket/socket.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        ChatService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        FormValidationService,
        RegexService,
        UserService,
        GuestGuard,
        SocketService,
      ],
    };
  }

}
