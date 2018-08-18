import {Injectable} from '@angular/core';

@Injectable()
export class HandleErrorService{

    handleError(error: any): Promise<any> {
        console.log('An error occured' + error);
        return Promise.reject(error.message || error);
    }

}