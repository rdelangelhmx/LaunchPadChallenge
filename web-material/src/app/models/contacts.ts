/**
 * @file Contacts Model
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 20/Nov/21
 * ----------------------------------
*/
export class Contacts {
  public id!: number;
  public name!: string;
  public email!: string;
  public position!: string;
  public area!: string;
  public status!: number;
  public pinned!: boolean;
  public active!: boolean;
  constructor() { }
}
