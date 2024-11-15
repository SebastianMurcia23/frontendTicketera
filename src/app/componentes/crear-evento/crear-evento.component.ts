import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})
export class CrearEventoComponent {

  crearEventoForm!: FormGroup;

  private crearFormulario() {
    this.crearEventoForm = this.formBuilder.group({
     nombre: ['', [Validators.required]],
     descripcion: ['', [Validators.required]],
     tipo: ['', [Validators.required]],
     direccion: ['', [Validators.required]],
     ciudad: ['', [Validators.required]],
     localidades: this.formBuilder.array([]),
     imagenPortada: ['', [Validators.required]],
     imagenLocalidades: ['', [Validators.required]]
   });
  }
  

  tiposDeEvento: string[];


constructor(private formBuilder: FormBuilder) {
 this.crearFormulario();
 this.tiposDeEvento = ['Concierto', 'Fiesta', 'Teatro', 'Deportes'];
}

public crearEvento(){
  console.log(this.crearEventoForm.value);
 }
 

public onFileChange(event:any, tipo:string){
  if (event.target.files.length > 0) {
    const files = event.target.files;     
 
 
    switch(tipo){
      case 'localidades':
        this.crearEventoForm.get('imagenLocalidades')?.setValue(files[0]);
        break;
      case 'portada':
        this.crearEventoForm.get('imagenPortada')?.setValue(files[0]);
        break;
    }
 
 
  }
 }
 

}
