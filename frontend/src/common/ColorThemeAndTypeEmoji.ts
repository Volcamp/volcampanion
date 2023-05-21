export const THEME_DEFAULT = "Inconnue"

export function getColorTheme(input: string): string {
  if (input.toLowerCase().includes('plenary')) {
    return '#FC5A45';
  } else if (input.toLowerCase().includes('lang') || input.toLowerCase().includes('framework')) {
    return '#DCA242';
  } else if (input.toLowerCase().includes('big') || input.toLowerCase().includes('data') || input.toLowerCase().includes('ai')) {
    return '#89FA98';
  } else if (input.toLowerCase().includes('web') || input.toLowerCase().includes('mobile')) {
    return '#33BAB5';
  } else if (input.toLowerCase().includes('archi') || input.toLowerCase().includes('perf') || input.toLowerCase().includes('secu')) {
    return '#4B78CB';
  } else if (input.toLowerCase().includes('devops') || input.toLowerCase().includes('cloud')) {
    return '#FFE5A8';
  } else if (input.toLowerCase().includes('ux') || input.toLowerCase().includes('ui')) {
    return '#FF94A4';
  } else if (input.toLowerCase().includes('discovery')) {
    return '#AF7E66';
  } else {
    return '#EEEEEE';
  }
}

export function getIconFormat(input: string): string {
  if (input.toLowerCase().includes('coference')) {
    return 'school';
  } else if (input.toLowerCase().includes('rex')) {
    return 'cached';
  } else if (input.toLowerCase().includes('workshop')) {
    return 'science';
  } else if (input.toLowerCase().includes('lightning')) {
    return 'speed';
  } else if (input.toLowerCase().includes('keynote')) {
    return 'edit_note';
  } else if (input.toLowerCase().includes('break')) {
    return 'free_breakfast';
  } else if (input.toLowerCase().includes('delimiter_day')) {
    return 'linear_scale';
  } else {
    return 'volcano';
  }
}


