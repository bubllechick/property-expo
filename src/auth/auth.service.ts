import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtservice: JwtService
    ) { }
    async cekUser(no, password) {
        let login  = await this.userService.findNoHp(no);
        console.log(login)
        if(login) {
            const valid = this.userService.compare(password, login.password)
            if(valid) {
                return login
            } else throw new BadRequestException({message:' password salah'});
        }
        else {
            throw new BadRequestException({message:'email salah'});
        }
        console.log(login);
        return login;
    }
    generateToken(no: any) {
        let dataToken = { id: no.id }
        let token = this.jwtservice.sign(dataToken)
        return { token: token }
    }
}
