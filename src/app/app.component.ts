import { FavoriteEvent } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /*
    Used to send details to favorite component
    This listens or is a subscriber to favorite component for change event emit 
  */
  post = {
    isFavorite: true,
    myVariable: "property binding",
    header: "Panel Header",
    body: "Panel Body",
    footer: "Panel footer",
    linkHeartSelected:false,
    linkHeartTotalLikes:10
  }

  onFavoriteChanged(isSelectedEvent:FavoriteEvent){
    console.log("favorite changed", isSelectedEvent)
  }

  onPanelClicked(){
    console.log("Panel clicked Event")
  }
}
