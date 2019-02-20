import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

	mobile: boolean = false;
	expanded: boolean = false;
  section: string = "home";

  constructor() {
  	if($(window).innerWidth() < 800){
			this.mobile = true;
		}
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  navEnter(id){
  	if(!$("#" + id).hasClass('span-after')){
  		$("#" + id).css({'top': '0px', 'transition': 'top .25s'});
  	}
  }

  navLeave(id){
  	if(!$("#" + id).hasClass('span-after')){
  		$("#" + id).css({'top': '4px', 'transition': 'top 0s'});
  	}
  }

  highlight(name){
  	$('.nav-after').removeClass('nav-after');
  	$('.span-after').css({'top': '4px', 'transition': 'top 0s'});
  	$('.span-after').removeClass('span-after');
  	$("[data-name="+name+"]").addClass('nav-after');
  	$("#" + name).css({'top': '0px', 'transition': 'top 0s'});
  	$("#" + name).addClass('span-after');
    $('html, body').animate({
      scrollTop: $($("#" + name + "-section")).offset().top - 300
    }, 700);
  }

  expandNav(){
  	this.expanded = !this.expanded;
  	$(".fa-sort-down").addClass('open-nav');
  	setTimeout(()=>{
  		if(this.expanded){
	  		$('.from-top').addClass('to-bottom');
	  	}
	  	$(".fa-sort-down").removeClass('open-nav');
  	}, 100);
  }

  highlightMobileNav(name){
    this.section = name;
  	$("#" + name).addClass('banner-after');
  	setTimeout(()=>{
  		$("#" + name).removeClass('banner-after');
      this.expanded = !this.expanded;
  	}, 200);
    if(name != 'skills'){
      $('html, body').animate({
        scrollTop: $($("#" + name + "-anchor").attr('href')).offset().top - 250
      }, 700);
    } else {
      $('html, body').animate({
        scrollTop: $($("#" + name + "-anchor").attr('href')).offset().top - 150
      }, 700);
    }
    
  }

}
