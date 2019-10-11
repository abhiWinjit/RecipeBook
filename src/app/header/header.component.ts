import { Component, EventEmitter, Output } from '@angular/core';
import { DatastorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    constructor(private dataStorageService: DatastorageService) { }

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }


    onFetchRecipes() {
        this.dataStorageService.fetchRecipes().subscribe();
    }


}