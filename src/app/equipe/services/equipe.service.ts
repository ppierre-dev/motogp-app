import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipe } from '../models/equipe';

@Injectable()
export class EquipeService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Equipe[]> {
    return this._http.get<Equipe[]>(environment.iutApiBaseUrl + "/teams");
  }

  delete(id: number): Observable<string>{
    return this._http.delete<string>(environment.iutApiBaseUrl+"/teams/"+id);
  }

  update(equipe: Equipe): Observable<string>{
    return this._http.put<string>(environment.iutApiBaseUrl+"/teams/"+equipe.id, equipe);
  }

  create(equipe: Equipe): Observable<string>{
    return this._http.post<string>(environment.iutApiBaseUrl+"/teams", equipe);
  }

  getById(id: number): Observable<Equipe>{
    return this._http.get<Equipe>(environment.iutApiBaseUrl+"/teams/"+id);
  }
}


