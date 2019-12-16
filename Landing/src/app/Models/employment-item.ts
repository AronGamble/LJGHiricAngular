export class EmploymentItem {

  constructor(
    public id: string,
    public companyName: string,
    public location: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public typeOfEmployment: number,
    public detail: string
  ) { }


}
