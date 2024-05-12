import { MFService } from './microfrontend.service';
import { Observable } from 'rxjs';
import { CustomRemoteConfig } from './models';

export class MfGuard {
  constructor(private readonly mfService: MFService) {}

  checkAvailableRemotes$(): Observable<unknown> {
    return null;
  }

  selectAvailableRemotes$(): Observable<CustomRemoteConfig> {
    return null;
  }
}
