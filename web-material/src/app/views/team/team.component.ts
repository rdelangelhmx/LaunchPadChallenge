import { Component, HostListener, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from 'src/app/enums/status.enum';
import { Contacts } from 'src/app/models/contacts';
import { ContactsService } from '../../services/data/contacts.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  contacts: Contacts[] = [];
  cols: string[] = ['name', 'title', 'status'];
  filter: Contacts = new Contacts();
  contactStatus = Status;
  breakpoint: number = 2;
  colsPin: number = 3;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getAllContacts();
    this.setCols();
  }

  getAllContacts()
  {
    this.contactsService.GetAll(this.filter)
    .subscribe((result: any) => {
      console.log(result);
      if(result.success) {
        this.contacts = result.data as Contacts[];
        return result;
      } else {
        console.error(result.mesagge);
      }
    },
    error => {
      console.error(error);
    });

  }

  getDataSource(data: Contacts[])
  {
    return new MatTableDataSource(data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.getDataSource(this.contacts).filter = filterValue.trim().toLowerCase();
  }

  setCols() {
    let width = window.innerWidth;
    console.log(window.innerWidth);
    if (width <= 760) this.colsPin = 1;
    else if (width > 760 && width <= 1000) this.colsPin = 2;
    else if (width > 1000) this.colsPin = 3;
  }

//recalculating upon browser window resize
@HostListener('window:resize', ['$event'])
  onResize() {
    this.setCols();
  }
}
