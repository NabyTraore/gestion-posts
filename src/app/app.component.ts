import {Component} from '@angular/core';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-posts';

  posts: Post [] = [
    {
      title: 'Mon premier post',
      content: 'Papa, demande un petit garçon,Papa, demande un petit garçonPapa, demande un petit garçon premier',
      loveIts: 0,
      createdDate: new Date

    },
    {
      title: 'Mon deuxieme post',
      content: 'Papa, demande un petit garçon,Papa, demande un petit garçonPapa, demande un petit garçon premier',
      loveIts: 0,
      createdDate: new Date
    },
    {
      title: 'Mon troisième post',
      content: 'Papa, demande un petit garçon,Papa, demande un petit garçonPapa, demande un petit garçon premier',
      loveIts: 0,
      createdDate: new Date
    },
    {
      title: 'Mon quatrième post',
      content: 'Papa, demande un petit garçon,Papa, demande un petit garçonPapa, demande un petit garçon premier',
      loveIts: 0,
      createdDate: new Date
    }
  ];
}
