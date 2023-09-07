import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userHome: any;
  pass: any;
  value = "dcaresg";


  constructor(private activeroute: ActivatedRoute, private router: Router,private animationCtrl: AnimationController) {
    // if (history.state.user) {
    //   this.userHome = history.state.user;      
    // }
    
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
          this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    const animation:Animation =this.animationCtrl.create()
    .duration(1000)
    .fromTo('opacity','1','0.5')
  });

    

  }

  ngOnInit(): void {
   
  }

}
