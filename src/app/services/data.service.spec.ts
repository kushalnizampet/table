import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpcontroller: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpcontroller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //
  it('Adding Details using post()',()=>{
    const data=[
      {
        "name": "Deepak",
        "fatherName": "N",
        "dob": "2001-02-22T18:30:00.000Z",
        "doj": "2024-01-30 13:19:13",
        "email": "deepak@gmail.com",
        "foodType": "vegeterian",
        "roomNumber": 121,
        "age": 22,
        "mobileNumber": 9000235642,
        "advance": 2111,
        "address": "Uppal",
        "city": "Hyderabad",
        "id": 9
      },
      {
        "name": "Maniiiiii",
        "fatherName": "Aku",
        "dob": "2002-07-09T18:30:00.000Z",
        "doj": "2024-01-30 13:47:26",
        "email": "mani@gmail.com",
        "foodType": "vegeterian",
        "roomNumber": "108",
        "age": 12,
        "mobileNumber": 9000235642,
        "advance": 1200,
        "address": "Ramnagar",
        "city": "Jadcherla",
        "id": 10
      }
    ];
    service.postData(data).subscribe(
      (data:any)=>{
        expect(data).toEqual(data)
      }
    );
    const request = httpcontroller.expectOne(service.url);
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toBe('json');

    request.flush(data);
    httpcontroller.verify();
  });

  it('getting details using getData()',()=>{
    const data=[
      {
        "name": "Deepak",
        "fatherName": "N",
        "dob": "2001-02-22T18:30:00.000Z",
        "doj": "2024-01-30 13:19:13",
        "email": "deepak@gmail.com",
        "foodType": "vegeterian",
        "roomNumber": 121,
        "age": 22,
        "mobileNumber": 9000235642,
        "advance": 2111,
        "address": "Uppal",
        "city": "Hyderabad",
        "id": 9
      },
      {
        "name": "Maniiiiii",
        "fatherName": "Aku",
        "dob": "2002-07-09T18:30:00.000Z",
        "doj": "2024-01-30 13:47:26",
        "email": "mani@gmail.com",
        "foodType": "vegeterian",
        "roomNumber": "108",
        "age": 12,
        "mobileNumber": 9000235642,
        "advance": 1200,
        "address": "Ramnagar",
        "city": "Jadcherla",
        "id": 10
      }
    ];
    service.getData().subscribe(
      (data:any)=>{
        expect(data).toEqual(data)
      }
    );

    const request = httpcontroller.expectOne(service.url);
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toBe('json');

    request.flush(data);
    httpcontroller.verify();
  })

  it('delete details using delete()',()=>{
    const url = service.url
    const data= [
    {
      "name": "Deepak",
      "fatherName": "N",
      "dob": "2001-02-22T18:30:00.000Z",
      "doj": "2024-01-30 13:19:13",
      "email": "deepak@gmail.com",
      "foodType": "vegeterian",
      "roomNumber": 121,
      "age": 22,
      "mobileNumber": 9000235642,
      "advance": 2111,
      "address": "Uppal",
      "city": "Hyderabad",
      "id": 9
    },
    {
      "name": "Maniiiiii",
      "fatherName": "Aku",
      "dob": "2002-07-09T18:30:00.000Z",
      "doj": "2024-01-30 13:47:26",
      "email": "mani@gmail.com",
      "foodType": "vegeterian",
      "roomNumber": "108",
      "age": 12,
      "mobileNumber": 9000235642,
      "advance": 1200,
      "address": "Ramnagar",
      "city": "Jadcherla",
      "id": 10
    }
  ];
    const datawithparamenters = `${url}/${data[0].id}`

    service.deleteData(data[0].id).subscribe(
      (res:any)=>{
        expect(res).toEqual(data)
      }
    )

    const req = httpcontroller.expectOne(datawithparamenters);
    expect(req.request.method).toEqual('DELETE')

    req.flush(data)
    httpcontroller.verify();
  })
});
