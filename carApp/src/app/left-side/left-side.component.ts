import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-left-side',
  imports: [],
  template: `
    <button (click)="alert()" class="btn btn-primary">Primary</button>
    <script>Swal.fire("SweetAlert2 is working!");</script>
  `,
  styles: ``
})
export class LeftSideComponent {
  alert(){
    Swal.fire("SweetAlert2 is working!")
  }
}
