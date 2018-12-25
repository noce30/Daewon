import { store } from "../main/Root";
// import { showLoading, hideLoading } from "../actions/loading";

class LoadingService {
  static singleInstance = null;

  static getInstance() {
    return (
      LoadingService.singleInstance ||
      (LoadingService.singleInstance = new LoadingService())
    );
  }

  handleLoading(isShow) {
    if (isShow) {     
      // store.dispatch(showLoading());
    } else {
      // store.dispatch(hideLoading());
    }
  }
}

export default LoadingService.getInstance();
