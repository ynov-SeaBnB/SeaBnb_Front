import { Component } from '@angular/core';


interface Boat {
  name: string;
  isActive: boolean;
  imagePath: string;
}
@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent {
  boats: Boat[] = [
    { name: 'Engine', isActive: false, imagePath: '../../assets/images/icons/engine.png' },
    { name: 'Sailing ship', isActive: false, imagePath: '../../assets/images/icons/sailing.png' },
    { name: 'Semi-rigid', isActive: false, imagePath: '../../assets/images/icons/semi-rigid.png' },
    { name: 'Catamaran', isActive: false, imagePath: '../../assets/images/icons/catamaran.png' },
    { name: 'Barge', isActive: false, imagePath: '../../assets/images/icons/barge.png' },
    { name: 'Schooner', isActive: false, imagePath: '../../assets/images/icons/schooner.png' },
    { name: 'Boat without license', isActive: false, imagePath: '../../assets/images/icons/boatwithoutlicense.png' },
    { name: 'Yacht', isActive: false, imagePath: '../../assets/images/icons/yacht.png' }
    
  ];

  toggleBackgroundColor(clickedBoat: Boat) {
    this.boats.forEach(boat => {
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
}

