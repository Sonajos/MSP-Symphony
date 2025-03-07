import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogComponent } from './dialog/dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HavCoreModule, HavButtonModule, HavRadioButtonModule, HavCheckboxModule } from 'hav-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import {
  ConfirmationDialogBoxComponent,
  ConfirmationDialogTextComponent
} from './confirmation-dialog-box/confirmation-dialog-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertionDirective } from './dialog/insertion.directive';
import { SlideViewComponent, SlideViewTabComponent } from './slide-view/slide-view.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { SliderComponent } from './slider/slider.component';
import { NoteComponent } from './note/note.component';
import { ModalComponent } from './modal/modal.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { ModalHeaderComponent } from './modal/modal-header/modal-header.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { IconComponent } from './icon/icon.component';
import { HavLoaderComponent } from './hav-loader/hav-loader.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AccordionBoxComponent, AccordionBoxHeaderComponent, AccordionBoxContentComponent } from './accordion-box/accordion-box.component';
import { SelectComponent } from './select/select.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { CalculationReportModalComponent } from './report-modal/calculation-report-modal.component';
import { ResultColorScaleComponent } from './result-color-scale/result-color-scale.component';
import { PressureColorScaleComponent } from './pressure-color-scale/pressure-color-scale.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { StatusIconComponent } from './status-icon/status-icon.component';
import { ComparisonReportModalComponent } from "@shared/report-modal/comparison-report-modal.component";
import { OrdinalPipe } from "@shared/ordinal.pipe";
import { AnchorPipe } from "@shared/anchor.pipe";

@NgModule({
  declarations: [
    IconButtonComponent,
    ConfirmationDialogBoxComponent,
    ConfirmationDialogTextComponent,
    InsertionDirective,
    DialogComponent,
    SlideViewComponent,
    SlideViewTabComponent,
    MenuComponent,
    TabsComponent,
    TabComponent,
    SliderComponent,
    NoteComponent,
    ModalComponent,
    CheckboxGroupComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    SearchInputComponent,
    IconComponent,
    HavLoaderComponent,
    ToggleComponent,
    AccordionBoxComponent,
    AccordionBoxHeaderComponent,
    AccordionBoxContentComponent,
    SelectComponent,
    DragDropDirective,
    UploadFilesComponent,
    CalculationReportModalComponent,
    ComparisonReportModalComponent,
    ResultColorScaleComponent,
    PressureColorScaleComponent,
    PopupMessageComponent,
    StatusIconComponent,
    OrdinalPipe,
    AnchorPipe
  ],
  imports: [
    CommonModule,
    HavCoreModule,
    FontAwesomeModule,
    HavButtonModule,
    HavCheckboxModule,
    HavRadioButtonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    IconButtonComponent,
    ConfirmationDialogBoxComponent,
    ConfirmationDialogTextComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    DialogComponent,
    SlideViewComponent,
    SlideViewTabComponent,
    SearchInputComponent,
    SelectComponent,
    ToggleComponent,
    AccordionBoxComponent,
    AccordionBoxHeaderComponent,
    AccordionBoxContentComponent,
    MenuComponent,
    TabsComponent,
    TabComponent,
    SliderComponent,
    NoteComponent,
    CheckboxGroupComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    IconComponent,
    HavLoaderComponent,
    ResultColorScaleComponent,
    PopupMessageComponent,
    StatusIconComponent,
    RouterModule,
    TranslateModule,
    OrdinalPipe,
    AnchorPipe
  ]
})
export class SharedModule {}
