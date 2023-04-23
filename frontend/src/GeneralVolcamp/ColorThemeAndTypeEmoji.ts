//FIXME refer to the swagger API for name matching https://volcamp-api-dev.azurewebsites.net/swagger-ui/#/Referential%20API/get_talk_themes
export function getColorTheme(input: string): string  {
  if (input.toLowerCase().includes('plénière')) {
    return '#FC5A45';
  } else if (input.toLowerCase().includes('lang') || input.toLowerCase().includes('frameworks')) {
    return '#DCA242';
  } else if (input.toLowerCase().includes('bigdata') || input.toLowerCase().includes('ai')) {
    return '#89FA98';
  } else if (input.toLowerCase().includes('web') || input.toLowerCase().includes('mobile')) {
    return '#33BAB5';
  } else if (input.toLowerCase().includes('archi') || input.toLowerCase().includes('perf') || input.toLowerCase().includes('secu')) {
    return '#4B78CB';
  } else if (input.toLowerCase().includes('devops') || input.toLowerCase().includes('cloud')) {
    return '#FFE5A8';
  } else if (input.toLowerCase().includes('ux') || input.toLowerCase().includes('ui')) {
    return '#FF94A4';
  } else if (input.toLowerCase().includes('découverte')) {
    return '#AF7E66';
  } else {
    return '#EEEEEE';
  }
}

export function getIconFormat(input: string): string  {
  if (input.toLowerCase().includes('conférence')) {
    return 'school';
  } else if (input.toLowerCase().includes('rex') ) {
    return 'cached';
  } else if (input.toLowerCase().includes('workshop')) {
    return 'science';
  } else if (input.toLowerCase().includes('lightning') ) {
    return 'speed';
  } else {
    return ''; //FIXME maybe you could choose a default one rather than none
  }
}


