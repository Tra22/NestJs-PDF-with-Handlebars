import { Controller, Get,Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index')
    async getHello(@Res() res: Response):Promise<any> {
        return res.render(
            await this.appService.getViewName(),
            { message: await this.appService.GetMessage() },
        );
    }

    @Get('data')
    async GetData(@Res() res:Response):Promise<any>{
        const data=await this.appService.GetItemList();
        return res.render(
            'pdf',
            {total:data.total,items:data.items}
        )
    }
}
