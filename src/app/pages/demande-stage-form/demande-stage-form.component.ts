import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeStageService } from '../../demande-stage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demande-stage-form',
  templateUrl: './demande-stage-form.component.html',
  styleUrls: ['./demande-stage-form.component.scss']
})
export class DemandeStageFormComponent {
  demandeStageForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private demandeStageService: DemandeStageService
  ) {
    this.demandeStageForm = this.fb.group({
      entreprise: ['', Validators.required],
      sujet: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      organismeAccueil: ['', Validators.required],
      departement: ['', Validators.required],
      responsableDirect: ['', Validators.required],
      fonctionResponsableDirect: ['', Validators.required],
      adresse: ['', Validators.required],
      fax: [''], // facultatif
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.demandeStageForm.invalid) {
      this.demandeStageForm.markAllAsTouched();
      console.warn('⚠️ Formulaire invalide');
      return;
    }

    const formData = new FormData();

    // Ajout des champs texte
    Object.entries(this.demandeStageForm.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Ajout du fichier CV
    if (this.selectedFile) {
      formData.append('cv', this.selectedFile, this.selectedFile.name);
    } else {
      console.warn('⚠️ Aucun fichier CV sélectionné.');
    }

    // Envoi au backend
    this.demandeStageService.envoyerDemandeStage(formData).subscribe({
      next: (response: any) => {
        console.log('✅ Demande envoyée avec succès', response);
        alert('Demande envoyée avec succès !');
        this.demandeStageForm.reset();
        this.selectedFile = null;
      },
      error: (error: HttpErrorResponse) => {
        console.error('❌ Erreur lors de l’envoi :', error);
        alert('Erreur lors de l’envoi de la demande.');
      }
    });
  }
}
