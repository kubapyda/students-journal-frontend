export class Student {

  constructor(
    public student_name: string,
    public student_surname: string,
    public student_index_number: string,
    public student_login: string,
    public student_password: string,
    public group_id?: number,
    public student_id?: number
  ) {}

}
