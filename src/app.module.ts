import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PDFModule, PDFModuleOptions } from '@t00nday/nestjs-pdf';
@Module({
  imports: [
    PDFModule.registerAsync({
        useFactory: (): PDFModuleOptions => ({
            view: {
                root: '../views/pdf',
                engine: 'handlebars',
                extension:'hbs'
            },
        }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
