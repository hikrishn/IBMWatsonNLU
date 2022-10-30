import {
  Injectable
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, of, throwError as _throw } from 'rxjs';
import { Nlu } from '../models/nlu';
@Injectable()
export class homeService {
  nluItems: any;
  getNLU(value: string): string {
    return "Hello world";
  }


  protected urlNLU : string = 'https://gateway.watsonplatform.net/natural-language-classifier/api/v1/classifiers/7736f6x564-nlc-469';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

// Read all REST Items
  getNluItems(inputText): void {
    this.getNLUText(inputText)
      .subscribe(
        nluItems => {
          this.nluItems = nluItems;
          console.log(this.nluItems);
        }
      )
  }


  // Rest Items Service: Read all REST Items
  getNLUText(inputText){
    alert("hii" + this.urlNLU);
    return this.http
      .get<any>(this.urlNLU + 'text=' + inputText,
        { headers: new HttpHeaders({'Authorization': 'Bearer ' + 'aa2cef99-5125-3dba-8e22-8386edc31574'})})
      .pipe(map(data => data));
  }

  //protected urlNLU : string = 'http://127.0.0.1:8080/bws/v1/services/ibm?';

}
