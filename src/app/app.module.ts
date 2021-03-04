import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { TableModule } from "primeng/table";
import { TreeModule } from "primeng/tree";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FieldsetModule } from "primeng/fieldset";
import { AccordionModule } from "primeng/accordion";
import { MultiSelectModule } from "primeng/multiselect";
import { FormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplitterModule,
    ButtonModule,
    TableModule,
    TreeModule,
    InputTextModule,
    AutoCompleteModule,
    FieldsetModule,
    AccordionModule,
    MultiSelectModule,
    FormsModule,
    CardModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
