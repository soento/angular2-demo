import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../service/restful.service';
import { Response } from '@angular/http';
import {AppComponent} from '../app.component';
@Component({
    selector: 'app-epic-links',
    templateUrl:"views/epic-links-view.html"
})

export class EpicLinksComponent implements OnInit{
    constructor (private restfulService: RestfulService, private parent: AppComponent) {}
    epicLinks = [];
    editEpicLink = {};
    ngOnInit(){
        this.parent.setActiveByPath(this.parent.epicLinks);
        this.getEpicLinks();
    };
    getEpicLinks = function(){
        var component = this;
        this.restfulService.listEpicLinks(function(res){
            component.epicLinks = res;
        });
    }

    newEpicLink = function(){
        this.editEpicLink = {};
        $("#newAddModal").modal("show");
    }

    doSave = function(){
        var component = this;
        this.restfulService.saveEpicLink(this.editEpicLink, function(res){
            if(res.key=='success'){
                $("#newAddModal").modal("hide");
                component.getEpicLinks();
            }
        });
    }

    edit = function(link){
        this.editEpicLink = JSON.parse(JSON.stringify(link));
        $("#newAddModal").modal("show");
    }
}

