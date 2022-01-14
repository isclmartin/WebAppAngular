import { Component, OnInit } from '@angular/core';

import UserRecord from '../shared/UserRecord';
import ApiService from '../shared/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './users.component.html'
})
export class UserComponent implements OnInit {
    title = 'users';

    userRecord: UserRecord;
    columnToSearch = "";
    textToFilter = "";

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.apiService.getAll().subscribe(data => {
            this.userRecord = data;
        });
    }

    searchText(column, text) {
        this.columnToSearch = column;
        this.textToFilter = text;

        this.apiService.filterColumn(column, text).subscribe(data => {
            this.userRecord = data;
        });
    }

    getPage(pageNumber) {
        this.apiService.getPage(pageNumber, this.columnToSearch, this.textToFilter).subscribe(data => {
            this.userRecord = data;
        });
    }

    fakeArray(): Array<any> {
        return new Array(this.userRecord.meta.pagination.pages);
    }
}
