import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../shared/services/profile.service';
import { NgForOf, NgIf } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;   // Holds either user or author data
  isEditing: boolean = false; // Flag to toggle editing mode

  private apiUrl = 'https://my-json-server.typicode.com/BookSphere-SH/DB_Romero'; // Mock API URL

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private http: HttpClient  // Inject HttpClient to handle API requests
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const type = this.route.snapshot.params['type'];  // 'user' or 'author'


    {
      this.profileService.getProfileById(id).subscribe(user => {
        this.profile = user;
      });
    }
  }

  // Function to toggle editing mode
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  // Function to save edited profile data (including library)
  saveProfile(): void {
      // Update user profile
      this.http.put(`${this.apiUrl}/profiles/${this.profile.id}`, this.profile)
        .subscribe(response => {
          console.log('User profile updated:', response);
          this.toggleEdit();
        }, error => {
          console.error('Error updating user profile:', error);
        });
    }
}

