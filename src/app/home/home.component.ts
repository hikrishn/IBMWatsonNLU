import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable, of } from 'rxjs';
import {
  homeService
} from './services/home.service';
@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title,
    homeService
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */

  data: CloudData[] = [
    {text: 'resolution plan', weight: 0.86,  color: 'lightpink',tooltip: 'default'},
    {text: 'site presence', weight:  0.59,  color: 'lightpink', tooltip: 'default'},
    {text: 'anger', weight: 0.122331,  color: '#33FF66', tooltip: 'default'},
    {text: 'disgust', weight:  0.024293,  color: '#33FF66', tooltip: 'default'}
  ];
  options: CloudOptions = {
    width: 800,
    height: 800,
    overflow: false,
  };
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */

  textValue = 'We need a resolution plan, we need an on-site presence to determine all needed configurations are in place,  we need a modernization of the  app, we need to know we can trust our phone system.';
  NLUvalue = {};
  keywords = [];
  constructor(
    public appState: AppState,
    public title: Title,
    public _homeService: homeService
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  submitText(value: string): void {
alert("hi" + value);
    //this.log += `Text changed to '${value}'\n`;
    this.NLUvalue = '';
    this.keywords;
    this._homeService.getNLUText(value)
      .subscribe(
        nluItems => {
          this.NLUvalue = nluItems;
          console.log(nluItems);
        }
      )

      console.log('NLUvalue - in controller', this.NLUvalue);
    //console.log('NLUvalue - in controller', this.NLUvalue.keywords);
    /*this.keywords = this.NLUvalue.keywords;


    this.keywords.forEach(u => {
      console.log(u);
    });*/
    const changedData$: Observable<CloudData[]> = of([
      {text: 'anger', weight: 0.122331,  color: '#33FF66', rotate: 0},
      {text: 'disgust', weight:  0.024293,  color: '#33FF66', rotate: 0},
       {text: 'fear', weight: 0.04, color: '#33FF66' , rotate: 0 },
      {text: 'joy', weight: 0.40, color: '#33FF66', rotate: 0},
      {text: 'sadness', weight: 0.14, color: '#33FF66', rotate: 0},

     {text: 'resolution plan', weight: 0.869138,  color: 'lightpink', rotate: -10 },
      {text: 'site presence', weight:  0.805303,  color: 'lightpink', rotate: -10 },
      {text: 'place', weight:  0.591486,  color: 'lightpink', rotate: -10 },
      {text: 'configurations', weight:  0.585107,  color: 'lightpink', rotate: -10 },
      {text: 'modernization of the app', weight:  0.550372,  color: 'lightpink', rotate: -10 },
      {text: 'Screen reader support', weight:  0.433042,  color: 'lightpink', rotate: -10  },
      {text: 'phone system', weight:  0.267341,  color: 'lightpink', rotate: -10  },


      {text: 'positive', weight:  0.574951,  color: '#BAC8FF', rotate: 100 }

    ]);
    changedData$.subscribe(res => this.data = res);

  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
