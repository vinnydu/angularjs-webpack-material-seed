// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */

import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

/**
 * Import Module Services
 */
import { UserService } from './services/user.service';

/**
 * Import Module Routing
 */
import { routing } from './user.routes';

export const moduleName =
  angular.module('application.user', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(UserListComponent.selector, UserListComponent.componentConfig)
  .component(UserDetailComponent.selector, UserDetailComponent.componentConfig)

  /**
   * Register Module Services
   */
  .service(UserService.selector, UserService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
