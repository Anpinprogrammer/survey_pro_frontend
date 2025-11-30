export const iconText = (type) => {
    let typeIcon, typeText;
      switch (type) {
        case 'multiple-choice':
          typeIcon = 'fa-circle-dot';
          typeText = 'Opción múltiple';
          break;
        case 'checkbox':
          typeIcon = 'fa-check-square';
          typeText = 'Casillas de verificación';
          break;
        case 'text':
          typeIcon = 'fa-font';
          typeText = 'Texto abierto';
          break;
        case 'rating':
          typeIcon = 'fa-star';
          typeText = 'Escala de valoración';
          break;
        case 'yes-no':
          typeIcon = 'fa-toggle-on';
          typeText = 'Sí/No';
          break;
        case 'dropdown':
          typeIcon = 'fa-caret-down';
          typeText = 'Desplegable';
          break;
        default:
          typeIcon = 'fa-question';
          typeText = 'Otro';
      }
    
    return { typeIcon, typeText }  
}