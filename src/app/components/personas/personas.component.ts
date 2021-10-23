import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { Persona } from '../../model/persona';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  bandera: number;
  termino: string;
  constructor(private servicio: ServicioService, private route: Router) {
    this.servicio.getPersona().subscribe(data => {
      console.log(data);
      this.personas = data;
      this.bandera = data.length;
    })
   }

  ngOnInit(): void {
  }

  editar(persona: Persona){
    localStorage.setItem("id",persona.id.toString());
    this.route.navigate(['/editar']);
  }

  eliminar(persona: Persona){
    this.servicio.eliminarPersona(persona.id).subscribe(data => {
      alert('Eliminado con exito');
      window.location.reload();
    })    
  }

  buscar( termino: string) {
    //this.personas = this.servicio.buscarPorTermino(termino, this.personas);
    this.personas = this.servicio.buscar(termino);
    this.termino = termino;
  }
}
