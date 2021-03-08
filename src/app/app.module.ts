// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import * as ngMaterial from 'angular-material';
import * as moment from 'moment';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import { moduleName as userModule } from './users/user.module';

export const moduleName =
  angular
    .module('application', [
      coreModule,
      userModule,
      ngMaterial
    ])
    .constant('moment', moment)
    .config(($mdDateLocaleProvider, $mdThemingProvider, moment) => {

      $mdThemingProvider.definePalette('theme1', {
        '50': 'e5f1e0',
        '100': 'bedcb3',
        '200': '92c480',
        '300': '66ac4d',
        '400': '469b26',
        '500': '258900',
        '600': '218100',
        '700': '1b7600',
        '800': '166c00',
        '900': '0d5900',
        'A100': '92ff8b',
        'A200': '63ff58',
        'A400': '33ff25',
        'A700': '1cff0b',
        // by default, text (contrast) on this palette should be white with 87% opacity.
        'contrastDefaultColor': 'light',
        // by default, for these lighter hues, text (contrast) should be 'dark'.
        'contrastDarkColors': [
          '50',
          '100',
          '200',
          '300',
          'A100',
          'A200',
          'A400',
          'A700'
        ],
        'contrastLightColors': [
          '400',
          '500',
          '600',
          '700',
          '800',
          '900'
        ],
        // by default, for these darker hues, text (contrast) should be white with 100% opacity.
        'contrastStrongLightColors': '700 800 900 A700'
      });

      $mdThemingProvider.theme('default')
      .primaryPalette('theme1');
      // .accentPalette('orange');

      moment.locale('en');  // set here your locale
      let localeDate = moment.localeData();

      $mdDateLocaleProvider.months = localeDate._months;
      $mdDateLocaleProvider.shortMonths = localeDate._monthsShort;
      $mdDateLocaleProvider.days = localeDate._weekdays;
      $mdDateLocaleProvider.shortDays = localeDate._weekdaysMin;

      $mdDateLocaleProvider.parseDate = (dateString: string) => {
        let m = moment(dateString, 'L', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
      };

      $mdDateLocaleProvider.formatDate = (date: Date) => {
        if (!date) {
          return '';
        } else {
          let m = moment(date);
          return m.isValid() ? m.format('L') : '';
        }
      };
    })
    .name;
