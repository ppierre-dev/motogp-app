import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilote } from '../models/pilote';

@Injectable()
export class PiloteService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Pilote[]> {
    return this._http.get<Pilote[]>(environment.iutApiBaseUrl + "/pilotes");
  }

  delete(id: number): Observable<string>{
    return this._http.delete<string>(environment.iutApiBaseUrl+"/pilotes/"+id);
  }

  update(pilote: Pilote): Observable<string>{
    return this._http.put<string>(environment.iutApiBaseUrl+"/pilotes/"+pilote.id, pilote);
  }

  create(pilote: Pilote): Observable<string>{
    return this._http.post<string>(environment.iutApiBaseUrl+"/pilotes", pilote);
  }

  getById(id: number): Observable<Pilote>{
    return this._http.get<Pilote>(environment.iutApiBaseUrl+"/pilotes/"+id);
  }

  getTeamInfos(id: number): Observable<any>{
    return this._http.get<any>(environment.iutApiBaseUrl+"/pilotes/"+id+"/team");
  }
}


