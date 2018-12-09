import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(
    private _dataStorage:DataStorageService,
    private _authService:AuthService){}

  onSaveData(){
    this._dataStorage.storeRecipes()
      .subscribe(
        (response)=>{
          console.log(response);
        }
      )
  }

  onFetchData(){
    this._dataStorage.getRecipes();
  }

  onLogout() {
    this._authService.logout();
  }

  isAuthenticated():boolean {
    return this._authService.isAuthenticated();
  }
}