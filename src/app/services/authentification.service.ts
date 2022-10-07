import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  seLoguer(username: string, mdp: string) {
    if (username.indexOf('@uvs.edu.sn') != -1) {
      return true;
    } else {
      return false;
    }
  }
}
