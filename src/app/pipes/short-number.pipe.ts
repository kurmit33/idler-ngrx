import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(input: any, args?: any, args2?: any): any {
    let exp: any;
    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E', 'kk', 'kM', 'kG', 'kT', 'kP', 'kE',
      'Mk', 'MM', 'MG', 'MT', 'MP', 'ME', 'Gk', 'GM', 'GG', 'GT', 'GP', 'GE',
      'Tk', 'TM', 'TG', 'TT', 'TP', 'TE', 'Pk', 'PM', 'PG', 'PT', 'PP', 'PE',
      'Ek', 'EM', 'EG', 'ET', 'EP', 'EE', 'kkk', 'kkM', 'kkG', 'kkT', 'kkP', 'kkE',
      'kMk', 'kMM', 'kMG', 'kMT', 'kMP', 'kME', 'kGk', 'kGM', 'kGG', 'kGT', 'kGP', 'kGE',
      'kTk', 'kTM', 'kTG', 'kTT', 'kTP', 'kTE', 'kPk', 'kPM', 'kPG', 'kPT', 'kPP', 'kPE',
      'kEk', 'kEM', 'kEG', 'kET', 'kEP', 'kEE', 'Mkk', 'MkM', 'MkG', 'MkT', 'MkP', 'MkE',
      'MMk', 'MMM', 'MMG', 'MMT', 'MMP', 'MME', 'MGk', 'MGM', 'MGG', 'MGT', 'MGP', 'MGE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE',
      'MTk', 'MTM', 'MTG', 'MTT', 'MTP', 'MTE', 'MPk', 'MPM', 'MPG', 'MPT', 'MPP', 'MPE', ];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      if (args2) {
        return input;
      } else {
        return input.toFixed(args);
      }
    }


    exp = Math.floor(Math.log(input) / Math.log(1000));
    if (isNaN(input / Math.pow(1000, exp))) {
       return 'You\'re not Edison';
    }
    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}
