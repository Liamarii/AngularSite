import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FooterService {
    private footerTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

    setFooterText(text: string): void {
        this.footerTextSubject.next(text);
    }

    getFooterText(): Observable<string> {
        return this.footerTextSubject.asObservable();
    }
}
