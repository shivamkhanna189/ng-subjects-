import { Component , OnInit} from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from "rxjs";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  private subject = new Subject();

  private behaviourSubject = new BehaviorSubject("Hi This is BehaviorSubject");

  private replaySubject = new ReplaySubject(2);
  ngOnInit(){

      /** Subject example */
      this.subject.subscribe(data=>{
        console.log("Subject:",data);
      })

      this.subject.next(100);
          this.subject.subscribe(data=>{
        console.log("Subject:",data);
      }); 

      /** BehaviorSubject Example */
      this.behaviourSubject.subscribe(data=>{
           console.log(" Behaviour Subject:",data);
      })
      this.behaviourSubject.next("1000");
      this.behaviourSubject.next("20000");
            this.behaviourSubject.subscribe(data=>{
           console.log("Behaviour Subject:",data);
      });


      /** Replay Subject Example */
      this.replaySubject.next(1);
      this.replaySubject.next(2);
      this.replaySubject.next(3);
      this.replaySubject.next(4);
      this.replaySubject.next(5);

      this.replaySubject.subscribe(data=>{
             console.log(" Replay Subject:",data);
      })

      this.replaySubject.next(1000);
        this.replaySubject.subscribe(data=>{
             console.log(" Replay Subject:",data);
      })


  }
}
