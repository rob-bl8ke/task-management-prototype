import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Input signals cannot be changed from within the component, they are readonly inside the component.
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    console.log(`clicked ${this.name()}`);
  }
}
