import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async googleLogin(req) {
    if (!req.user) {
      return {
        message: 'No user from Google',
        user: null,
      };
    }
    return {
      message: 'User information from Google',
      user: req.user,
    };
  }
}
