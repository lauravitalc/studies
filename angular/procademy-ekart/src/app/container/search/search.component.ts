import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }

  // updateSearchText(event: any){
  //   this.searchText = event.target.value;
  // }

  // updateSearchText(input: HTMLInputElement){
  //   this.searchText = input.value;
  //   this.searchTextChanged.emit(this.searchText);
  // }
  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
