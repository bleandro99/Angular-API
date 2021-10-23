import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';
import { Persona } from '../../model/persona';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  persona: Persona = new Persona;;
  constructor(private servicio: ServicioService, private route: Router) { }

  ngOnInit(): void {
  }

  agregar(formulario: NgForm){
    this.persona.nombre= formulario.value.nombre;
    this.persona.celular= formulario.value.celular;

    this.servicio.createPersona(this.persona).subscribe(data => {
      alert('Agregado correctamente');
      this.route.navigate(['/personas']);
    })
    
    
    
  }

}
