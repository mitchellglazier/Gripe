import { GripesService } from './../gripes/shared/gripes.service';
import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IComment } from '../gripes';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = '';
    foundComments: IComment[];

    constructor(public auth: AuthService, private gripesService:
        GripesService) {

    }

    searchTags(searchTerm) {
        this.gripesService.searchTags(searchTerm).subscribe
            (comments => {
            this.foundComments = comments;
        });
    }

}
