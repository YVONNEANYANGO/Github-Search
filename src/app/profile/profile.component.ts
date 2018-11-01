import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  repository;

  constructor(private profileService:ProfileService) { 
    this.profileService.fetchProfileDetails('theonilahtash').subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.fetchProfileRepository('theonilahtash').subscribe(repository => {
      console.log(repository);
      this.repository = repository
    })
  }
 
  ngOnInit() {
  }

}
