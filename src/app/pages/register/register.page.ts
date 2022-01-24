import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiCoinkServiceService } from 'src/app/services/api-coink-service.service';
import { LoaderService } from 'src/app/services/loader-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public $documentTypes: any;
  public $genders: any;
  public steperControler = 0;
  public form: any;
  public formRegister;
  constructor(private apiCoinkService: ApiCoinkServiceService,
    private loaderService: LoaderService,
    private fb: FormBuilder,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.initForm()
    this.getDocumentTypes()
    this.getGenders()
  }
  initForm() {
    this.form = {
      phoneNumber: '3212911455',
      verificationCode: '1234'
    }
    this.formRegister = this.fb.group({

      phoneNumber: ['', Validators.compose([Validators.required])],
      verificationCode: ['', Validators.compose([Validators.required])],
      documentType: ['1', Validators.compose([Validators.required])],
      documentNumber: ['1030682581', Validators.compose([Validators.required])],
      expeditionDocument: ['2020-12-12', Validators.compose([Validators.required])],
      birthDay: ['2020-12-12', Validators.compose([Validators.required])],
      gender: ['1', Validators.compose([Validators.required])],
      email: ['erickgonzalezramos@gmail.com', Validators.compose([Validators.required, Validators.email])],
      emailConfirm: ['erickgonzalezramos@gmail.com', Validators.compose([Validators.required, Validators.email])],
      pin: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])],
      pinConfirm: ['', Validators.compose([Validators.required])],
    })
  }
  getDocumentTypes() {
    this.loaderService.showLoader(true)
    this.apiCoinkService.getDocumentTypes().subscribe(data => {
      console.log(data);
      this.$documentTypes = data
      this.loaderService.showLoader(false)
    })

  }
  getGenders() {
    this.loaderService.showLoader(true)
    this.apiCoinkService.getGenders().subscribe(data => {
      console.log(data);
      this.$genders = data
      this.loaderService.showLoader(false)
    })

  }
  change(value) {
    this.form.phoneNumber = value
  }
  changeVerificationCode(value) {
    this.form.verificationCode = value
  }
  validateVerificationCode() {
    if (this.form.verificationCode.length == 4) {
      this.steperControler = 2
      this.formRegister.controls.phoneNumber.setValue(this.form.phoneNumber)
      this.formRegister.controls.verificationCode.setValue(this.form.verificationCode)
    } else {
      this.presentAlert("Error", "El código insertado no es válido")
    }
  }
  completePhoneNumber() {
    if (this.form.phoneNumber.length != 10) {
      this.presentAlert("Error", "El número insertado no es válido")
    } else {
      this.loaderService.showLoader(true)
      this.apiCoinkService.sendSmsVerficationNumber('57' + this.form.phoneNumber).subscribe(data => {
        console.log(data);
        let response = JSON.parse(data)
        if (response.verification_id) {
          this.steperControler = 1
        } else {
          this.presentAlert("Error", "Se ha producido un error, inténtalo más tarde")
        }
        this.loaderService.showLoader(false)
      }, error => {
        console.log(error);
        this.loaderService.showLoader(false)
        this.presentAlert("Error", "Se ha producido un error, inténtalo más tarde")
      })

    }
  }
  register() {


    console.log(this.formRegister.value);
    if (this.formRegister.controls.email.invalid) return this.presentAlert("Alerta", "Email inválido")
    if (this.formRegister.controls.emailConfirm.invalid || this.formRegister.value.email !== this.formRegister.value.emailConfirm) return this.presentAlert("Alerta", "Email de confirmación inválido")
    if (this.formRegister.controls.pin.invalid) return this.presentAlert("Alerta", "PIN inválido")
    if (this.formRegister.controls.pinConfirm.invalid || this.formRegister.value.pin !== this.formRegister.value.pinConfirm) return this.presentAlert("Alerta", "PIN de confirmación inválido")
    if (this.formRegister.invalid) return this.presentAlert("Alerta", "Campos incompletos")
    this.steperControler = 3
    this.presentAlert("Éxito", "Te has registrado exitosamente.")
    this.formRegister
  

}
  async presentAlert(title ?, message ?) {
  const alert = await this.alertController.create({
    header: title,
    message: message,
    buttons: ['Aceptar']
  });

  await alert.present();
}
}
