import {observer} from "mobx-react"

export class UserStore {
  constructor() {
    observer(this, {
      loading: true,
      isLoggedIn: false,
      username: "",
    });
  }
}