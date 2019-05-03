/*
 * Main/top menu component.
 */
declare const IMAGINARY: any;
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Preset } from '../services/presets.service';

@Component({
  selector: 'hs-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  // This is a dumb, stateless component with immutable inputs. We can use
  // OnPush change detection.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  @Input() playing: boolean;
  @Output() start = new EventEmitter<any>();
  @Output() stop = new EventEmitter<any>();
  @Output() switchToPreset = new EventEmitter<Preset>();

  @Input() fundamentalFrequency: number;
  @Output() fundamentalFrequencyChange = new EventEmitter<number>();

  text = IMAGINARY.i18n.getStrings();

  switchToSine() {
    this.switchToPreset.next(Preset.Sine);
  }

  switchToSawTooth() {
    this.switchToPreset.next(Preset.SawTooth);
  }

  switchToSquare() {
    this.switchToPreset.next(Preset.Square);
  }

  switchLanguage(langCode : string) {
    IMAGINARY.i18n.setLang(langCode);
    this.text = IMAGINARY.i18n.getStrings();
  }
}
