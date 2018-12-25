import restClientService from "../common/RestClientService";
import { authorizationTokenService } from "../common/AuthorizationTokenService";
import storageService from "../common/StorageService";
import Constants from "../common/Constants";

class UserService {
  static async login(username, password) {
    const response = await restClientService.post(
      `${Constants.membershipApi}/auth`,
      {
        Login: username,
        Password: password
      }
    );

    const authToken = response.value;

    await authorizationTokenService.storeToken(authToken);

    return response;
  }

  static async forgotPassword(email) {
    return restClientService.post(
      `${Constants.serverDomain}/api/Account/RecoverPass/`,
      { Email: email }
    );
  }
}

export default UserService;
