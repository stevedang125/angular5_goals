import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(goals: any, term: any): any {
    // Check if search term is undefined
    if(term === undefined) return goals;
    // return updated goals array
    return goals.filter(function(return_val){
      return return_val.color.toLowerCase().includes(term.toLowerCase()); 
  })
  }

}
