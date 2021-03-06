"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restful_service_1 = require('../service/restful.service');
var app_component_1 = require('../app.component');
var UsersComponent = (function () {
    function UsersComponent(restfulService, parent) {
        this.restfulService = restfulService;
        this.parent = parent;
        this.users = [];
        this.epicLinks = [];
        this.editUser = {
            customs: {
                projects: [{}]
            }
        };
        this.tasks = ["Build", "Testing", "Plan"];
        this.refresh = function () {
            var component = this;
            this.restfulService.listUser(function (res) {
                component.users = res;
                for (var i = 0; i < component.users.length; i++) {
                    var user = component.users[i];
                    if (!user.customs) {
                        user.customs = {
                            active: false,
                            projects: [
                                {}
                            ]
                        };
                    }
                }
            });
        };
        this.newUser = function () {
            this.editUser = {
                customs: {
                    active: false,
                    projects: [{}]
                }
            };
            $("#newAddModal").modal("show");
        };
        this.edit = function (user) {
            this.editUser = JSON.parse(JSON.stringify(user));
            $("#newAddModal").modal("show");
        };
        this.del = function (project) {
            var projects = [];
            for (var i = 0; i < this.editUser.customs.projects.length; i++) {
                if (this.editUser.customs.projects[i] != project) {
                    projects.push(this.editUser.customs.projects[i]);
                }
            }
            this.editUser.customs.projects = projects;
            if (projects.length == 0) {
                this.editUser.customs.active = false;
            }
        };
        this.doSave = function () {
            var component = this;
            this.restfulService.saveUser(this.editUser, function (res) {
                if (res.key == 'success') {
                    $("#newAddModal").modal("hide");
                    component.refresh();
                }
            });
        };
        this.getEpicLinks = function () {
            var component = this;
            this.restfulService.listEpicLinks(function (res) {
                component.epicLinks = res;
            });
        };
        this.addCustom = function (user) {
            user.customs.projects.push({});
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.parent.setActiveByPath(this.parent.users);
        this.refresh();
        this.getEpicLinks();
    };
    ;
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: "views/users.html"
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService, app_component_1.AppComponent])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=view.users.js.map