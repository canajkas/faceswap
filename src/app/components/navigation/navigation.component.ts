import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  // Deine Logik hier

  closeNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}