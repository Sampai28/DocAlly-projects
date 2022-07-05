// console.log("Hello World!");
// @ts-ignore
import aposToLexForm from "apos-to-lex-form";
import {PorterStemmer, SentimentAnalyzer, WordTokenizer} from 'natural';
// @ts-ignore
import SpellCorrector from "spelling-corrector";
import * as stopword from "stopword";

const tokenizer = new WordTokenizer();
const spellCorrect = new SpellCorrector();
spellCorrect.loadDictionary();

const analyzer = new SentimentAnalyzer('English', PorterStemmer, "afinn");

export function getSentiment(str: string): -1 | 0 | 1{
    if(!str.trim()){
        return 0;
    }
    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");
    const tokenized = tokenizer.tokenize(lexed);
    const fixedSpelling = tokenized.map((word) => spellCorrect.correct(word));
    const stopWordsRemoved = stopword.removeStopwords(fixedSpelling);

    const analyzed = analyzer.getSentiment(stopWordsRemoved);
    if(analyzed>=1)return 1;
    if(analyzed===0)return 0;
    return -1;
} 