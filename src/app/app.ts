import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly heading = signal('Wielkanoc to bliskość, światło i nowe początki');
  protected readonly intro = signal(
    'Zatrzymaj się na chwilę, by wsłuchać się w dźwięk dzwonów i poczuć zapach świeżych mazurków. ' +
      'Wielkanoc przypomina, że nawet po najdłuższej zimie nadchodzi wiosna pełna obietnic.',
  );
  protected readonly blessings = signal([
    {
      title: 'Nadzieja',
      detail: 'Niech w sercu rozkwita wiara w dobre jutro i odwagę, by sięgać po nowe marzenia.',
    },
    {
      title: 'Ciepło',
      detail: 'Niech każdy rodzinny stół będzie pełen śmiechu, serdeczności i smaków dzieciństwa.',
    },
    {
      title: 'Spokój',
      detail: 'Znajdź chwilę tylko dla siebie, by złapać oddech i zachwycić się wiosną.',
    },
  ]);
  protected readonly chicks = signal([
    {
      name: 'Złoty Pisklak',
      message: 'Przynosi promienie słońca i przypomina, że wiosna lubi odważne plany.',
    },
    {
      name: 'Leśny Podlotek',
      message: 'Szuka zielonych gałązek, by udekorować stół spokojem i wdzięcznością.',
    },
    {
      name: 'Szmaragdowy Kurczak',
      message: 'Mruga wesoło i zachęca, by śmiać się głośno oraz dzielić się dobrem.',
    },
  ]);
  protected readonly traditions = signal([
    'Wielkanocny poranek zaczęty od wspólnej modlitwy i życzeń.',
    'Święcenie koszyczka wypełnionego pachnącym chlebem, jajkami i domowymi mazurkami.',
    'Spacer po pierwszych zielonych alejkach, by odnaleźć spokój i inspirację.',
    'Dzielnie się jajkiem jako symbolem jedności i wdzięczności za bliskość.',
  ]);
  protected readonly wish = signal(
    'Niech te Święta będą pełne małych cudów: rozmów, które ogrzewają, gestów, które wzmacniają, ' +
      'i uśmiechów, które zostają na dłużej. Witaj wiosnę z otwartym sercem!',
  );
}
