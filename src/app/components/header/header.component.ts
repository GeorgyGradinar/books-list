import { Component } from '@angular/core';
import { ROUTES } from '../../constants/router.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly routes: typeof ROUTES = ROUTES;
}
