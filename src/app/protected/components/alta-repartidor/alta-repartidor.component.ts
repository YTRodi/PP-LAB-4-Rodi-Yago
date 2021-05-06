import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Country } from 'src/app/interfaces/country';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { Repartidor } from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css'],
})
export class AltaRepartidorComponent implements OnInit {
  @Input() selectedCountry: Country | null = null;
  public title: string = 'Alta repartidor';

  public formRepartidor: FormGroup;

  constructor(
    private repartidorService: RepartidorService,
    private fb: FormBuilder
  ) {
    this.formRepartidor = this.fb.group({
      dni: new FormControl(11111111, [
        Validators.required,
        Validators.min(11111111),
        Validators.max(99999999),
      ]),
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl(18, [
        Validators.required,
        Validators.min(18),
        Validators.max(99),
      ]),
      capacidadTransporte: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      unidadPropia: new FormControl(true, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  sendForm() {
    this.repartidorService.addRepartidor(<Repartidor>{
      ...this.formRepartidor.getRawValue(),
      paisOrigen: this.selectedCountry,
    });

    this.selectedCountry = null;
    this.formRepartidor.reset();

    Swal.fire(
      'Alta exitosa',
      'Se a agregado el repartidor a la lista',
      'success'
    );
  }
}
