import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    @ViewChild(IonSlides, { static: false }) slides: IonSlides;
    slideOpts = {
        initialSlide: 2,
    };

    constructor() {
    }

    async nextSlide() {
        await this.slides.slideNext();
        this.slideOpts.initialSlide = await this.slides.getActiveIndex();
    }

    async drag(e) {
        // todo need to find other way
        setTimeout(async () => {
            this.slideOpts.initialSlide = await e.target.getActiveIndex();
        }, 100);
    }

}
