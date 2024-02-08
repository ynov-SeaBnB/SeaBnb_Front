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
  deposit: number;
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
  boatFormData: BoatFormData = {
    name: '',
    width: 0,
    length: 0,
    motorized: ['Yes', 'Caterpillar 3412 Е x 2'],
    port: ['', ''],
    country: '',
    type: 'pas la bonne donnée',
    skipper: '',
    pictures: [
      '/src/assets/images/idUser/nameBateau/img1',
      '/src/assets/images/idUser/nameBateau/img2',
      '/src/assets/images/idUser/nameBateau/img3',
    ],
    equipments: ['efgrz', 'efzgr'],
    specifications: {
      AvgSpeed: 10.3,
      MaxSpeed: 13.8,
      Constructor: 'tkt',
      ConstructionYear: 0,
    },
    availability: {
      '2023-10-12': '2023-10-15',
      '2023-10-18': '2023-10-23',
    },
    deposit: 0,
    note: 5,
    propertyPapers: [
      '/src/assets/documents/idUser/nameBateau/carteIdentite',
      '/src/assets/documents/idUser/nameBateau/certificatEnregistrement',
      '/src/assets/documents/idUser/nameBateau/portEnregistrement',
      '/src/assets/documents/idUser/nameBateau/taxeAnnuelle',
    ],
    idOwner: 1,
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
  selectedOption: string = 'option2';
  inputText: string = '';
  images: string[] = [];
  documents: File[] = [];

  constructor(private apiService: ApiService) {}

  toggleBackgroundColor(clickedBoat: Boat) {
    this.boats.forEach((boat) => {
      if (boat !== clickedBoat) {
        boat.isActive = false;
      }
    });
    this.boatFormData.type = clickedBoat.name;
    clickedBoat.isActive = !clickedBoat.isActive;
  }

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

  onDropDocument(event: DragEvent) {
    // Gérer le glisser-déposer pour les documents
    const files = event.dataTransfer?.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.documents.push(file);
      }
    }

    event.preventDefault();
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

  deleteDocument(index: number) {
    this.documents.splice(index, 1);
  }

  onSubmit() {
    const jsonData = {
      name: this.boatFormData.name,
      width: this.boatFormData.width,
      length: this.boatFormData.length,
      motorized: this.boatFormData.motorized,
      port: this.boatFormData.port,
      country: this.boatFormData.country,
      type: this.boatFormData.type,
      skipper: this.boatFormData.skipper,
      pictures: this.boatFormData.pictures,
      equipments: this.boatFormData.equipments,
      specifications: this.boatFormData.specifications,
      availability: this.boatFormData.availability,
      deposit: this.boatFormData.deposit,
      note: this.boatFormData.note,
      propertyPapers: this.boatFormData.propertyPapers,
      idOwner: this.boatFormData.idOwner,
    };
    this.apiService.createBoat(jsonData).subscribe({
      next: async () => {
        try {
          console.log('Le bateau a été ajouté avec succès');
          await this.resetForm();
        } catch (error) {
          console.error("Une erreur s'est produite lors de l'ajout :", error);
        }
      },
      error: (error) => {
        console.error("Une erreur s'est produite lors de l'ajout :", error);
      },
    });
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
      deposit: 0,
      note: 0,
      propertyPapers: [],
      idOwner: 0,
    };
  }
}
