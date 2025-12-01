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

export const formatType = (type) => {
  let typeText = '';
      switch (type) {
        case 'internal':
          typeText = 'Interna (empleados)';
          break;
        case 'external':
          typeText = 'Externa (clientes)';
          break;
        case 'mixed':
          typeText = 'Mixta';
          break;
        default:
          typeText = 'No especificado';
      }
  return typeText
}

export const formatDistributionMethod = (distributionMethod) => {
  let distributionText = '';
      
      switch (distributionMethod) {
        case 'link':
          distributionText = 'Enlace público';
          break;
        case 'email':
          distributionText = 'Envío por correo electrónico';
          break;
        case 'specific':
          distributionText = 'Usuarios específicos (2 seleccionados)';
          break;
        case 'department':
          distributionText = 'Por departamento';
          break;
        default:
          distributionText = 'No especificado';
      }

  return distributionText
}
