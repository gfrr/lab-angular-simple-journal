import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiHandlerService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
    .map((res) => res.json());
  }

  getEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
    .map((res) => res.json());
  }

  createEntry(entry) {
  return this.http.post(`${this.BASE_URL}/api/journal-entries`, entry)
    .map((res) => res.json());
}


}

/*
Add a method to your journal-entries service to retrieve a single journal entry. The single journal entry endpoint is located at /api/journal-entries/:id

Create a single-entry component which finds a single entry from the API by it's ID, and displays the title, date, and content.

Finally, add a route to your Angular router, /:id which will render your single-entry component.





BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/phones`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/phones/${id}`)
      .map((res) => res.json());
  }

  edit(phone) {
    return this.http.put(`${this.BASE_URL}/api/phones/${phone.id}`, phone)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/phones/${id}`)
      .map((res) => res.json());
  }
  */
