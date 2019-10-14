import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() data: any [] = [];

  datos : any[] = [];

  constructor( private getjson:UsersService, private router:Router ) { 
    this.data = this.data;
  }

  getProfile( data:any ){
    
    console.log(data)
    
    this.router.navigate(['/profile']);
  }
  //With a Observable
  getUsers(): void {
    this.getjson.getJson('url')
     .subscribe( (results :any) => {
       this.datos = results.results;
       console.log(results)
     });
     
   }
   

//With a Promise
  // getUsers(): void {
  //  this.getjson.getJson('url')
  //   .then( (results :any) => {
  //     this.datos = results.results;
  //     console.log(results)
  //   })
  //   .catch(err => console.log('Error', err))
  // }


  ngOnInit() {
    this.getUsers();
    // this.getProfile('');
    // this.getUsersId();
  }
  

}
