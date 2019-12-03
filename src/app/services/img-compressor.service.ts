import { Injectable, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  	providedIn: 'root'
})
export class ImgCompressorService {

	private renderer: Renderer2;

	constructor() { 
	}

 	compress(file: File, width: number): Observable<any> {  // For scaling relative to width
	    const reader = new FileReader();
	    reader.readAsDataURL(file);
	    return Observable.create(observer => {
	    	reader.onload = ev => {
		        const img = new Image();
		        img.src = (ev.target as any).result;
		        (img.onload = () => {
		        	const elem = this.renderer.createElement('canvas'); // Use Angular's Renderer2 method
		          	const scaleFactor = width / img.width;
		         	elem.width = width;
		          	elem.height = img.height * scaleFactor;
		          	const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
		          	ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
		          	ctx.canvas.toBlob(blob => {
		            		observer.next(
			                	new File([blob], file.name, {
		                  			type: 'image/jpeg',
		                  			lastModified: Date.now()
		                		})
	              			);
	            		},
	            		'image/jpeg',
	            		1
	          		);
	        	}),
	          	(reader.onerror = error => observer.error(error));
	      	};
	    });
	}
}