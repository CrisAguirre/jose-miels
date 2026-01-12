import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  phoneNumber = '573137733408';
  defaultMessage = 'Estoy interesado en sus productos';

  constructor() { }

  ngOnInit(): void {
    this.openWhatsApp();
  }

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
    
    // Abrir WhatsApp
    window.location.href = whatsappUrl;
    
    // Si no se abre la app en móvil, redirigir a WhatsApp Web después de un breve delay
    if (isMobile) {
      setTimeout(() => {
        window.location.href = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
      }, 500);
    }
  }
}
