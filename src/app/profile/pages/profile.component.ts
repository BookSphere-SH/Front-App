// src/app/profile/pages/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../shared/services/profile.service';
import { NgForOf, NgIf } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule, TranslateModule],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  isEditing = false;
  searchQuery: string = '';

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.profileService.getProfileById(Number(id)).subscribe(profile => {
      this.profile = profile;
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    this.profileService.updateProfile(this.profile.id, this.profile).subscribe(() => {
      this.isEditing = false;
    });
  }

  searchByName(): void {
    this.profileService.getByNameQuery(this.searchQuery).subscribe(profiles => {
      // Handle the search results
      console.log(profiles);
    });
  }
}
