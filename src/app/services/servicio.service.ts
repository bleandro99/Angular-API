import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/persona/';

  getPersona(){
    return this.http.get<Persona[]>(this.url + 'listar');
  }

  createPersona(persona: Persona){
    return this.http.post<Persona>(this.url + 'guardar', persona);
  }

  buscarPersona(id: number){
    return this.http.get<Persona>(this.url + 'buscar/' + id)
  }

  editarPersona(persona: Persona){
    return this.http.put<Persona>(this.url + 'actualizar', persona);
  }

  eliminarPersona(id: number){
    return this.http.delete(this.url + 'eliminar/' + id);
  }
  
  buscar(termino: string){
    let arreglo: Persona[] = [];
    let data: any[] = [];
    termino = termino.toLowerCase();
    this.getPersona().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let persona = data[i];
        let nombre = data[i].nombre.toLowerCase();  
        if (nombre.indexOf(termino) >= 0) {
          arreglo.push(persona);
        }    
      }
    });
    return arreglo;
  }

  buscarPorTermino(termino: string, arreglo: Persona[]){
    let arr: Persona[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < arreglo.length; i++) {
      let persona = arreglo[i];
      let nombre = arreglo[i].nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        arr.push(persona);
      }  
    }
    return arr;
  }

}