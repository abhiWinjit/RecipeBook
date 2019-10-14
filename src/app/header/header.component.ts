import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DatastorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
    // @Output() featureSelected = new EventEmitter<string>();
    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DatastorageService,
        private authService: AuthService) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }

    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    onFetchRecipes() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }


}