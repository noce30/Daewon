import { AsyncStorage } from "react-native";
import Constants from "./Constants";
import storageService from "./StorageService";
import restClientService from "./RestClientService";
// import { PushNotificationService } from "./PushNotificationService";
import jwtDecode from 'jwt-decode';

export class AuthorizationTokenService {
  static singleInstance = null;

  static getInstance() {
    return (
      AuthorizationTokenService.singleInstance ||
      (AuthorizationTokenService.singleInstance = new AuthorizationTokenService())
    );
  }

  token = null;
  expiration = null;
  refreshtoken = null;

  constructor() {
    this.storageService = storageService;
    this.restClientService = restClientService;
  }

  async storeToken(token) {
    // listen and push notification
    // PushNotificationService.configure();

    return this.storageService.store(Constants.Store.AccessToken, token);
  }

  async getToken() {
    if (this.token) {
      await this.checkTokenExpiration();
      return this.token;
    }

    this.token = await this.storageService.retrieve(
      Constants.Store.AccessToken
    );
    // if (this.token) {
    //   await this.checkTokenExpiration();
    // }
    
    return this.token;
  }

  async checkTokenExpiration() {
    if (!this.expiration) {
      const decoded = this.decodeJwt(this.token);
      this.expiration = new Date(decoded.payload.exp * 1000);
      this.refreshtoken = decoded.payload.RefreshToken;
    }

    if (this.expiration < new Date()) {
      await this.refreshToken(this.refreshtoken);
      this.expiration = null;
      this.refreshtoken = null;
    }
  }

  async refreshToken(refreshToken) {
    try {
      const response = await this.restClientService.post(
        `asdasd`,
        {
          refreshToken
        }
      );

      await this.storageService.store(
        Constants.Store.AccessToken,
        response.token
      );
      this.token = await this.storageService.retrieve(
        Constants.Store.AccessToken
      );
    } catch (error) {
      await this.storageService.clear();
      this.token = null;
      this.expiration = null;
      this.refreshtoken = null;
    }
  }

  decodeJwt(token) {
    const decodedToken = jwtDecode(token);

    const tokenObject = {
      payload: decodedToken
    };
    tokenObject.raw = tokenObject;
    return tokenObject;
  }

  async logOut() {
    // stop listen push notification
    // PushNotificationService.stopPushNotification();

    this.token = null;
    this.expiration = null;
    this.refreshtoken = null;
    await this.storageService.clear();
  }
}

export const authorizationTokenService = AuthorizationTokenService.getInstance();
