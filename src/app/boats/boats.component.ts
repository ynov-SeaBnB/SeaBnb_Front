import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface Boat {
  name: string;
  isActive: boolean;
  imagePath: string;
}

interface BoatFormData {
  name: string;
  width: number;
  length: number;
  motorized: string[];
  port: string[];
  country: string;
  type: string;
  skipper: string;
  pictures: string[];
  equipments: string[];
  specifications: any;
  availability: any;
  deposit: string;
  note: number;
  propertyPapers: string[];
  idOwner: number;
}

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css'],
})
export class BoatsComponent {
  constructor(private apiService: ApiService) {}

  boatFormData: BoatFormData = {
    name: '',
    width: 0,
    length: 0,
    motorized: [],
    port: [],
    country: '',
    type: '',
    skipper: '',
    pictures: [],
    equipments: [],
    specifications: {},
    availability: {},
    deposit: '',
    note: 0,
    propertyPapers: [],
    idOwner: 0,
  };

  boats: Boat[] = [
    {
      name: 'Engine',
      isActive: false,
      imagePath: '../../assets/images/icons/engine.png',
    },
    {
      name: 'Sailing ship',
      isActive: false,
      imagePath: '../../assets/images/icons/sailing.png',
    },
    {
      name: 'Semi-rigid',
      isActive: false,
      imagePath: '../../assets/images/icons/semi-rigid.png',
    },
    {
      name: 'Catamaran',
      isActive: false,
      imagePath: '../../assets/images/icons/catamaran.png',
    },
    {
      name: 'Barge',
      isActive: false,
      imagePath: '../../assets/images/icons/barge.png',
    },
    {
      name: 'Schooner',
      isActive: false,
      imagePath: '../../assets/images/icons/schooner.png',
    },
    {
      name: 'Boat without license',
      isActive: false,
      imagePath: '../../assets/images/icons/boatwithoutlicense.png',
    },
    {
      name: 'Yacht',
      isActive: false,
      imagePath: '../../assets/images/icons/yacht.png',
    },
  ];

  toggleBackgroundColor(clickedBoat: Boat) {
    this.boats.forEach((boat) => {
      if (boat !== clickedBoat) {
        boat.isActive = false;
      }
    });
    clickedBoat.isActive = !clickedBoat.isActive;
  }

  selectedOption: string = 'option2';
  inputText: string = '';

  images: string[] = []; //

  onDragOver(event: Event): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();

    const files = event.dataTransfer?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.includes('image')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.resizeImage(e.target.result, 250, 250);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  resizeImage(base64Str: string, maxWidth: number, maxHeight: number): void {
    const img = new Image();
    img.src = base64Str;

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        this.images.push(canvas.toDataURL('image/jpeg'));
      }
    };
  }
  deleteImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.images.splice(index, 1);
    }
  }

  onSubmit() {
    const formData: BoatFormData = {
      name: (document.getElementById('boatName') as HTMLInputElement).value,
      width: parseFloat(
        (document.getElementById('boatWidth') as HTMLInputElement).value,
      ),
      length: parseFloat(
        (document.getElementById('boatLength') as HTMLInputElement).value,
      ),
      motorized: [
        (document.getElementById('motorized') as HTMLSelectElement).value,
      ],
      port: [(document.getElementById('port') as HTMLInputElement).value],
      country: (document.getElementById('country') as HTMLInputElement).value,
      type: (document.getElementById('type') as HTMLInputElement).value,
      skipper: (document.getElementById('skipper') as HTMLSelectElement).value,
      pictures: this.images,
      equipments: [], // Vous devrez ajouter la logique pour récupérer les équipements à partir du formulaire
      specifications: {}, // Vous devrez ajouter la logique pour récupérer les spécifications à partir du formulaire
      availability: {}, // Vous devrez ajouter la logique pour récupérer la disponibilité à partir du formulaire
      deposit: (document.getElementById('deposit') as HTMLInputElement).value,
      note: parseFloat(
        (document.getElementById('note') as HTMLInputElement).value,
      ),
      propertyPapers: [], // Vous devrez ajouter la logique pour récupérer les papiers à partir du formulaire
      idOwner: 0, // Vous devrez ajouter la logique pour récupérer l'ID du propriétaire à partir du formulaire
    };

    // Appelez la méthode createBoat du service API pour envoyer les données au backend
    this.apiService.createBoat(formData).subscribe(
      (response) => {
        console.log('Boat created successfully:', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error creating boat:', error);
      },
    );
  }

  resetForm() {
    this.boatFormData = {
      name: '',
      width: 0,
      length: 0,
      motorized: [],
      port: [],
      country: '',
      type: '',
      skipper: '',
      pictures: [],
      equipments: [],
      specifications: {},
      availability: {},
      deposit: '',
      note: 0,
      propertyPapers: [],
      idOwner: 0,
    };
  }
}
