import { Term, Phrase, PenPhrase } from './remind'

declare const global: {
  [x: string]: unknown
}

global.Term = Term
global.Phrase = Phrase
global.PenPhrase = PenPhrase
