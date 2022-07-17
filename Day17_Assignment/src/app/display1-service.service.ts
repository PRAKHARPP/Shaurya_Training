import { Injectable } from '@angular/core';

export namespace contacts
{
  @Injectable({
    providedIn: 'root'
  })
  export class AddNewContact {
      constructor() { }

      Display():string
      {
         return "New Contact Added";
      }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EditContacct {
      constructor() { }

      Display():string
      {
         return "Contact Updated";
      }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContact {
      constructor() { }

      Display():string
      {
         return "Contact Deleted";
      }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ListContact {
      constructor() { }

      Display():string
      {
         return "Contact List";
      }
  }
  
}