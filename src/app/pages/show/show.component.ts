import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [ CommonModule, NavbarComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  activeTab = "description"

  changeTab(tab: string) {
    this.activeTab = tab
  }

}
