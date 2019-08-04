import { SelectedPipe } from './selected.pipe';

describe('SelectedPipe', () => {
  it('create an instance', () => {
    const pipe = new SelectedPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns true if array contains element', () => {
    const pipe = new SelectedPipe();
    expect(pipe.transform('Toscana', ['Friuli-Venezia Giulia', 'Toscana', 'Veneto'])).toBe(true);
  });

  it('returns false if array doesn\' contain element', () => {
    const pipe = new SelectedPipe();
    expect(pipe.transform('Veneto', ['Friuli-Venezia Giulia', 'Lazio', 'Trentino - Alto Adige'])).toBe(false);
  });
});
