import {
    AfterViewInit,
    Component,
    OnInit,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    // public isPageLoading = true;

    // spinner's config
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 20;

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        // this.isPageLoading = !this.isPageLoading;
    }
}
