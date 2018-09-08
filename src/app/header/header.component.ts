import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() menuSelected = new EventEmitter<string>();

    onMenuClicked(menu: string) {
        this.menuSelected.emit(menu);
    }

}
