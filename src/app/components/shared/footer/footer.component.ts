import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phoneNumber = '573137733408';
  defaultMessage = 'Estoy interesado en sus productos';

  openWhatsApp(): void {
    // Detectar si es dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    let whatsappUrl: string;
    
    if (isMobile) {
      // Para dispositivos móviles, intentar abrir la app de WhatsApp
      whatsappUrl = `whatsapp://send?phone=${this.phoneNumber}&text=${encodedMessage}`;
    } else {
      // Para escritorio, usar WhatsApp Web
      whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    }
    
    // Abrir WhatsApp en nueva ventana/pestaña
    window.open(whatsappUrl, '_blank');
  }
}
