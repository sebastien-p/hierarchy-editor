import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  error(message: string): void {
    alert('Error: ' + message);
  }

  confirm(): boolean {
    return confirm('Are you sure?');
  }
}