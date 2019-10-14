import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  back : string = 'Regresar'
  datos : any[] = [];
  constructor( private getjson: UsersService, private router: ActivatedRoute) { 
   this.router.params.subscribe( params => {
     this.getId( params ['id.name'])
   })
   
  }

  getId( id: string ){
    this.getjson.getJson(id)
    .subscribe( data => {
    console.log( data );
    } )
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.getjson.getJsonId('')
     .subscribe( (results :any) => {
       this.datos = results.results;
       console.log(results)
     });
     
   }

}
