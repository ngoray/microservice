import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  

  constructor(private http: HttpClient) { }

//Booking localhost:4000

  regUser(username: string, nric: string, room: string, guest: string, checkin: Date, checkout: Date) {
    return this.http.get('http://localhost:4000/api/booking/' 
    + username + "/" + nric + "/" + room + "/" + guest + "/" + checkin + "/" + checkout );
  }
  authUser(username: string, nric: string) {
    return this.http.get('http://localhost:4000/api/booking/' 
    + username + "/" + nric);
  }

  getAllPosts() {    
    return this.http.get<any[]>('http://localhost:4000/api/booking');   
  }

  deletePost(id: string) { 
    return this.http.delete<any[]>('http://localhost:4000/api/booking/' + id);   
  }  

  updatePost(id: string, booking) {
    return this.http.put(`http://localhost:4000/api/booking/update/${id}`, booking);
  }

  getPost(keyword: string) {
    return this.http.get('http://localhost:4000/api/' + keyword);

  }

  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return sessionStorage.getItem("LoggedIn")
  }
  
  setUserName(username: string) {
    sessionStorage.setItem("UserName", username);
  }

  getUserName() {
    return sessionStorage.getItem("UserName")
  }

  logout() {
    sessionStorage.removeItem("LoggedIn"); 
    sessionStorage.removeItem("UserName");
  }


//Comments localhost:5000

  getComment() {    
    return this.http.get<any[]>('http://localhost:5000/api/comment');   
  }

  addComment(name: string, email: string, rating: string, comment: string){
    return this.http.get('http://localhost:5000/api/comment/' 
    + name + "/" + email + "/" + rating + "/" + comment );
  }

  deleteComment(id: string) { 
    return this.http.delete<any[]>('http://localhost:5000/api/comment/' + id);   
  }  

//Rooms localhost:8080

  getRoom() {
    return this.http.get<any[]>('http://localhost:8080/api/room');  
  }

}

