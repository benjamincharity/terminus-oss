import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import {
  ControlValueAccessorProviderFactory,
  TsReactiveFormBaseComponent,
  TsStyleThemeTypes,
} from '@terminus/ui-utilities';


/**
 * Expose the MatSlideToggleChange event as TsSlideToggleChange. Used by {@link TsToggleComponent}
 */
export class TsSlideToggleChange extends MatSlideToggleChange {}


/**
 * The is a toggle component
 *
 * @example
 * <ts-toggle
 *              arialLabel="Disable my thing"
 *              [formControl]="yourHelperToGetFormControl('thingIsDisabled')"
 *              [isDisabled]="true"
 *              [isRequired]="true"
 *              labelPosition="before"
 *              name="My toggle"
 *              theme="accent"
 *              (selectionChange)="myMethod($event)"
 * >My Toggle!</ts-toggle>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-toggle</example-url>
 */
@Component({
  selector: 'ts-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  host: { class: 'ts-toggle' },
  providers: [ControlValueAccessorProviderFactory<TsToggleComponent>(TsToggleComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsToggle',
})
export class TsToggleComponent extends TsReactiveFormBaseComponent {
  /**
   * Define the aria label
   */
  @Input()
  public ariaLabel: string | undefined;

  /**
   * Allow the checked state to be set
   *
   * @param value
   */
  @Input()
  public set isChecked(value: boolean) {
    this._isChecked = value;
    this.value = this._isChecked;
  }
  public get isChecked(): boolean {
    return this._isChecked;
  }
  private _isChecked = false;

  /**
   * Define if the toggle should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the toggle is required
   */
  @Input()
  public isRequired = false;

  /**
   * Define the position of the label
   */
  @Input()
  public labelPosition: 'before' | 'after' = 'after';

  /**
   * Define the input name for the toggle
   */
  @Input()
  public name = 'toggle';

  /**
   * Define the theme
   */
  @Input()
  public theme: TsStyleThemeTypes = 'primary';

  /**
   * Emit an event each time the toggle value changes
   */
  @Output()
  public readonly selectionChange: EventEmitter<TsSlideToggleChange> = new EventEmitter();
}
