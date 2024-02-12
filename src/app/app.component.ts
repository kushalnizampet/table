import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { data } from './config/config';
import { DataService } from './services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'name', 'fatherName', 'doj','dob','email','foodType','roomNumber','age','mobileNumber','advance','address','city','action'];
  dataSource!: MatTableDataSource<data>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  hostelData:any
  constructor(private dialog : MatDialog,private api:DataService,private snackbar:MatSnackBar){}
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent)
  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.api.getData().subscribe(
        (data:any)=>{
          this.hostelData = data
          console.log(data);
          this.dataSource = new MatTableDataSource(this.hostelData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator
        }
    )
  }

  deleteData(id:number){
    this.api.deleteData(id).subscribe(
      (data:any)=>{
        console.log(data)
        this.getData();
        this.snackbar.open("Data Deleted succefully","ok",{duration:3000})
      }
    )
  }

  //for update()
  openStudentDialog(data:any){
    const dialogRef= this.dialog.open(DialogComponent,{
      data
    })
    dialogRef.afterClosed().subscribe(
      (data:any)=>{
        this.getData()
      }
    )
  }
  value:number = 0
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.value = filterValue.length
    if (this.value>=3) {
      this.dataSource.filter = filterValue;
    }else{
      this.getData();
    }
  }
}
