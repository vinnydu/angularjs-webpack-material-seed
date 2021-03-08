/**
 * UserList Component
 *
 * Contains tabs for users.
 *
 * @constructor
 * @ngInject
 */

import { IHttpResponse } from 'angular';
import { mockUrls } from '../../../urls';
import { UserList } from '../../interfaces/user.model';
import { UserService } from '../../services/user.service';

export class UserListComponent {
  static selector: string = 'userList';

  // define component config
  static componentConfig: ng.IComponentOptions = {
    controller: UserListComponent,
    template: require('./user-list.component.html')
  };

  private users ;

  constructor(private $state: angular.ui.IStateService, userService: UserService) {

      if (mockUrls) {
        userService.loadUserListMock().then((response: UserList) => {
          this.users = response.data;
        });
      } else {
        setTimeout(() => {
          userService.loadUserList().then((response: IHttpResponse<UserList>) => {
            this.users = response.data.data;
          });
        }, 500);
      }
  }

  goToPage(id: number) {
    this.$state.go('detail', {data: {id: id, text: 'test'}});
  }
}
