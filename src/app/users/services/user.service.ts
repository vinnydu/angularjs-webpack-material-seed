import { baseUrl, rootUrl, getUserListUrl } from '../../urls';
import { UserList, UserResponse } from '../interfaces/user.model';

/**
 * User Service
 *
 * Uses embedded, hard-coded data model; acts asynchronously to simulate remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 * @ngInject
 */
export class UserService {
  static selector = 'userService';

  private $q: ng.IQService;
  private $http: ng.IHttpService;

  constructor($q: ng.IQService, $http: ng.IHttpService) {
    this.$q = $q;
    this.$http = $http;

    return this;
  }

  loadUserList(): ng.IHttpPromise<UserList> {
    return this.$http.get(`https://${rootUrl}${baseUrl}${getUserListUrl}`);
  }

  /**
   * Returns a promise which asynchronously loads the list of the users.
   *
   * @returns {IPromise<{userlist: UserList}
   */
  loadUserListMock() {
    let response;
    // simulate async nature of real remote calls
    return this.$q.when(
      response = require('../../../../mock/users.json')
    );
  }

  loadUser(id: number): ng.IHttpPromise<UserResponse> {
    return this.$http.get(`https://${rootUrl}${baseUrl}${getUserListUrl}/${id}`);
  }

  /**
   * Returns a promise which asynchronously loads the list of the users.
   *
   * @returns {IPromise<{userlist: User}
   */
  loadUserMock() {
    let response;
    // simulate async nature of real remote calls
    return this.$q.when(
      response = require('../../../../mock/user.json')
    );
  }

}
