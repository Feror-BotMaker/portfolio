import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.listen('window', 'mousemove', (event) => {
      // Déplacer l'élément
      const follower = this.el.nativeElement.querySelector('#mousemove');
      this.renderer.setStyle(follower, 'left', `${event.pageX}px`);
      this.renderer.setStyle(follower, 'top', `${event.pageY}px`);
    });
    this.renderer.listen('window', 'mousedown', (event) => {
      // Ajouter une classe à l'élément
      const follower = this.el.nativeElement.querySelector('#mousemove');
      this.renderer.addClass(follower, 'clicked');
    });
    this.renderer.listen('window', 'mouseup', (event) => {
      // Ajouter une classe à l'élément
      const follower = this.el.nativeElement.querySelector('#mousemove');
      this.renderer.addClass(follower, 'click-end');
      setTimeout(() => {
        this.renderer.removeClass(follower, 'clicked');
        this.renderer.removeClass(follower, 'click-end');
      }, 200);
    });
  }
}
