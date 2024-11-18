import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { AuthorService } from '../../shared/services/author.service';
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
  isAuthor: boolean = false;  // Flag to determine if it's an author profile
  isEditing: boolean = false; // Flag to toggle editing mode

  private apiUrl = 'https://my-json-server.typicode.com/BookSphere-SH/DB_Romero'; // Mock API URL

  constructor(
    private userService: UserService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private http: HttpClient  // Inject HttpClient to handle API requests
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const type = this.route.snapshot.params['type'];  // 'user' or 'author'

    if (type === 'author') {
      this.isAuthor = true;
      this.authorService.getAuthorById(id).subscribe(author => {
        this.profile = author;
      });
    } else {
      this.isAuthor = false;
      this.userService.getUserById(id).subscribe(user => {
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
    if (this.isAuthor) {
      // Update author profile
      this.http.put(`${this.apiUrl}/authors/${this.profile.id}`, this.profile)
        .subscribe(response => {
          console.log('Author profile updated:', response);
          this.toggleEdit();
        }, error => {
          console.error('Error updating author profile:', error);
        });
    } else {
      // Update user profile
      this.http.put(`${this.apiUrl}/users/${this.profile.id}`, this.profile)
        .subscribe(response => {
          console.log('User profile updated:', response);
          this.toggleEdit();
        }, error => {
          console.error('Error updating user profile:', error);
        });
    }
  }
}

