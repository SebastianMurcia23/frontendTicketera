import { Injectable } from '@angular/core';
import { EventoDTO } from '../dto/evento-dto';


@Injectable({
 providedIn: 'root'
})
export class EventosService {

  public crearEventosPrueba(){
    this.eventos.push({
      id:'1',
      nombre:'Evento 1',
      descripcion:'Descripcion del evento 1',
      fecha:new Date("2021-09-01 20:00:00"),
      tipo:'Concierto',
      direccion:'Calle 123',
      ciudad:'Bogota',
      localidades:[
        {
          nombre:'Localidad 1',
          precio:10000,
          capacidad:100
        },
        {
          nombre:'Localidad 2',
          precio:20000,
          capacidad:100
        }
      ],
      imagenPortada:'https://picsum.photos/100?random=1',
      imagenLocalidades:'https://picsum.photos/100',
      estado:'Activo'
    });
   
   
    this.eventos.push({
      id:'2',
      nombre:'Evento 2',
      descripcion:'Descripcion del evento 2',
      fecha:new Date(),
      tipo:'Teatro',
      direccion:'Calle 123',
      ciudad:'Bogota',
      localidades:[],
      imagenPortada:'https://picsum.photos/100?random=2',
      imagenLocalidades:'https://picsum.photos/100',
      estado:'Activo'
    });
   
   
    this.eventos.push({
      id:'3',
      nombre:'Evento 3',
      descripcion:'Descripcion del evento 3',
      fecha:new Date(),
      tipo:'Deportivo',
      direccion:'Calle 123',
      ciudad:'Armenia',
      localidades:[],
      imagenPortada:'https://picsum.photos/100?random=3',
      imagenLocalidades:'https://picsum.photos/100',
      estado:'Activo'
    });

    this.eventos.push({
      id:'4',
      nombre:'Evento 4',
      descripcion:'Descripcion del evento 4',
      fecha:new Date(),
      tipo:'Deportivo',
      direccion:'Calle 1234',
      ciudad:'Bogota',
      localidades:[],
      imagenPortada:'https://picsum.photos/100?random=3',
      imagenLocalidades:'https://picsum.photos/100',
      estado:'Activo'
    });

    this.eventos.push({
      id:'5',
      nombre:'Evento 5',
      descripcion:'Descripcion del evento 5',
      fecha:new Date(),
      tipo:'Deportivo',
      direccion:'Calle 12345',
      ciudad:'Bogota',
      localidades:[],
      imagenPortada:'https://picsum.photos/100?random=3',
      imagenLocalidades:'https://picsum.photos/100',
      estado:'Activo'
    });
   }
   


 eventos:EventoDTO [];


 constructor() {
   this.eventos = [];
   this.crearEventosPrueba();
 }


 public listar(){
   return this.eventos;
 }


 public crear(crearEventoDTO:EventoDTO){
   this.eventos.push(crearEventoDTO);
 }


 public obtener(id:string):EventoDTO | undefined{
   return this.eventos.find(evento => evento.id == id);
 }


 public eliminar(id:String){
   this.eventos = this.eventos.filter(evento => evento.id != id);
 }


 public editar(id:string, editarEventoDTO:EventoDTO){
   const indice = this.eventos.findIndex(evento => evento.id == id);
   if(indice != -1){
     this.eventos[indice] = editarEventoDTO;
   }
 }

 public filtrarTipo(tipo:string):EventoDTO[]{
  return this.eventos.filter(evento => evento.tipo == tipo);
 }

 public filtrarCiudad(ciudad:string):EventoDTO[]{
  return this.eventos.filter(evento => evento.ciudad == ciudad);
 }

}
