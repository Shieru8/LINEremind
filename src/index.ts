import remind from './remind'

declare const global: {
  [x: string]: unknown
}

global.remind = remind
