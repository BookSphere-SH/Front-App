import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-format-published-book',
  standalone: true,
  imports: [],
  templateUrl: './select-format-published-book.component.html',
  styleUrl: './select-format-published-book.component.css'
})
export class SelectFormatPublishedBookComponent {
  selectedFormats: string[] = [];

  @Output() formatSelected = new EventEmitter<{ format: string, event: Event }>();

  // Función para alternar la selección de formatos
  toggleFormat(format: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.selectedFormats.push(format);
    } else {
      this.selectedFormats = this.selectedFormats.filter(f => f !== format);
    }

    this.formatSelected.emit({ format, event });
  }

  // Verificar si está seleccionado el formato físico
  isPhysicalSelected(): boolean {
    return this.selectedFormats.includes('physical');
  }

  // Verificar si está seleccionado el formato digital
  isDigitalSelected(): boolean {
    return this.selectedFormats.includes('digital');
  }

  // Evento para manejar la subida del archivo digital si se selecciona el formato digital
  fileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      console.log('Digital file selected:', input.files[0]);
      // Aquí puedes manejar el archivo subido
    }
  }
}
