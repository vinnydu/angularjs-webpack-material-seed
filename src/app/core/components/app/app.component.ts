/**
 * Import the Component styles
 */
import './app.component.scss';

export class App {
    static selector = 'app';

    static componentConfig: ng.IComponentOptions = {
        controller: App,
        template: require('./app.component.html')
      };

}
