import { IHttpResponse } from 'angular';
import { mockUrls } from '../../../urls';
import { UserService } from '../../services/user.service';
import { User, UserResponse } from '../../interfaces/user.model';

/**
 * UserDetail Component
 *
 * Contains tabs for user detail.
 *
 * @constructor
 * @ngInject
 */
export class UserDetailComponent {
  static selector: string = 'userDetail';
  // define component config
  static componentConfig: ng.IComponentOptions = {
    controller: UserDetailComponent,
    template: require('./user-detail.component.html')
  };

  private userService: UserService;
  private user: User;

  constructor(private $state: angular.ui.IStateService, userService: UserService,
    private $timeout: angular.ITimeoutService) {
      this.userService = userService;

    if ($state.params.data) {
      if (mockUrls) {
        userService.loadUserMock().then((response: UserResponse) => {
          this.user = response.data;
        });
      } else {
        userService.loadUser($state.params.data.id).then((response: IHttpResponse<UserResponse>) => {
          this.user = response.data.data;
        });
      }
    }
  }

  goToPage() {
    this.$state.go('users');
  }

}
