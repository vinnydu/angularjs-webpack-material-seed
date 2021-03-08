import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DummyObject } from './interfaces/user.model';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('users', {
      parent: 'app',
      url: '/users',
      component: UserListComponent.selector
    })

    .state('detail', {
      parent: 'app',
      url: '/detail',
      component: UserDetailComponent.selector,
      params: {data: <DummyObject>{}}
    });
};
