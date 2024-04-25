import { Component, OnInit } from '@angular/core';

import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Establecemos el proveedor de AccountsService en app.module.ts
  // providers: [LoggingService]
})
export class AppComponent implements OnInit {

  /**
   * Ahora el array de accounts se encuentra en accountsService, de modo que
   * debemos instanciar esa clase aquí.
   */
  accounts: {name: string, status:string}[] = [];

  /**
   * Instanciamos accountsService
   */
  constructor(private accountsService: AccountsService) {}
  
  ngOnInit(): void {
    // Accedemos al array de accounts de AccountsService
    this.accounts = this.accountsService.accounts;
  }
}
