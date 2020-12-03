import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
@Injectable()
export class AppService {
    
    async getViewName():Promise<string>{
        return "index";
    }


    async GetMessage():Promise<string>{
        return (Math.random()*100000000).toString();
    }

    async GetTotal(items):Promise<number>{
        let total=0;
        for(const item of items){
            total+=item.cost;
        }
        return total;
    }

    async GetItemList():Promise<any>{
        const items=[];
        const no_of_items=Math.ceil(Math.random()*20);
        for(let i=0;i<no_of_items;i++){
            items.push({id:i+1,date:new Date(),name:crypto.randomBytes(5).toString('hex'),cost:Math.ceil(Math.random()*100)});
        }
        const total=await this.GetTotal(items);
        return {total:total,items:items};

    }
}
