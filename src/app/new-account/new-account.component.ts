import { Component } from '@angular/core';

import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /**
   * La inyección solo está completa cuando especificamos aquí el proveedor:
   * No lo hacemos en porque heredamos las instancias de ambos establecidas
   * en app.module.ts. Si la especificáramos aquí de nuevo, estaríamos 
   * creando una nueva instancia, lo cual puede llevar a inconsistencias.
   */
  // providers: [LoggingService]
})
export class NewAccountComponent {

  /**
   * Inyección de las dependencias de LoggingService y AccountsService.
   */
  constructor(/*private loggingService: LoggingService,*/
              private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    // Aquí hacemos uso de las funciones de los servicios que hemos inyectado
    this.accountsService.addAccount(accountName, accountStatus);
    /**
     * Ya no llamamos a logStatusChange desde aquí, si no desde los métodos de
     * AccountsService
     */
    // this.loggingService.logStatusChange(accountStatus);
  }
}
