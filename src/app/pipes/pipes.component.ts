import { Component } from '@angular/core';

@Component({
    selector: 'pipes',
    templateUrl:'pipes.component.html',
    styles:['./pipes.component.css']
})
export class PipesComponent {

    data = {
        title: "My sample title",
        rating: 4.9725,
        total: 9523456,
        price: 19034.98,
        releaseDate: new Date(2017, 11, 23)
    }

    text = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.  he thought. It wasn a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops';

}