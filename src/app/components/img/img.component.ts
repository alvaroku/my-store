import { Component, OnInit, Input,Output,EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges, AfterViewInit,OnDestroy {
  //para escuchar solo el cambio de un @input
  img: string=""
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImage:string){
    this.img = newImage
    console.log("solo cambió img=>",this.img)
  }
  @Input() alt :string = ""
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/default.png'
  /* counter = 0
  counterFn:number|undefined */
  constructor() {
    //before render
    //NO async
    console.log('constructor',this.img)
  }
  ngOnChanges(changes:SimpleChanges){
    //before - durante render
    //changes @inputs -- corre muchas veces
    console.log('ngOnChanges','imgValue => ',this.img)
    console.log('changes ',changes)
    //si hay varios, hacer condicion
  }
  ngOnInit(): void {
    //before render
    //async
    //llamadas apis -- corre una vez
    console.log('ngOnInit','imgValue => ',this.img)
    /* this.counterFn = window.setInterval(() => {
      this.counter+=1
      console.log('counter',this.counter)
    },1000) */
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy')
    //window.clearInterval(this.counterFn)
  }
  imgError(){
    this.img = this.imageDefault
  }
  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img)
  }
}
