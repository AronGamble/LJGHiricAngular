export class EmploymentItem {

  constructor(
    public id: string,
    public companyName: string,
    public location: string,
    public startDate: Date,
    public endDate: Date,
    public typeOfEmployment: number

  ) { }


}
