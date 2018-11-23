import { 
    trigger, 
    style, 
    animate, 
    transition, 
    query, 
    animateChild, 
    group,
    state
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], {optional: true}),
        query(':enter', [
            style({ left: '-100%'})
        ], {optional: true}),
        query(':leave', animateChild(), {optional: true}),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '100%'}))
            ], {optional: true}),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%'}))
            ], {optional: true})
        ]),
        query(':enter', animateChild(), {optional: true})
    ])
]);

export const fadeInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], {optional: true}),
        query(':enter', [
            style({ opacity: 0})
        ], {optional: true}),
        /*query(':leave', animateChild(), {optional: true}),*/
        group([
            query(':leave', [
                animate('300ms ease-out', style({ opacity: 0 }))
            ], {optional: true}),
            query(':enter', [
                animate('300ms ease-out', style({ opacity: 1 }))
            ], {optional: true}),
        ]),
        /*query(':enter', animateChild(), {optional: true})*/
    ])
]);

export const footerAnimation = trigger('footerAnimations', [
      transition('* <=> *', [
        query('*', [style({opacity: 0 })], {optional: true}),
        animate(300, style({opacity: 1}))
      ])
]);