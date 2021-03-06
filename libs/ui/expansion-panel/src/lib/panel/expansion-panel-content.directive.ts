import {
  Directive,
  TemplateRef,
} from '@angular/core';


/**
 * {@link TsExpansionPanelComponent} content that will be rendered lazily when the panel is opened for the first time.
 *
 * @example
 * <ts-expansion-panel>
 *               <ts-expansion-panel-trigger>
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               <ng-template tsExpansionPanelContent>
 *                 Panel content
 *               </ng-template>
 * </ts-expansion-panel>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-expansion-panel</example-url>
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'ng-template[tsExpansionPanelContent]' })
export class TsExpansionPanelContentDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public template: TemplateRef<any>) {}
}
