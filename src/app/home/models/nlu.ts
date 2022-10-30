export class Nlu {


  constructor(data: any) {
    this.keywords = data.keywords;
    this.emotion = data.emotion;
    this.sentiment = data.sentiment;
  }

  language: string;
  analyzedText: null;
  retrievedUrl: null;
  usage: Usage;
  concepts: (null)[] | null;
  entities: (null)[] | null;
  keywords: any;
  categories: null;
  emotion: any;
  metadata: null;
  relations: null;
  semanticRoles: null;
  sentiment: any;
  syntax: null;
}
export class Usage {
  features: number;
  textCharacters: number;
  textUnits: number;
}
export class KeywordsEntity {
  constructor(data: any) {
    this.count = data.count;
    this.relevance = data.relevance;
    this.text = data.text;
    this.emotion = data.emotion;
    this.sentiment = data.sentiment;
  }
  count: number;
  relevance: number;
  text: string;
  emotion: null;
  sentiment: null;
}
export class Emotion {
  document: Document;
  targets: null;
}
export class Document {
  emotion: Emotion1;
}
export class Emotion1 {
  anger: number;
  disgust: number;
  fear: number;
  joy: number;
  sadness: number;
}
export class Sentiment {
  document: Document1;
  targets: null;
}
export class Document1 {
  label: string;
  score: number;
}
