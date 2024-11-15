import { Component } from '@angular/core';
import { EventosService } from '../../servicios/eventos.service';
import { RouterModule } from '@angular/router';
import { EventoDTO } from '../../dto/evento-dto';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  tiposDeEvento: string[];
  Ciudades: string[];
  eventos: EventoDTO[];
  inicioForm!: FormGroup

  constructor(public eventosService:EventosService, public formBuilder:FormBuilder) {
    this.tiposDeEvento = ['Concierto', 'Fiesta', 'Teatro', 'Deportivo'];
    this.Ciudades= ['Armenia','Bogota','Medellin'];
    this.eventos = eventosService.listar();

    this.crearForm();
  }

  private crearForm(){
    this.inicioForm = this.formBuilder.group({
      tipo: [""],
      ciudad: [""],
      fecha: [""]
    });
  }

  public filtrarEventosTipo(event:any){
    const tipo = this.inicioForm.get("tipo")?.value;
    const ciudad = this.inicioForm.get("ciudad")?.value;
    if(tipo == "" || ciudad == ""){
      this.eventos = this.eventosService.listar();
    }else{
      this.eventos = this.eventosService.filtrarTipo(tipo);
    }
  }

}
