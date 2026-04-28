import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
  constructor(private configService: ConfigService) {
    // offline tells Google to issue a refresh token
    super({
      accessType: 'offline',
    });
  }
}
