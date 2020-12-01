import { Injectable, UnauthorizedException, ExecutionContext, CanActivate } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../../common/jwt.constants';
import { UserService } from '../../users/user.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req;
    }
  }

    // async validate(payload: any){
    //     const isValidate = await this._userservice.validateUserById(payload.id);
    //     if(isValidate){
    //         return {userId: payload.id, email: payload.email};
    //     }else{
    //         throw new UnauthorizedException("invalid user");
    //     }
    // }

    
// }