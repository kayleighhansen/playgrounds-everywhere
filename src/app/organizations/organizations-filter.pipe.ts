import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from './organization.model';

@Pipe({
  name: 'organizationsFilter'
})
export class OrganizationsFilterPipe implements PipeTransform {

  transform(organizations: Organization[], term) {
    let filteredArray: Organization[] =[];  
    for (let i=0; i<organizations.length; i++) {
      let organization = organizations[i];
      if (organization.name.toLowerCase().includes(term)) {
          filteredArray.push(organization);
      }
    }
    if (filteredArray.length < 1){
      return organizations;
    }
    return filteredArray;
  }
}
