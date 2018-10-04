import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PuzzlePage } from '../puzzle/puzzle';
import { QuizzPage } from '../quizz/quizz';
import { CardPage } from '../card/card';
import { RelaxPage } from '../relax/relax';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    }

  

    // function de navigation vers page
    goPuzzle(){
      this.navCtrl.push(PuzzlePage);
    }

    goQuizz(){
      this.navCtrl.push(QuizzPage);
    }

    goCard(){
      this.navCtrl.push(CardPage);
    }

    goRelax(){
      this.navCtrl.push(RelaxPage);
    }

    // game phaser

}
