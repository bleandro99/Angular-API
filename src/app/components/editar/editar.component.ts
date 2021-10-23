import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ServicioService } from '../../services/servicio.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona= new Persona;
  constructor(private servicio: ServicioService, private route: Router) {
    let id = localStorage.getItem("id");
    this.servicio.buscarPersona(+id).subscribe(data => {
      this.persona = data;
    })
   }

  ngOnInit(): void {
  }

  editar(formulario: NgForm){
    this.persona.nombre=formulario.value.nombre;
    this.persona.celular=formulario.value.celular;
    
    this.servicio.editarPersona(this.persona).subscribe(data => {
      alert('Correcta actualización');
      this.route.navigate(['/personas']);
    })
    
  }

}
