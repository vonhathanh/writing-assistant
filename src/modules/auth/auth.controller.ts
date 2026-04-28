import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './google-oauth.guard';
import { Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {
    // GoogleOAuthGuard intercepts the request and trigger Passport's 'google' strategy
    // then redirects user to Google's OAuth consent screen.
  }

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    // after user consent, Google redirects back to this route with the user information in the request object
    return this.authService.googleLogin(req);
  }
}
